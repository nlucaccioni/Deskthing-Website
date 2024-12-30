  import type { MetaFunction } from "@remix-run/node";
  import { useEffect } from "react";

  export const meta: MetaFunction = () => {
    return [
      { title: "Deskthing - YouTube" },
      { name: "description", content: "Subscribe to Deskthing on YouTube!" },
    ];
  };

  export default function Youtube() {
    useEffect(() => {
      window.location.href = "https://youtube.com/@deskthing";
    }, []);

    return (
      <div className="font-geist pt-32 md:pt-10 text-white p-4 w-screen h-screen bg-black flex flex-col items-center justify-center">
        <div className="lg:w-1/2 text-center">
          <h1 className="font-Wingding text-white text-5xl mb-8">DESKTHING YOUTUBE</h1>
          <p className="text-xl mb-8">
            Subscribe to our YouTube channel for the latest content!
          </p>
          <div className="group animate-pulse hover:animate-none">
            <a
              className="border border-red-600 p-3 hover:bg-red-600 rounded-xl text-white inline-block"
              target="_blank"
              href="https://youtube.com/@deskthing"
              rel="noreferrer"
            >
              <p className="group-hover:block hidden">Click To Subscribe</p>
              <p className="group-hover:hidden">Redirecting to YouTube...</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
