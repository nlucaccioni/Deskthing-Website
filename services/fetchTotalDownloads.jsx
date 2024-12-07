export async function fetchTotalDownloadsFromRepo(repo) {
  const releasesApiUrl = `https://api.github.com/repos/${repo}/releases`;

  try {
    const response = await fetch(releasesApiUrl, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch releases for ${repo}: ${response.statusText}`);
    }

    const releases = await response.json();

    // Calculate the total download count from all releases
    const totalDownloads = releases.reduce((total, release) => {
      const releaseDownloads = release.assets.reduce((sum, asset) => sum + asset.download_count, 0);
      return total + releaseDownloads;
    }, 0);

    return { repo, totalDownloads }; // Return both repo name and download count
  } catch (error) {
    console.error(error);
    return { repo, totalDownloads: 0 }; // Return 0 as fallback in case of error
  }
}

// Function to fetch total downloads from multiple repositories
export async function fetchTotalDownloadsFromRepos(repos) {
  const downloadCounts = await Promise.all(repos.map(fetchTotalDownloadsFromRepo));
  return downloadCounts; // Return array of download counts for each repo
}