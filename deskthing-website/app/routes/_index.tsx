import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { IconDownload, IconLogoLoading } from "../assets/icons";
import { useReward } from "react-rewards";
import LinkButton from "~/components/LinkButton";
import SocialsSection from "~/components/sections/SocialsSection";
import AboutSection from "~/components/sections/AboutSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Deskthing" },
    { name: "description", content: "Welcome to Deskthing!" },
  ];
};

export default function Index() {
  const [setupFiles, setSetupFiles] = useState<any[]>([]);

  const formatFileName = (fileName: string) => {
    const parts = fileName.split('-');
    if (parts.length >= 3) {
      const platform = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
      const version = parts[2];
      return `${platform} v${version}`;
    }
    return fileName;
  };

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
      <div className="lg:w-1/2 h-full bg-zinc-950 min-h-fit flex flex-col md:flex-row-reverse gap-2 lg:flex-col justify-center items-center border-r border-b border-zinc-800">
        <h1 className="font-Wingding text-white text-5xl">DESKTHING</h1>
        <div className="flex-col flex max-h-[50vh] overflow-y-auto pt-5 gap-4">
          {setupFiles.length > 0 ? (
            setupFiles.map(
              (file) =>
                file && (
                  <LinkButton
                    key={file.id}
                    className="group border-green-600 hover:bg-green-600"
                    link={file.browser_download_url}
                  >
                    <IconDownload className="group-hover:stroke-2" />
                    <div>
                      {formatFileName(file.name)}
                      <p className="text-xs text-gray-500 group-hover:text-white italic">{file.name}</p>
                    </div>
                  </LinkButton>
                )
            )
          ) : (
            <div className="flex gap-3 px-5 text-white">
              <IconLogoLoading iconSize={224} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SocialsSection />
        <AboutSection />
      </div>
      
    </div>
  );
}