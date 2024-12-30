import { fetchCommunityReleasesFromRepos, fetchOfficialAppsData } from '../../services';
import { OfficialAppCard, AppCard } from '../../components/appCards';
import { JSX } from 'react';

export const metadata: { title: string; description: string } = {
  title: 'DeskThing | Apps',
  description: 'Explore core and community-built applications that expand your Car Thing\'s functionality.',
}

interface App {
  appName: string;
  appVersion: string;
}

interface Release {
  appName: string;
  authorName: string;
  description: string;
  latestReleaseUrl: string;
  repoUrl: string;
}

export default async function AppPage(): Promise<JSX.Element> {
  const releases: Release[] = await fetchCommunityReleasesFromRepos();

  const { latestApps, latestReleaseUrl, repoUrl }: { 
    latestApps: App[]; 
    latestReleaseUrl: string; 
    repoUrl: string; 
  } = await fetchOfficialAppsData();

  if (!latestApps) {
    return <div>Error loading official apps</div>;
  }

  return (
    <>
      <div className="min-h-svh flex flex-row justify-between pt-nav mx-6 xl:mx-0">
        <div className="wideContainer xl:px-6 flex flex-col mx-auto gap-columnGap items-center ">
          <section className="w-full flex flex-col gap-4">
            <h2>Official Apps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {latestApps.map((app: App, index: number) => (
                <OfficialAppCard
                  key={index}
                  appName={app.appName}
                  latestReleaseUrl={latestReleaseUrl}
                  repoUrl={repoUrl}
                  appVersion={app.appVersion}
                />
              ))}
            </div>
          </section>
          <section className="w-full flex flex-col gap-4">
            <h2>Community Apps</h2>
            <div className="grid rid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {releases.map((release: Release, index: number) => (
                <AppCard
                  key={index}
                  appName={release.appName}
                  authorName={release.authorName}
                  description={release.description}
                  latestReleaseUrl={release.latestReleaseUrl}
                  repoUrl={release.repoUrl}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}