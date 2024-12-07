//fetch community apps
export async function fetchCommunityReleasesFromRepos(repos) {
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