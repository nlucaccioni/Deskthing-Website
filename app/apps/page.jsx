import { Download, ExternalLink } from 'lucide-react';

const titleCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export async function fetchOfficialAppsData() {
  const repo = "ItsRiprod/Deskthing-Apps";
  const repoApiUrl = `https://api.github.com/repos/${repo}`;
  const releasesApiUrl = `${repoApiUrl}/releases`;

  try {
    // Fetch release data
    const releaseResponse = await fetch(releasesApiUrl, {
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!releaseResponse.ok) {
      console.error(`Failed to fetch releases for ${repo}: ${releaseResponse.statusText}`);
      return null;
    }

    const releases = await releaseResponse.json();
    if (releases.length === 0) {
      console.warn(`No releases found for ${repo}`);
      return null;
    }

    const latestRelease = releases[0];
    const { html_url: latestReleaseUrl, author, published_at: date, html_url: repoUrl } = latestRelease;

    // Extract app names from the release data (assuming release assets contain app names)
    const appNames = releases[0].assets.map((asset) => {
      // Extract the app name before "-app-v0.9.0.zip" (version may vary)
      const appNameMatch = asset.name.match(/^(.*?)\s*-app-v\d+\.\d+\.\d+\.zip$/);
      if (appNameMatch) {
        // Apply title case and return the app name
        return titleCase(appNameMatch[1]);
      }
      return null; // Return null if the format is not matched
    }).filter(Boolean); // Filter out null values in case of unmatched assets

    return {
      appNames, // List of app names
      latestReleaseUrl, // Latest release URL for all apps
      repoUrl, // Repo URL for all apps
      releaseDate: new Date(date).toLocaleDateString(), // Convert release date to a human-readable format
    };
  } catch (error) {
    console.error(`Error fetching data for ${repo}:`, error);
    return null;
  }
}

export async function fetchLatestReleasesFromRepos(repos) {
  const fetchRepoData = async (repo) => {
    const repoApiUrl = `https://api.github.com/repos/${repo}`;
    const releasesApiUrl = `${repoApiUrl}/releases`;

    try {
      // Fetch repository metadata for description and repo URL
      const repoResponse = await fetch(repoApiUrl, {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 }, // Cache revalidation every hour
      });

      if (!repoResponse.ok) {
        console.error(`Failed to fetch repository data for ${repo}: ${repoResponse.statusText}`);
        return null;
      }

      const repoData = await repoResponse.json();
      const { description, html_url, owner } = repoData;

      // Fetch latest release data
      const releaseResponse = await fetch(releasesApiUrl, {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 }, // Cache revalidation every hour
      });

      if (!releaseResponse.ok) {
        console.error(`Failed to fetch releases for ${repo}: ${releaseResponse.statusText}`);
        return null;
      }

      const releases = await releaseResponse.json();
      if (releases.length === 0) {
        console.warn(`No releases found for ${repo}`);
        return null;
      }

      const latestRelease = releases[0];
      const { html_url: latestReleaseUrl, published_at: date, author } = latestRelease;

      return {
        appName: repo.split("/")[1], // Extract the repository name as app name
        authorName: author?.login || owner?.login || "Unknown", // Author name or fallback to owner
        description: description || "No description available.",
        date: new Date(date).toLocaleDateString(),
        latestReleaseUrl,
        repoUrl: html_url,
      };
    } catch (error) {
      console.error(`Error fetching data for ${repo}:`, error);
      return null;
    }
  };

  // Fetch data for all repositories in parallel
  const releaseData = await Promise.all(repos.map(fetchRepoData));

  // Filter out null entries in case of failures
  return releaseData.filter(Boolean);
}

export function OfficialAppCard({ appName, latestReleaseUrl, repoUrl, releaseDate }) {
  return (
    <div className="p-6 border border-neutral-800 rounded-lg flex flex-col gap-2
    bg-neutral-925 hoverDropShadow transition ease-in-out duration-200">
      <h4 className="text-left w-full font-medium">{appName}</h4>
      <p className="text-left w-full font-mono text-neutral-400 text-sm">
        {releaseDate}
      </p>
      <div className="flex flex-row gap-2">
        <a
          href={latestReleaseUrl}
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm 
          hover:bg-green-600 transition ease-in-out duration-200 hoverDropShadow"
        >
          Latest
          <Download size="20px" />
        </a>
        <a
          href={repoUrl}
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm text-neutral-400
          hover:bg-neutral-50/10 transition ease-in-out duration-200"
        >
          App Repo
          <ExternalLink size="20px" />
        </a>
      </div>
    </div>
  );
}

export function AppCard({ appName, authorName, description, latestReleaseUrl, repoUrl }) {
  return (
    <div className="p-6 border border-neutral-800 rounded-lg flex flex-col justify-between gap-2
    bg-neutral-925 hoverDropShadow transition ease-in-out duration-200">
      <div className='flex flex-col gap-2'>
        <h5 className="text-left text-2xl w-full font-medium text-green-600">{appName}</h5>
        <p className="text-left w-full font-mono text-neutral-400 text-sm">
          by {authorName}
        </p>
        <p className="text-left w-full mb-1">
          {description}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <a
          href={latestReleaseUrl}
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm 
          hover:bg-green-600 transition ease-in-out duration-200 hoverDropShadow"
        >
          Latest
          <Download size="20px" />
        </a>
        <a
          href={repoUrl}
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm text-neutral-400
          hover:bg-neutral-50/10 transition ease-in-out duration-200"
        >
          App Repo
          <ExternalLink size="20px" />
        </a>
      </div>
    </div>
  );
}

export default async function AppPage() {
  // Repos to pull
  const repos = [
    "TylStres/DeskThing-Timer",
    "dakota-kallas/DeskThing-MarketHub",
    "RandomDebugGuy/DeskThing-GMP",
    "Jarsa132/deskthing-volctrl",
    "espeon/lyrthing",
    "dakota-kallas/DeskThing-GitHub",
    "dakota-kallas/DeskThing-SportsHub",
    "nwo122383/sonos-webapp",
  ];

  const releases = await fetchLatestReleasesFromRepos(repos);

  const { appNames, latestReleaseUrl, repoUrl, releaseDate } = await fetchOfficialAppsData();

  if (!appNames) {
    return <div>Error loading official apps</div>;
  }

  return (
    <>
      <div className="min-h-svh flex flex-row justify-between pt-nav mx-6 xl:mx-0">
        <div className="wideContainer flex flex-col mx-auto gap-columnGap items-center ">
          <section className="w-full flex flex-col gap-4">
            <h2>Official Apps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Loop through the app names and render a card for each */}
              {appNames.map((appName, index) => (
                <OfficialAppCard
                  key={index}
                  appName={appName}
                  latestReleaseUrl={latestReleaseUrl}
                  repoUrl={repoUrl}
                  releaseDate={releaseDate}
                />
              ))}
            </div>
          </section>
          <section className="w-full flex flex-col gap-4">
            <h2>Community Apps</h2>
            <div className="grid rid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {releases.map((release, index) => (
                <AppCard
                  key={index}
                  appName={release.appName}
                  authorName={release.authorName}
                  description={release.description}
                  latestReleaseUrl={release.latestReleaseUrl}
                  repoUrl={release.repoUrl}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
