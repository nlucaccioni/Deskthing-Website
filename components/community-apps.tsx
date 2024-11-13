import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github, Star } from 'lucide-react';
import Link from 'next/link';

type App = {
  title: string;
  description: string;
  author: string;
  stars: number;
  tags: string[];
  repoUrl: string;
};

const apps: App[] = [
  {
    title: 'LyrThing',
    description: 'Display synced lyrics and now-playing information.',
    author: 'espeon',
    stars: 124,
    tags: ['music', 'api', 'beta'],
    repoUrl: '#',
  },
  {
    title: 'Market Hub',
    description: 'A quick-access, at-a-glance view of selected stocks',
    author: 'dakota-kallas',
    stars: 89,
    tags: ['system', 'monitoring', 'beta'],
    repoUrl: '#',
  },
  {
    title: 'WeatherWave',
    description:
      'Ambient display that shows off your weather, time, and whatever spotify song is playing all at a glance',
    author: 'Dammit Jeff',
    stars: 256,
    tags: ['music', 'weather', 'beta'],
    repoUrl: '#',
  },
  {
    title: 'Global Media Player',
    description: 'Control and get information from local media players',
    author: 'RandomDebugGuy',
    stars: 67,
    tags: ['music', 'media', 'alpha'],
    repoUrl: '#',
  },
  {
    title: 'Timer App',
    description: 'Set, manage, and view timers',
    author: 'TylStres',
    stars: 143,
    tags: ['notifications', 'system', 'stable'],
    repoUrl: '#',
  },
  {
    title: 'Volume Mixer',
    description:
      'A volume mixer app that allows you to control volumes of apps separately',
    author: 'jarsa132',
    stars: 178,
    tags: ['media', 'control', 'beta'],
    repoUrl: '#',
  },
];

const tagColors: Record<string, string> = {
  stable: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
  beta: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
  alpha: 'bg-red-500/10 text-red-500 hover:bg-red-500/20',
  system: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20',
  notifications: 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20',
  productivity: 'bg-pink-500/10 text-pink-500 hover:bg-pink-500/20',
  spotify: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
  weather: 'bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20',
  media: 'bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20',
  monitoring: 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20',
  timer: 'bg-rose-500/10 text-rose-500 hover:bg-rose-500/20',
  api: 'bg-violet-500/10 text-violet-500 hover:bg-violet-500/20',
  music: 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20',
  control: 'bg-sky-500/10 text-sky-500 hover:bg-sky-500/20',
};

function getRandomFromArray(arr: App[], count: number = 1): App[] {
  if (count >= arr.length) {
    return [...arr];
  }

  const uniqueItems = new Set<App>();
  while (uniqueItems.size < count) {
    uniqueItems.add(arr[Math.floor(Math.random() * arr.length)]);
  }

  return Array.from(uniqueItems);
}

export function CommunityApps({ limit }: { limit?: number }) {
  const shownApps = limit ? getRandomFromArray(apps, limit) : apps;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shownApps.map((app) => (
        <Card
          key={app.title}
          className="dark:bg-black/40 bg-neutral-300/40 border-green-900/20 backdrop-blur-sm hover:border-green-900/40 transition-colors flex flex-col"
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl mb-2">{app.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 -mt-2">
                  by {app.author}
                </CardDescription>
              </div>
              <Link
                href={app.repoUrl}
                className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-white transition-colors"
              >
                <Star className="w-4 h-4" />
                <span>{app.stars}</span>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between -mt-4">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {app.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`${
                    tagColors[tag] || 'bg-gray-500/10 text-gray-500'
                  } border-none`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
