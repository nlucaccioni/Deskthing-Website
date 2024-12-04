import { Download } from 'lucide-react';
import { ExternalLink} from 'lucide-react';

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

function OfficialAppCard() {
  return (
    <div className="p-6 border border-neutral-800 rounded-lg flex flex-col gap-2
    bg-neutral-950 hoverDropShadow transition ease-in-out duration-200">
      <h4 className="text-left w-full font-medium">App Name</h4>
      <p className="text-left w-full font-mono text-neutral-400 text-sm">
        By Developer Name
      </p>
      <div className="flex flex-row gap-2">
        <a
          href="/"
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm 
          hover:bg-green-600 transition ease-in-out duration-200 hoverDropShadow"
        >
          Latest
          <Download size="20px" />
        </a>
        <a
          href="/"
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

function AppCard() {
  return (
    <div className="p-6 border border-neutral-800 rounded-lg flex flex-col gap-2
    bg-neutral-950 hoverDropShadow transition ease-in-out duration-200">
      <h4 className="text-left w-full font-medium">App Name</h4>
      <p className="text-left w-full font-mono text-neutral-400 text-sm">
        By Developer Name
      </p>
      <p className="text-left w-full mb-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        porttitor fermentum orci, bibendum pretium ipsum blandit posuere. Morbi
        varius maximus vehicula.
      </p>
      <div className="flex flex-row gap-2">
        <a
          href="/"
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm 
          hover:bg-green-600 transition ease-in-out duration-200 hoverDropShadow"
        >
          Latest
          <Download size="20px" />
        </a>
        <a
          href="/"
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
        <div className="wideContainer flex flex-col mx-auto gap-columnGap items-center ">
          <section className="w-full flex flex-col gap-4">
            <h2>Official Apps</h2>
            <div className='grid grid-cols-3 gap-4 w-full' >
            <OfficialAppCard />
            <OfficialAppCard />
            <OfficialAppCard />
            <OfficialAppCard />
            <OfficialAppCard />
            <OfficialAppCard />
            </div>
          </section>
          <section className="w-full flex flex-col gap-4">
            <h2>Community Apps</h2>
            <div className='grid grid-cols-3 gap-4'>
            <AppCard />
            <AppCard />
            <AppCard />
            <AppCard />
            <AppCard />
            <AppCard />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
