export async function fetchServerReleases() {
  const url = `https://api.github.com/repos/itsriprod/deskthing/releases`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
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
            macArm64: assets.find((asset) => asset.name.includes("mac_arm64") || asset.name.includes("mac-arm64"))
              ?.browser_download_url,
            macX64: assets.find((asset) => asset.name.includes("mac_x64") || asset.name.includes("mac-x64"))
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