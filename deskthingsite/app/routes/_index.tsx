import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { IconLogoLoading } from "../assets/icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Deskthing" },
    { name: "description", content: "Welcome to Deskthing!" },
  ];
};

export default function Index() {
  const [setupFiles, setSetupFiles] = useState<any[]>([])

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/itsriprod/deskthing/releases/latest"
        );
        const data = await response.json();
        const files = data.assets.filter((asset) => asset.name.includes("-setup"));
        setSetupFiles(files);
      } catch(error) {
        console.error("Error fetching latest release", error);
      }
    }
  
    fetchReleases();
  }, [])

  return (
    <div className="font-geist p-4 w-screen h-screen bg-slate-800 flex flex-col items-center justify-center">
      <div>
        <p className="text-white">The</p>
        <h1 className="font-Wingding text-white text-5xl">DESKTHING</h1>
      </div>
      <div className="flex flex-wrap pt-5 items-center justify-center gap-4">
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
          >
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
      <div className="flex items-center justify-between gap-4 pt-14 flex-wrap">
        <iframe title="discord" src="https://canary.discord.com/widget?id=1267348109067817051&theme=dark" width="350" height="400" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        <div>
          <h1 className="text-white font-geistMono text-2xl">Downloads</h1>
          <div className="flex-col flex max-h-96 overflow-y-auto pt-5 gap-4">
            {setupFiles.length > 0 ? setupFiles.map((file) => (
              file &&
              <a
              key={file.id}
              className="border border-green-600 p-3 hover:bg-green-600 rounded-xl text-white"
              target="_blank"
              href={file.browser_download_url}
              rel="noreferrer"
              >
                  {file.name}
                </a>          
            )) : (
              <div className="flex gap-3 px-5 text-white">
                <IconLogoLoading iconSize={224} />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
