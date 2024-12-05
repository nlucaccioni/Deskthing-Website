import { Download } from 'lucide-react';

async function fetchAllReleases() {
  const url = `https://api.github.com/repos/itsriprod/deskthing/releases`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Revalidate cache every hour
    });

    if (!response.ok) {
      throw new Error(`Error fetching releases: ${response.statusText}`);
    }

    const releases = await response.json();

    // Extract required data from each release and filter by asset name containing "deskthing"
    return releases
      .map((release) => {
        const assets = release.assets.filter((asset) =>
          asset.name.toLowerCase().includes("deskthing")
        );

        if (assets.length === 0) return null; // Skip releases with no "deskthing" assets

        // Raw file names and URLs
        const rawFiles = assets.map((asset) => ({
          name: asset.name,
          url: asset.browser_download_url,
        }));

        return {
          version: release.tag_name,
          releaseDate: release.published_at,
          releaseNotes: release.body,
          rawFiles,
          platforms: {
            linuxDeb: assets.find(
              (asset) => asset.name.includes("amd64") && asset.name.endsWith(".deb")
            )?.browser_download_url,
            linuxAppImage: assets.find(
              (asset) =>
                asset.name.includes("linux") && asset.name.endsWith(".AppImage")
            )?.browser_download_url,
            macArm64: assets.find((asset) => asset.name.includes("mac_arm64"))
              ?.browser_download_url,
            macX64: assets.find((asset) => asset.name.includes("mac_x64"))
              ?.browser_download_url,
            raspberry: assets.find((asset) => asset.name.includes("raspberry"))
              ?.browser_download_url,
            windows: assets.find((asset) => asset.name.includes("win"))
              ?.browser_download_url,
          },
        };
      })
      .filter(Boolean); // Remove null entries
  } catch (error) {
    console.error(error);
    return [];
  }
}

function SmallReleaseDownload({ label, url }) {
  return (
    <a
      href={url}
      className="flex flex-row gap-2 items-center hover:text-green-400 transition ease-in-out duration-100"
    >
      <Download size="14" strokeWidth="3" />
      <p className="font-medium">{label}</p>
    </a>
  );
}

function LatestReleaseGrid({ platforms, version }) {
  return (
    <>
      {Object.entries(platforms)
        .filter(([, url]) => url)
        .map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            className="p-6 border border-neutral-800 rounded-lg flex flex-row justify-between 
            items-center bg-neutral-925 hoverDropShadow hover:text-green-600 transform ease-in-out duration-200" 
          >
            <div>
              <h3 className="font-sans font-medium text-3xl text-neutral-50">
                {platform}
              </h3>
              <p className="font-mono text-neutral-400">{version}</p>
            </div>
            <Download size="2rem" />
          </a>
        ))}
    </>
  );
}

function ReleasesCard({ release }) {
  return (
    <div className="p-6 border bg-neutral-925 border-neutral-800 rounded-lg flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <h4 className="font-mono text-green-600 font-bold">{release.version}</h4>
        <p className="font-medium text-neutral-400 font-mono">
          {new Date(release.releaseDate).toLocaleDateString()}
        </p>
        <p className="text-sm text-neutral-400 break-words">
          {release.releaseNotes.slice(0, 200)}...
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {release.rawFiles.map((file, index) => (
          <SmallReleaseDownload key={index} label={file.name} url={file.url} />
        ))}
      </div>
    </div>
  );
}

export default async function ReleasesPage() {
  const releases = await fetchAllReleases();
  const latestRelease = releases[0];
  const previousReleases = releases.slice(1);

  const getPreviewNotes = (notes, charLimit = 200) => {
    if (!notes) return '';
    return notes.length > charLimit ? `${notes.slice(0, charLimit)}...` : notes;
  };

  return (
    <div className="min-h-svh flex flex-row justify-between pt-nav mx-6 2xl:mx-0">
      <div className="wideContainer flex flex-col mx-auto gap-6">
        {latestRelease && (
          <>
            <h2 className="mb-auto">Latest Release</h2>
            <div className="flex flex-col gap-1 -mt-3">
              <h3 className="font-mono text-green-600">{latestRelease.version}</h3>
              <p className="font-medium text-neutral-400 font-mono">
                {new Date(latestRelease.releaseDate).toLocaleDateString()}
              </p>
              <p className="font-medium">{`${latestRelease.version} Release Notes`}</p>
              <p className="text-sm text-neutral-400 break-words characterLimit">
                {latestRelease.releaseNotes}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              <LatestReleaseGrid
                platforms={latestRelease.platforms}
                version={latestRelease.version}
              />
            </div>
          </>
        )}

        <h2 id="previousreleases" className="mb-auto mt-4 scroll-mt-[8rem]">Previous Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full">
          {previousReleases.map((release, index) => (
            <ReleasesCard key={index} release={release} />
          ))}
        </div>
      </div>
    </div>
  );
}
