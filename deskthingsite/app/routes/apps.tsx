import { useEffect, useState } from "react"
import { IconLogoLoading } from "../assets/icons"

export default function Releases() {
  const [setupFiles, setSetupFiles] = useState<any[]>([])

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/itsriprod/deskthing/releases"
        )
        const data = await response.json()
        const files = []
        for (const release of data) {
          const matchingAssets = release.assets.filter((asset) => asset.name.includes("-app"))
          files.push(...matchingAssets)
        }
        setSetupFiles(files)
      } catch (error) {
        console.error("Error fetching releases", error)
      }
    }

    fetchReleases()
  }, [])

  return (
    <div className="font-geist p-4 pt-20 w-screen min-h-screen flex-col lg:flex-row justify-around bg-slate-800 flex items-center">
      <div className="flex flex-col w-1/3">
        <h1 className="text-white font-geistMono text-3xl mb-8">Official Apps</h1>
        <div className="flex-col flex max-w-2xl w-full max-h-64 overflow-auto">
          {setupFiles.length > 0 ? (
            setupFiles.map((file) => (
              file && (
                <a
                  key={file.id}
                  className="border border-green-600 p-3 hover:bg-green-600 rounded-xl text-white mb-4 flex justify-between items-center"
                  target="_blank"
                  href={file.browser_download_url}
                  rel="noreferrer"
                >
                  <span>{file.name}</span>
                  <span className="text-sm">{new Date(file.created_at).toLocaleDateString()}</span>
                </a>
              )
            ))
          ) : (
            <div className="flex justify-center gap-3 px-5 text-white">
              <IconLogoLoading iconSize={224} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col w-1/3">
        <h1 className="text-white font-geistMono text-3xl mb-8">Community Apps</h1>
          <a
            className="border border-blue-600 p-3 hover:bg-blue-600 rounded-xl text-white"
            target="_blank"
            href="https://github.com/TylStres/DeskThing-Timer/"
            rel="noreferrer"
          >
            Timer App by TheNordicGoat
          </a>
      </div>
    </div>
  )
}
