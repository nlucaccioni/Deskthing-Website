import Sidebar from "../components/sidebar";
import { BtnIcon, BtnArrow } from "../components/buttons";
import IconCoffee from "../components/assets/icons/Coffee";
import IconDiscord from "../components/assets/icons/Discord";
import IconGithub from "../components/assets/icons/GitHub";
import IconReddit from "../components/assets/icons/Reddit";
import IconTrello from "../components/assets/icons/Trello";
import IconYoutube from "../components/assets/icons/Youtube";
import IconBluesky from "../components/assets/icons/Bluesky";
import IconTwitter from "../components/assets/icons/Xtwitter";
import CommunityStats from "../components/communitystats";
import { OfficialAppCard, AppCard, fetchLatestReleasesFromRepos, fetchOfficialAppsData } from './apps/page';
import { data } from "autoprefixer";

async function fetchTotalDownloadsFromRepo(repo) {
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
async function fetchTotalDownloadsFromRepos(repos) {
  const downloadCounts = await Promise.all(repos.map(fetchTotalDownloadsFromRepo));
  return downloadCounts; // Return array of download counts for each repo
}

async function fetchDownloadUrls() {
  const url = `https://api.github.com/repos/itsriprod/deskthing/releases/latest`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Error fetching releases: ${response.statusText}`);
    }

    const release = await response.json();
    const assets = release.assets;
    const latestVersion = release.tag_name;  

    return {
      latestVersion,
      linuxDeb: assets.find((asset) => asset.name.includes("amd64") && asset.name.endsWith(".deb"))?.browser_download_url,
      linuxAppImage: assets.find((asset) => asset.name.includes("linux") && asset.name.endsWith(".AppImage"))?.browser_download_url,
      macArm64: assets.find((asset) => asset.name.includes("mac_arm64"))?.browser_download_url,
      macX64: assets.find((asset) => asset.name.includes("mac_x64"))?.browser_download_url,
      raspberry: assets.find((asset) => asset.name.includes("raspberry"))?.browser_download_url,
      windows: assets.find((asset) => asset.name.includes("win"))?.browser_download_url,
    };
  } catch (error) {
    console.error(error);
    return {};
  }
}


export default async function HomePage() {
  const btnLinks = {
    github: "https://github.com/ItsRiprod/DeskThing",
    trello: "https://trello.com/b/6v0paxqV/deskthing",
    discord: "https://discord.gg/deskthing-1267348109067817051",
    reddit: "https://reddit.com/r/deskthing",
    youtube: "https://www.youtube.com/@deskthing",
    coffee: "https://buymeacoffee.com/riprod",
    bluesky: "https://bsky.app/profile/deskthing.app",
    twitter: "https://x.com/TheDeskThing",
    githubSponsor: "https://github.com/sponsors/ItsRiprod?o=esb",
  };

  const downloadUrls = await fetchDownloadUrls();

  const statRepos = ["itsriprod/deskthing", "itsriprod/deskthing-apps"];

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

  const downloadData = await Promise.all(
    statRepos.map(async (repo) => {
      const { repo: repoName, totalDownloads } = await fetchTotalDownloadsFromRepo(repo);
      return { repo: repoName, totalDownloads }; 
    })
  );

  const releases = await fetchLatestReleasesFromRepos(repos);
  const { appNames, latestReleaseUrl, repoUrl, releaseDate } = await fetchOfficialAppsData();

  if (!appNames || !releases) {
    return <div>Error loading apps</div>;
  }

  // Slice the first 3 apps for each
  const officialAppsToDisplay = appNames.slice(0, 3); // First 3 official apps
  const communityAppsToDisplay = releases.slice(0, 3); // First 3 community apps

  const deskthingDownloads = downloadData.find(item => item.repo === "itsriprod/deskthing")?.totalDownloads || 0;
  const deskthingAppsDownloads = downloadData.find(item => item.repo === "itsriprod/deskthing-apps")?.totalDownloads || 0;

  return (
    <>
      <div className="min-h-svh flex flex-row justify-between pt-nav mx-6 xl:mx-0">
        <div className="lg:border-r border-neutral-800 w-full lg:pr-6 xl:px-6 2xl:px-0">
          <div className="mainContainer flex flex-col mx-auto gap-sectionGap">
            
            {/* Hero */}
            <section id="hero">
              <div className="flex flex-col-reverse gap-4 relative">
                <div className="flex flex-col gap-4">
                  <h1 className="text-green-600 max-w-[13ch] text-balance xl:text-wrap">
                    Take Back the Car Thing
                  </h1>
                  <p className="max-w-[50ch]">
                    Upcycle your discontinued Car Thing into a versatile desktop
                    assistant that enhances your flow. Reduce e-waste and boost
                    your productivity in the process. Everyone wins.
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                    {/* <BtnArrow to="/" label="Get Started" filled={true} /> */}
                    <BtnArrow to={btnLinks.github} label="Documentation" />
                  </div>
                </div>
                <div>
                    <img
                      src="./imgs/DeskThing_Device.png"
                      alt="Desk Thing Device"
                      className="justify-self-center pt-4 pb-[60px] w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[450px] 2xl:w-[500px] xl:py-0 xl:absolute bottom-[20px] xl:right-[0px] 2xl:bottom-[4px] 2xl:right-[-50px]  
                      imgDropShadow aspect-auto hover:scale-110 -rotate-12 hover:-rotate-6 transition ease-in-out duration-500"
                    />
                  </div>
              </div>
            </section>

            {/* Connect */}
            <section
              id="connect"
              className=" flex flex-col lg:flex-row gap-sectionGap lg:gap-columnGap"
            >
              <div className="basis-1/2 flex flex-col gap-4">
                <div>
                  <h2>Connect with the Community!</h2>
                  <p className="characterLimit text-balance lg:text-wrap">
                    Have a question or idea? Join our community to help shape
                    the future of DeskThing—share your insights, connect with
                    others, and make an impact!
                  </p>
                </div>
                <div className="flex flex-row flex-wrap gap-4">
                  <BtnIcon
                    to={btnLinks.discord}
                    label="Discord"
                    icon={<IconDiscord />}
                  />
                  <BtnIcon
                    to={btnLinks.reddit}
                    label="Reddit"
                    icon={<IconReddit />}
                  />
                  <BtnIcon
                    to={btnLinks.youtube}
                    label="Youtube"
                    icon={<IconYoutube />}
                  />
                  <BtnIcon
                    to={btnLinks.bluesky}
                    label="BlueSky"
                    icon={<IconBluesky />}
                  />
                  <BtnIcon
                    to={btnLinks.twitter}
                    label="Twitter"
                    icon={<IconTwitter />}
                  />
                </div>
              </div>
              <div className="basis-1/2 flex flex-col gap-4">
                <div>
                  <h2>Follow Development</h2>
                  <p className="characterLimit text-balance lg:text-wrap">
                    Stay connected and keep up with the latest development
                    releases. Be sure to check out our Trello board to explore
                    our roadmap and see the exciting features we have planned.
                  </p>
                </div>
                <div className="flex flex-row flex-wrap gap-4">
                  <BtnIcon
                    to={btnLinks.github}
                    label="Github"
                    icon={<IconGithub />}
                  />
                  <BtnIcon
                    to={btnLinks.trello}
                    label="Trello"
                    icon={<IconTrello />}
                  />
                </div>
              </div>
            </section>

            {/* Community Stats */}
            <section id="stats">
              <h2>Community Stats</h2>
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
              
                <CommunityStats stat={deskthingDownloads.toLocaleString()} label="Server Downloads"/>
                <CommunityStats stat={deskthingAppsDownloads.toLocaleString()} label="App Downloads"/>
                <CommunityStats stat="2,678" label="Discord Memebers"/>
              </div>
            </section>

            {/* Apps */}
            <section id="apps" className="flex flex-col gap-4">
              <div>
                <h2>DeskThing Apps</h2>
                <p className="characterLimit text-pretty">
                  Explore core and community-built applications that expand your
                  Car Thing's functionality. From current weather to song
                  lyrics, there's an app for almost every need. And if you want,
                  it's easy to create your own.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {officialAppsToDisplay.map((appName, index) => (
                  <OfficialAppCard
                    key={index}
                    appName={appName}
                    latestReleaseUrl={latestReleaseUrl}
                    repoUrl={repoUrl}
                    releaseDate={releaseDate}
                  />
                ))}
                {communityAppsToDisplay.map((release, index) => (
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
              <BtnArrow to="./apps" label="Explore more apps" />
            </section>

            {/* Support */}
            <section id="support">
              <div className="basis-1/2 flex flex-col gap-4">
                <div>
                  <h2>Support Development</h2>
                  <p className="characterLimit">
                    What began as a simple hobby has evolved into a true passion
                    project. We’re committed to making the DeskThing an
                    essential part of our users’ lives by continuously enhancing
                    its features and refining the user experience. Our goal is
                    to keep improving and innovating, ensuring the DeskThing
                    becomes even more valuable for everyone. Take back the Car
                    Thing.
                  </p>
                </div>
                <div className="flex flex-row flex-wrap gap-4">
                  <BtnIcon
                    to={btnLinks.coffee}
                    label="Buy Me a Coffee"
                    icon={<IconCoffee />}
                  />
                  <BtnIcon
                    to={btnLinks.githubSponsor}
                    label="Sponsor on Github"
                    icon={<IconGithub />}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        <Sidebar downloadUrls={downloadUrls} />
      </div>
    </>
  );
}
