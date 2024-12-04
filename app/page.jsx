import Sidebar from "./components/sidebar";
import { BtnIcon } from "./components/buttons";
import { BtnArrow } from "./components/buttons";
import IconCoffee from "./assets/icons/Coffee";
import IconDiscord from "./assets/icons/Discord";
import IconGithub from "./assets/icons/GitHub";
import IconReddit from "./assets/icons/Reddit";
import IconTrello from "./assets/icons/Trello";
import IconYoutube from "./assets/icons/Youtube";
import IconBluesky from "./assets/icons/Bluesky";
import CommunityStats from "./components/communitystats";

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
    githubSponsor: "https://github.com/sponsors/ItsRiprod?o=esb",
  };

  const downloadUrls = await fetchDownloadUrls();

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{display:"none"}}>
        <defs>
          <filter id="noise" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.1"
              numOctaves="2"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="white"
              surfaceScale="1"
            />
          </filter>
        </defs>
      </svg>
      <div className="min-h-svh flex flex-row justify-between pt-nav">
        <div className=" border-r border-neutral-800 w-full">
          <div className="mainContainer flex flex-col mx-auto gap-sectionGap">
            {/* Hero */}
            <section id="hero">
              <div className="flex flex-col gap-4 relative">
                <h1 className="text-green-600">
                  Take Back the <br />
                  Car Thing
                </h1>
                <p style={{ maxWidth: "50ch" }}>
                  Upcycle your discontinued Car Thing into a versatile desktop
                  assistant that enhances your flow. Reduce e-waste and boost
                  your productivity in the process. Everyone wins.
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                  <BtnArrow to="/" label="Get Started" filled={true} />
                  <BtnArrow to={btnLinks.github} label="Documentation" />
                </div>
                <div>
                  <img
                      src="./imgs/DeskThing_Device.png"
                      alt="Desk Thing Device"
                      style={{
                        width: "500px",
                        right: "-50px",
                        bottom: "4px",
                      }}
                      className="imgDropShadow absolute aspect-auto hover:scale-110 
                      -rotate-12 hover:-rotate-6 transition ease-in-out duration-500"
                    />
                </div>
              </div>
            </section>
            {/* Connect */}
            <section id="connect" className="flex flex-row gap-columnGap">
              <div className="basis-1/2 flex flex-col gap-4">
                <div>
                  <h2>Connect with the Community!</h2>
                  <p>
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
                </div>
              </div>
              <div className="basis-1/2 flex flex-col gap-4">
                <div>
                  <h2>Follow Development</h2>
                  <p>
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
              <div className="flex flex-row gap-4 items-stretch">
                <CommunityStats />
                <CommunityStats />
                <CommunityStats />
              </div>
            </section>
            {/* Apps */}
            <section id="apps">
              <h2>DeskThing Apps</h2>
              <p className="characterLimit">
                Explore core and community-built applications that expand your
                Car Thing's functionality. From current weather to song lyrics,
                there's an app for almost every need. And if you want, it's easy
                to create your own.
              </p>
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

        <Sidebar downloadUrls={downloadUrls}/>
      </div>
    </>
  );
}
