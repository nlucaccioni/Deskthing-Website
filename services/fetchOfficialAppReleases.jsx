import { titleCase } from '../utils/titleCase';

export async function fetchOfficialAppsData() {
  const repo = "ItsRiprod/Deskthing-Apps";
  const repoApiUrl = `https://api.github.com/repos/${repo}`;
  const releasesApiUrl = `${repoApiUrl}/releases`;

  try {
    const releaseResponse = await fetch(releasesApiUrl, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 }, // ISR: revalidate every hour
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
      appNames,
      latestReleaseUrl, 
      repoUrl, 
      releaseDate: new Date(date).toLocaleDateString(), 
    };
  } catch (error) {
    console.error(`Error fetching data for ${repo}:`, error);
    return null;
  }
}