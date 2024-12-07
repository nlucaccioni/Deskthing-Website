import { Download, ExternalLink } from 'lucide-react';

export function OfficialAppCard({ appName, latestReleaseUrl, repoUrl, releaseDate }) {
  return (
    <div className="p-6 border border-neutral-800 rounded-lg flex flex-col gap-2
    bg-neutral-925 hoverDropShadow transition ease-in-out duration-200">
      <h4 className="text-left w-full font-medium">{appName}</h4>
      <p className="text-left w-full font-mono text-neutral-400 text-sm">
        {releaseDate}
      </p>
      <div className="flex flex-row gap-2">
        <a
          href={latestReleaseUrl}
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm 
          hover:bg-green-600 transition ease-in-out duration-200 hoverDropShadow"
        >
          Latest
          <Download size="20px" />
        </a>
        <a
          href={repoUrl}
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm text-neutral-400
          hover:bg-neutral-50/10 transition ease-in-out duration-200"
        >
          App Repo
          <ExternalLink size="20px" />
        </a>
      </div>
    </div>
  );
}

export function AppCard({ appName, authorName, description, latestReleaseUrl, repoUrl }) {
  return (
    <div className="p-6 border border-neutral-800 rounded-lg flex flex-col justify-between gap-2
    bg-neutral-925 hoverDropShadow transition ease-in-out duration-200">
      <div className='flex flex-col gap-2'>
        <h5 className="text-left text-2xl w-full font-medium text-green-600">{appName}</h5>
        <p className="text-left w-full font-mono text-neutral-400 text-sm">
          by {authorName}
        </p>
        <p className="text-left w-full mb-1">
          {description}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <a
          href={latestReleaseUrl}
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm 
          hover:bg-green-600 transition ease-in-out duration-200 hoverDropShadow"
        >
          Latest
          <Download size="20px" />
        </a>
        <a
          href={repoUrl}
          className="px-3 py-2 border border-neutral-800 w-full rounded-lg flex flex-row justify-between items-center text-sm text-neutral-400
          hover:bg-neutral-50/10 transition ease-in-out duration-200"
        >
          App Repo
          <ExternalLink size="20px" />
        </a>
      </div>
    </div>
  );
}