import { useEffect, useState } from "react"
import { IconLogoLoading } from "../assets/icons"
import { CommunityApp } from "~/components/AppComponent"

// Cache duration in seconds (e.g. 1 hour)
const CACHE_DURATION = 360000;

export interface GitHubRepoData {
  name: string;
  description: string;
  releaseUrl: string;
  author: string;
  githubUrl: string;
  lastFetched?: number;
  stargazers?: number
  watchers?: number
  authorProfile?: string
  authorUrl?: string
}

interface ReleaseFile {
  browser_download_url: string;
  content_type: string;
  created_at: string;
  download_count: number;
  id: number;
  label: null;
  name: string;
  node_id: string;
  size: number;
  state: string;
  updated_at: string;
  uploader: {
    login: string;
    id: number;
    node_id: string;
    html_url: string
    avatar_url: string;
    gravatar_id: string;
  };
  url: string;
}

export default function Releases() {
  const [setupFiles, setSetupFiles] = useState<GitHubRepoData[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [communityApps, setCommunityApps] = useState<GitHubRepoData[]>([]);

  useEffect(() => {
    const fetchCommunityApps = async () => {
      const repos = [
        "TylStres/DeskThing-Timer",
        "dakota-kallas/DeskThing-MarketHub",
        "RandomDebugGuy/DeskThing-GMP",
        "Jarsa132/deskthing-volctrl",
        "espeon/lyrthing",
        "dakota-kallas/DeskThing-GitHub",
        "dakota-kallas/DeskThing-SportsHub",
        "nwo122383/sonos-webapp/"
      ];

      // Check sessionStorage first
      const cachedApps = sessionStorage.getItem('community-apps');
      const cachedTimestamp = sessionStorage.getItem('community-apps-timestamp');

      if (cachedApps && cachedTimestamp) {
        const timeSinceCache = Date.now() - parseInt(cachedTimestamp, 10);
        const parsedApps = JSON.parse(cachedApps);
        const hasFailedRequests = parsedApps.some(app => !app.lastFetched);

        if (timeSinceCache < CACHE_DURATION && !hasFailedRequests) {
          console.log('Using cached apps')
          setCommunityApps(parsedApps);
          return;
        } else {
          console.log('Fetching app data')
        }
      }

      const repoData: GitHubRepoData[] = await Promise.all(
        repos.map(async (repoPath): Promise<GitHubRepoData> => {
          try {
            const [repoResponse] = await Promise.all([
              fetch(`https://api.github.com/repos/${repoPath}`),
            ]);

            if (!repoResponse.ok) {
              throw new Error('Repository fetch failed');
            }

            const [repoData] = await Promise.all([
              repoResponse.json()
            ]);

            console.log(repoData)
            return {
              name: repoData.name,
              description: repoData.description,
              releaseUrl: `https://github.com/${repoPath}/releases/latest`,
              author: repoData.owner.login,
              authorProfile: repoData.owner.avatar_url,
              githubUrl: `https://github.com/${repoPath}`,
              lastFetched: Date.now(),
              stargazers: repoData.stargazers_count,
              watchers: repoData.watchers,
              authorUrl: repoData.owner.html_url
            };
          } catch (error) {
            return {
              name: repoPath.split('/')[1],
              description: 'Failed to fetch repository details',
              releaseUrl: `https://github.com/${repoPath}/releases/latest`,
              author: repoPath.split('/')[0],
              githubUrl: `https://github.com/${repoPath}`
            };
          }
        })
      );

      // Store in sessionStorage
      sessionStorage.setItem('community-apps', JSON.stringify(repoData));
      sessionStorage.setItem('community-apps-timestamp', Date.now().toString());
      setCommunityApps(repoData);
    };

    const fetchReleases = async () => {
      try {
        const cachedReleases = sessionStorage.getItem('deskthing-releases');
        const cachedTimestamp = sessionStorage.getItem('deskthing-releases-timestamp');

        if (cachedReleases && cachedTimestamp) {
          const timeSinceCache = Date.now() - parseInt(cachedTimestamp, 10);
          
          if (timeSinceCache < CACHE_DURATION) {
            setSetupFiles(JSON.parse(cachedReleases));
            setIsLoading(false);
            console.log('Using cached dev-app data')
            return;
          } else {
            console.log('Fetching new dev-app data')
          }
        }

        const response = await fetch(
          "https://api.github.com/repos/itsriprod/deskthing-apps/releases/latest"
        )
        const release = await response.json()
        const files = release.assets.filter((asset: ReleaseFile) => asset.name.includes("-app"))

        const releaseFiles = files.map((file: ReleaseFile): GitHubRepoData => ({
          name: file.name.replace('.zip', '').replace('-app', ''),
          releaseUrl: file.browser_download_url,
          githubUrl: 'https://api.github.com/repos/itsriprod/deskthing-apps/releases/latest',
          description: '',
          authorProfile: file.uploader.avatar_url,
          author: file.uploader.login,
          authorUrl: file.uploader.html_url
        }))

        console.log(releaseFiles)
        
        sessionStorage.setItem('deskthing-releases', JSON.stringify(releaseFiles));
        sessionStorage.setItem('deskthing-releases-timestamp', Date.now().toString());

        setSetupFiles(files)
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching releases", error)
        setIsLoading(false);
      }
    }

    fetchReleases();
    fetchCommunityApps();
  }, [])

  return (
    <div className="font-geist w-full gap-24 p-4 pt-20 min-h-screen flex-col h-full justify-around bg-black flex items-center">
      <div className="flex flex-col items-center mt-10 h-full w-full">
        <h1 className="text-white w-full text-center font-geistMono text-3xl mb-8">Official Apps</h1>
        <div className="grid md:grid-cols-2 gap-2 max-w-[1000px] w-full overflow-auto flex-wrap">
          {isLoading ? (
            <div className="flex justify-center gap-3 px-5 text-white">
              <IconLogoLoading iconSize={224} />
            </div>
          ) : setupFiles.length > 0 ? (
            setupFiles.map((file, index) => (
              file && (
                <CommunityApp
                  key={index}
                  repoData={file}
                />
              )
            ))
          ) : (
            <p className="text-white">No releases found</p>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <h1 className="text-white text-center w-full font-geistMono text-3xl mb-8">Community Apps</h1>
        <div className="grid md:grid-cols-2 gap-2 max-w-[1000px] w-full overflow-auto flex-wrap">
          {communityApps.map((repo, index) => (
          <CommunityApp
            key={index}
            repoData={repo}
          />
        ))}
        </div>
      </div>
    </div>
  )
}