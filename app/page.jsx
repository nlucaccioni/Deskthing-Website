import Sidebar from "../components/sidebar";
import { BtnIcon, BtnArrow } from "../components/buttons";
import CommunityStats from "../components/communitystats";
import { OfficialAppCard, AppCard } from '../components/appCards';
import {
  IconCoffee,
  IconDiscord,
  IconGithub,
  IconReddit,
  IconTrello,
  IconYoutube,
  IconBluesky,
  IconTwitter,
} from "../components/assets/icons";
import {
  fetchCommunityReleasesFromRepos,
  fetchOfficialAppsData,
  fetchTotalDownloadsFromRepo,
  fetchTotalDownloadsFromRepos,
  fetchServerReleases,
} from "../services";


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

  const serverReleases = await fetchServerReleases();
  const latestRelease = serverReleases[0];
  const downloadUrls = latestRelease.platforms;

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

  const releases = await fetchCommunityReleasesFromRepos(repos);
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
