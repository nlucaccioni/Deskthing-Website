import { fetchCommunityReleasesFromRepos, fetchOfficialAppsData } from '../../services';
import { OfficialAppCard, AppCard } from '../../components/appCards';


export const metadata = {
  title: 'DeskThing | Apps',
  description: 'Explore core and community-built applications that expand your Car Thing\'s functionality.',
}

export default async function AppPage() {
  

  const releases = await fetchCommunityReleasesFromRepos();

  const { latestApps, latestReleaseUrl, repoUrl, releaseDate } =
    await fetchOfficialAppsData();

  if (!latestApps) {
    return <div>Error loading official apps</div>;
  }

  return (
    <>
      <div className="min-h-svh flex flex-row justify-between pt-nav mx-6 xl:mx-0">
        <div className="wideContainer flex flex-col mx-auto gap-columnGap items-center ">
          <section className="w-full flex flex-col gap-4">
            <h2>Official Apps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Loop through the app s and render a card for each */}
              {latestApps.map((app, index) => (
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
              {releases.map((release, index) => (
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
