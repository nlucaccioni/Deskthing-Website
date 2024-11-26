import { IconCoffee } from "~/assets/icons"
import LinkButton from "../LinkButton"
import { useReward } from "react-rewards";

const SocialsSection = () => {

    const confettiConfig = {
        angle: 90,
        spread: 100,
        startVelocity: 30,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    };
    const { reward } = useReward("rewardId", "confetti", confettiConfig);

    return (
    <section className="w-full min-h-96 overflow-y-auto flex flex-col items-center justify-center">
        <h1 className="text-semibold text-4xl font-semibold my-5">
          Connect with the Community!
        </h1>
        <div className="w-full lg:px-10 lg:gap-3 grid grid-rows-2 xl:grid-rows-1 grid-flow-col py-4 bg-zinc-900">
          <LinkButton
            className="border-amber-600 hover:bg-amber-600"
            link="https://www.reddit.com/r/DeskThing/"
          >
            <img
              src="https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png"
              alt="Reddit"
              width="24"
              height="24"
              className=" mr-2"
            />
            REDDIT
          </LinkButton>
          <LinkButton
            className="border-indigo-600 hover:bg-indigo-600"
            link="/discord"
          >
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
              alt="Discord"
              width="24"
              height="24"
              className=" mr-2"
            />
            DISCORD
          </LinkButton>
          <LinkButton
            className="border-zinc-600 hover:bg-zinc-600"
            link="https://github.com/ItsRiprod/DeskThing"
          >
            <img
              src="https://github.githubassets.com/favicons/favicon.svg"
              alt="GitHub"
              width="24"
              height="24"
              className=" mr-2"
            />
            GITHUB
          </LinkButton>
          <LinkButton
            className="border-slate-300 hover:bg-slate-600"
            link="https://trello.com/b/6v0paxqV/deskthing"
          >
            <img
              src="https://www.trello.com/favicon.ico"
              alt="Trello"
              width="24"
              height="24"
              className=" mr-2"
            />
            TRELLO
          </LinkButton>
          <LinkButton
            className="border-fuchsia-600 hover:bg-fuchsia-600"
            link="/support"
            onClick={() => reward()}
          >
            <IconCoffee className="text-fuchsia-500" />
            <span id="rewardId" />
            SPONSOR
          </LinkButton>
          <LinkButton
            className="border-red-600 hover:bg-red-600"
            link="https://www.youtube.com/@deskthing"
          >
            <img
              src="https://www.youtube.com/s/desktop/e4d15d2c/img/favicon_144x144.png"
              alt="YouTube"
              width="24"
              height="24"
              className=" mr-2"
            />
            YOUTUBE
          </LinkButton>
          <LinkButton
            className="border-blue-600 hover:bg-blue-600"
            link="https://x.com/TheDeskThing"
          >
            <img
              src="https://abs.twimg.com/favicons/twitter.2.ico"
              alt="Twitter"
              width="24"
              height="24"
              className=" mr-2"
            />
            TWITTER
          </LinkButton>
          <LinkButton
            className="border-sky-600 hover:bg-sky-600"
            link="https://bsky.app/profile/deskthing.app"
          >
            <img
              src="https://bsky.app/static/favicon-32x32.png"
              alt="Bluesky"
              width="24"
              height="24"
              className=" mr-2"
            />
            BLUESKY
          </LinkButton>
        </div>
      </section>
      
    )
}

export default SocialsSection