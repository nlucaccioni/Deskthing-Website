import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Deskthing" },
    { name: "description", content: "Welcome to Deskthing!" },
  ];
};

export default function Index() {
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

      </div>
      
    </div>
  );
}
