import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Deskthing" },
    { name: "description", content: "Welcome to Deskthing!" },
  ];
};

export default function Index() {
  const [setupFiles, setSetupFiles] = useState<any[]>([])
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState("");
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (text) => {
    setHovered(text);
  };

  const handleMouseLeave = () => {
    setHovered("");
  };

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/itsriprod/deskthing/releases"
        );
        const data = await response.json();
        const files = []
        for (const release of data) {
          const matchingAssets = release.assets.filter((asset) => asset.name.includes("-setup"));
          files.push(...matchingAssets);
        }
        setSetupFiles(files)
      } catch(error) {
        console.error("Error fetching releaes", error);
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
          onMouseEnter={() => handleMouseEnter("Go To Reddit")}
          onMouseLeave={handleMouseLeave}
          >
            REDDIT
          </a>
          <div className="relative group">
          <a
            className="border border-indigo-600 p-3 hover:bg-indigo-600 rounded-xl text-white"
            target="_blank"
            href="https://discord.gg/qWbSwzWJ4e"
            rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("Join our discord!")}
          onMouseLeave={handleMouseLeave}
          >
            DISCORD
          </a>
          <div className="absolute hidden group-hover:block border-indigo-600 border-b border-l border-r text-white rounded-lg mt-1 w-full">
            <a
              className="block text-center py-2 rounded-lg hover:bg-indigo-500"
              target="_blank"
              href="https://discord.gg/carthing"
              rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("Official Car Thing Hax Server")}
          onMouseLeave={handleMouseLeave}
            >
              Car Thing Hax
            </a>
            <a
              className="block text-center py-2 rounded-lg hover:bg-indigo-500"
              target="_blank"
              href="https://discord.gg/qWbSwzWJ4e"
              rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("Official Deskthing Server")}
          onMouseLeave={handleMouseLeave}
            >
              Deskthing
            </a>
          </div>
        </div>
          <a
            className="border border-zinc-600 p-3 hover:bg-zinc-600 rounded-xl text-white"
            target="_blank"
            href="https://github.com/ItsRiprod/DeskThing"
            rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("Source code")}
          onMouseLeave={handleMouseLeave}
          >
            GITHUB
          </a>
          <a
            className="border border-slate-300 p-3 hover:bg-slate-300 rounded-xl text-white"
            target="_blank"
            href="https://trello.com/b/6v0paxqV/deskthing"
            rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("TODO Lists and progress updates")}
          onMouseLeave={handleMouseLeave}
          >
            TRELLO
          </a>
          <a
            className="border border-fuchsia-600 p-3 hover:bg-fuchsia-600 rounded-xl text-white"
            target="_blank"
            href="https://buymeacoffee.com/riprod"
            rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("Buy me a coffee :P")}
          onMouseLeave={handleMouseLeave}
          >
            SUPPORT
          </a>
          <a
            className="border border-red-600 p-3 hover:bg-red-600 rounded-xl text-white"
            target="_blank"
            href="https://www.youtube.com/@deskthing"
            rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("Deskthing Youtube Channel")}
          onMouseLeave={handleMouseLeave}
          >
            YOUTUBE
          </a>
          <a
            className="border border-blue-600 p-3 hover:bg-blue-600 rounded-xl text-white"
            target="_blank"
            href="https://x.com/TheDeskThing"
            rel="noreferrer"
          onMouseEnter={() => handleMouseEnter("Deskthing Twitter Account")}
          onMouseLeave={handleMouseLeave}
          >
            TWITTER
          </a>

      </div>
      <h1 className="text-white font-geistMono pt-14 text-2xl">Downloads</h1>
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
            <div className="flex gap-3 px-5">
              <div className="animate-spin bg-green-400 w-5 h-5"></div>
              <p className="text-white font-Wingding">Loading Releases</p>
            </div>
          )}
        </div>
        <div
        className={`fixed pointer-events-none p-2 bg-white text-black rounded-md shadow-lg transition-transform duration-200 transform -translate-x-1/2 -translate-y-full ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {hovered.length > 1 ? (hovered) : <div>H</div>}
      </div>
    </div>
  );
}
