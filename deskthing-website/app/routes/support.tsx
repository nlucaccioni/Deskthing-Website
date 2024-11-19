
import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Deskthing Support" },
    { name: "description", content: "Support DeskThing!" },
  ];
};

export default function Support() {
  useEffect(() => {
    // window.location.href = "https://buymeacoffee.com/riprod";
  }, []);

  return (
    <div className="font-geist pt-32 md:pt-10 text-white p-4 w-screen h-screen bg-black flex flex-col items-center justify-center">
      <div className="lg:w-1/2 text-center">
        <h1 className="font-Wingding text-white text-5xl mb-8">Support Deskthing</h1>
        <div className="group flex gap-5 items-center justify-center">
          <a
            className="border border-fuchsia-600 p-3 hover:bg-fuchsia-600 rounded-xl text-white inline-block"
            target="_blank"
            href="https://buymeacoffee.com/riprod"
            rel="noreferrer"
          >
            <p className="">Buy me a coffee!</p>
          </a>
          <a
            className="border border-gray-600 p-3 hover:bg-gray-600 rounded-xl text-white inline-block"
            target="_blank"
            href="https://github.com/sponsors/ItsRiprod"
            rel="noreferrer"
          >
            <p className="">Support with Github Sponsors!</p>
          </a>
        </div>
        <div className="mt-5">
          <p>Want to help support deskthing? Well here you can. DeskThing has been developed by Riprod - an independent member of the ThingLabs community. Any and all support will go towards the future of DeskThing! Whether its in new supplied or some coffee to help burn the midnight oil.</p>

        </div>
      </div>
    </div>
  );
}
