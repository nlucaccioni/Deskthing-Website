import { titleCase } from '../utils/titleCase';
import semver from 'semver';

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

    const apps = latestRelease.assets.map((asset) => {
      const appInfoMatch = asset.name.match(/^(.*?)\s*-app-v(\d+\.\d+\.\d+)\.zip$/);
      if (appInfoMatch) {
        const [_, rawAppName, appVersion] = appInfoMatch;
        const appName = titleCase(rawAppName); 
        return { appName, appVersion };
      }
      return null; // Return null if the format is not matched
    }).filter(Boolean);

    const groupedApps = apps.reduce((acc, app) => {
      if (!acc[app.appName]) {
        acc[app.appName] = [];
      }
      acc[app.appName].push(app);
      return acc;
    }, {});
  
    const latestApps = Object.values(groupedApps).map((appsGroup) => {
      const latestApp = appsGroup.sort((a, b) =>
        semver.compare(b.appVersion, a.appVersion)
      )[0];
      return latestApp;
    });

    return {
      latestApps,
      latestReleaseUrl, 
      repoUrl, 
      releaseDate: new Date(date).toLocaleDateString(), 
    };
  } catch (error) {
    console.error(`Error fetching data for ${repo}:`, error);
    return null;
  }
}