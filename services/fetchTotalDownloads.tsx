export async function fetchTotalDownloadsFromRepo(
  repo: string
): Promise<{ repo: string; totalDownloads: number }> {
  const releasesApiUrl: string = `https://api.github.com/repos/${repo}/releases`;

  try {
    const response: Response = await fetch(releasesApiUrl, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch releases for ${repo}: ${response.statusText}`
      );
    }

    const releases: { assets: { download_count: number }[] }[] =
      await response.json();

    const totalDownloads: number = releases.reduce(
      (total: number, release: { assets: { download_count: number }[] }) => {
        const releaseDownloads: number = release.assets.reduce(
          (sum: number, asset: { download_count: number }) =>
            sum + asset.download_count,
          0
        );
        return total + releaseDownloads;
      },
      0
    );

    return { repo, totalDownloads };
  } catch (error) {
    console.error(error);
    return { repo, totalDownloads: 0 };
  }
}

export async function fetchTotalDownloadsFromRepos(
  repos: string[]
): Promise<{ repo: string; totalDownloads: number }[]> {
  const downloadCounts: { repo: string; totalDownloads: number }[] =
    await Promise.all(repos.map(fetchTotalDownloadsFromRepo));
  return downloadCounts;
}
