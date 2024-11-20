
import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Deskthing Discord" },
    { name: "description", content: "Join the Deskthing Discord community!" },
  ];
};

export default function Discord() {
  useEffect(() => {
    window.location.href = "https://discord.gg/deskthing-1267348109067817051";
  }, []);

  return (
    <div className="font-geist pt-32 md:pt-10 text-white p-4 w-screen h-screen bg-black flex flex-col items-center justify-center">
      <div className="lg:w-1/2 text-center">
        <h1 className="font-Wingding text-white text-5xl mb-8">DESKTHING DISCORD</h1>
        <p className="text-xl mb-8">
          Join our vibrant community of deskthing enthusiasts!
        </p>
        <div className="group animate-pulse hover:animate-none">
          <a
            className="border border-indigo-600 p-3 hover:bg-indigo-600 rounded-xl text-white inline-block"
            target="_blank"
            href="https://discord.gg/deskthing-1267348109067817051"
            rel="noreferrer"
          >
            <p className="group-hover:block hidden">Click To Join</p>
            <p className="group-hover:hidden">Redirecting to Discord...</p>
          </a>
        </div>
      </div>
    </div>
  );
}
