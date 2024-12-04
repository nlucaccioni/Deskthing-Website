import { Download } from 'lucide-react';

async function fetchLatestReleasesFromRepos(repos) {
  const baseURL = "https://api.github.com/repos";
  const results = [];

  for (const repo of repos) {
    const url = `${baseURL}/${repo}/releases`;

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Revalidate cache every hour
      });

      if (!response.ok) {
        throw new Error(`Error fetching releases for ${repo}: ${response.statusText}`);
      }

      const releases = await response.json();

      if (releases.length === 0) {
        console.warn(`No releases found for ${repo}`);
        continue;
      }

      // Get the latest release
      const latestRelease = releases[0];

      // Extract required details
      results.push({
        appName: repo.split("/")[1], // Assuming repo is in "owner/repo" format
        authorName: repo.split("/")[0],
        description: latestRelease.body || "No description provided",
        downloadURL: latestRelease.assets?.[0]?.browser_download_url || "No download URL available",
        repoURL: `https://github.com/${repo}`,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return results;
}

function AppCard() {
  <div>
    <div>
      <h4>App Name</h4>
      <p>By Developer Name</p>
      <p>Description</p>
    </div>
      <Download />

  </div>
}

export default function AppPage() {
  // Repos to pull
  (async () => {
    const repos = [
      "TylStres/DeskThing-Timer",
      "dakota-kallas/DeskThing-MarketHub",
      "RandomDebugGuy/DeskThing-GMP",
      "Jarsa132/deskthing-volctrl",
      "espeon/lyrthing",
      "dakota-kallas/DeskThing-GitHub",
      "dakota-kallas/DeskThing-SportsHub",
      "nwo122383/sonos-webapp/",
    ];

    const releases = await fetchLatestReleasesFromRepos(repos);
    console.log(releases);
  })();

  return (
    <>
      <div className="min-h-svh flex flex-row justify-between pt-nav">
        <div className="wideContainer flex flex-col mx-auto gap-columnGap items-center">
          <AppCard />
        </div>
      </div>
    </>
  );
}
