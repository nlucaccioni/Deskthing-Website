import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { IconLogoLoading } from "../assets/icons";
import { useReward } from "react-rewards";

export const meta: MetaFunction = () => {
  return [
    { title: "Deskthing" },
    { name: "description", content: "Welcome to Deskthing!" },
  ];
};

export default function Index() {
  const [setupFiles, setSetupFiles] = useState<any[]>([]);
  const confettiConfig = {
    startVelocity: 6,
    elementCount: 7,
    decay: 0.99,
  };
  const { reward } = useReward("rewardId", "confetti", confettiConfig);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/itsriprod/deskthing/releases/latest"
        );
        const data = await response.json();
        const files = data.assets.filter((asset) =>
          asset.name.includes("-setup")
        );
        setSetupFiles(files);
      } catch (error) {
        console.error("Error fetching latest release", error);
      }
    };

    fetchReleases();
  }, []);

  return (
    <div className="font-geist pt-32 md:pt-10 text-white p-4 w-screen h-screen bg-black flex lg:flex-row flex-col">
      <div className="lg:w-1/2 h-full bg-zinc-950 min-h-fit flex flex-col md:flex-row-reverse gap-2 lg:flex-col justify-center items-center border-r border-zinc-800">
        <h1 className="font-Wingding text-white text-5xl">DESKTHING</h1>
        <div className="flex-col flex max-h-96 overflow-y-auto pt-5 gap-4">
              {setupFiles.length > 0 ? (
                setupFiles.map(
                  (file) =>
                    file && (
                      <a
                        key={file.id}
                        className="border border-green-600 p-3 hover:bg-green-600 rounded-xl text-white"
                        target="_blank"
                        href={file.browser_download_url}
                        rel="noreferrer"
                      >
                        {file.name}
                      </a>
                    )
                )
              ) : (
                <div className="flex gap-3 px-5 text-white">
                  <IconLogoLoading iconSize={224} />
                </div>
              )}
            </div>
      </div>
      <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-center">
        <h1 className="text-semibold text-4xl font-semibold my-5">
              Connect with the Community! 
        </h1>
        <div className="w-full lg:px-10 lg:gap-3 grid grid-rows-2 lg:grid-rows-1 grid-flow-col py-4 bg-zinc-900">
          <a
            className="border border-amber-600 p-3 hover:bg-amber-600 rounded-xl text-white"
            target="_blank"
            href="https://www.reddit.com/r/DeskThing/"
            rel="noreferrer"
          >
            REDDIT
          </a>
          <a
            className="border border-indigo-600 p-3 hover:bg-indigo-600 rounded-xl text-white"
            target="_blank"
            href="https://discord.gg/qWbSwzWJ4e"
            rel="noreferrer"
          >
            DISCORD
          </a>
          <a
            className="border border-zinc-600 p-3 hover:bg-zinc-600 rounded-xl text-white"
            target="_blank"
            href="https://github.com/ItsRiprod/DeskThing"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            className="border border-slate-300 p-3 hover:bg-slate-300 rounded-xl text-white"
            target="_blank"
            href="https://trello.com/b/6v0paxqV/deskthing"
            rel="noreferrer"
          >
            TRELLO
          </a>
          <a
            className="border border-fuchsia-600 p-3 hover:bg-fuchsia-600 rounded-xl text-white"
            target="_blank"
            href="https://buymeacoffee.com/riprod"
            rel="noreferrer"
            onMouseEnter={reward}
          >
            <span id="rewardId" />
            SUPPORT
          </a>
          <a
            className="border border-red-600 p-3 hover:bg-red-600 rounded-xl text-white"
            target="_blank"
            href="https://www.youtube.com/@deskthing"
            rel="noreferrer"
          >
            YOUTUBE
          </a>
          <a
            className="border border-blue-600 p-3 hover:bg-blue-600 rounded-xl text-white"
            target="_blank"
            href="https://x.com/TheDeskThing"
            rel="noreferrer"
          >
            TWITTER
          </a>
        </div>
      </div>
    </div>
  );
}
