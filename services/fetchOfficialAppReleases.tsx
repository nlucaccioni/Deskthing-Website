import { titleCase } from "../utils/titleCase";
import semver from "semver";

interface App {
  appName: string;
  appVersion: string;
}

interface LatestAppsResponse {
  latestApps: App[];
  latestReleaseUrl: string;
  repoUrl: string;
  releaseDate: string;
}

export async function fetchOfficialAppsData(): Promise<LatestAppsResponse | null> {
  const repo: string = "ItsRiprod/Deskthing-Apps";
  const repoApiUrl: string = `https://api.github.com/repos/${repo}`;
  const releasesApiUrl: string = `${repoApiUrl}/releases`;

  try {
    const releaseResponse: Response = await fetch(releasesApiUrl, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!releaseResponse.ok) {
      console.error(
        `Failed to fetch releases for ${repo}: ${releaseResponse.statusText}`
      );
      return null;
    }

    const releases: any[] = await releaseResponse.json();
    if (releases.length === 0) {
      console.warn(`No releases found for ${repo}`);
      return null;
    }

    const latestRelease: any = releases[0];
    const {
      html_url: latestReleaseUrl,
      author,
      published_at: date,
      html_url: repoUrl,
    } = latestRelease;

    const apps: App[] = latestRelease.assets
      .map((asset: any) => {
        const appInfoMatch: RegExpMatchArray | null = asset.name.match(
          /^(.*?)\s*-app-v(\d+\.\d+\.\d+)\.zip$/
        );
        if (appInfoMatch) {
          const [_, rawAppName, appVersion]: string[] = appInfoMatch;
          const appName: string = titleCase(rawAppName);
          return { appName, appVersion };
        }
        return null; // Return null if the format is not matched
      })
      .filter((app): app is App => app !== null); // Type narrowing to ensure apps is only of type App[]

    const groupedApps: { [key: string]: App[] } = apps.reduce(
      (acc: { [key: string]: App[] }, app: App) => {
        if (!acc[app.appName]) {
          acc[app.appName] = [];
        }
        acc[app.appName].push(app);
        return acc;
      },
      {}
    );

    const latestApps: App[] = Object.values(groupedApps).map(
      (appsGroup: App[]) => {
        const latestApp: App = appsGroup.sort((a: App, b: App) =>
          semver.compare(b.appVersion, a.appVersion)
        )[0];
        return latestApp;
      }
    );

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
