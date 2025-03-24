'use client';
import { 
  MonitorSmartphone, 
  Recycle, 
  Cpu, 
  Code, 
  Puzzle, 
  Zap, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
}

interface ChecklistItemProps {
  text: string;
  label: string;
}

interface InfoCardProps {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
  borderColor: string;
}

interface AppCardProps {
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description, iconColor }: FeatureCardProps) {
  return (
    <div className="bg-neutral-800 p-5 rounded-lg flex flex-col h-full border-2 border-transparent transition-all hover:border-2 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
      <div className="flex items-center mb-3">
        <div className={`${iconColor} mr-3`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

function ChecklistItem({ text, label }: ChecklistItemProps) {
  return (
    <div className="flex items-center">
      <div className="mt-1 mr-3 w-6 h-6 rounded-full bg-green-900 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-bold">✓</span>
      </div>
      <p><span className="font-medium">{label}</span> {text}</p>
    </div>
  );
}

function InfoCard({ icon, iconColor, title, description, borderColor }: InfoCardProps) {
  return (
    <div className={`bg-neutral-800 p-5 rounded-lg border-t-4 ${borderColor} transition-all hover:border-2 hover:${borderColor} hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]`}>
      <div className="flex justify-center mb-4">
        <div className={iconColor}>{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <p className="text-center text-sm">{description}</p>
    </div>
  );
}

function AppCard({ title, description }: AppCardProps) {
  return (
    <a href="/apps" className="bg-neutral-800 p-3 rounded-lg hover:bg-neutral-900 transition-colors">
      <h4 className="font-medium text-green-400">{title}</h4>
      <p className="text-sm mt-1">{description}</p>
    </a>
  );
}

function FeaturesGrid() {
  const features = [
    {
      icon: <Recycle size={24} />,
      title: "Upcycle Old Devices",
      description: "Instead of discarding your outdated smartphones, tablets, or Car Thing devices, DeskThing gives them new purpose as dedicated displays and control surfaces for your computer. This extends their useful lifespan and reduces electronic waste.",
      iconColor: "text-green-400"
    },
    {
      icon: <Cpu size={24} />,
      title: "Enhance Your Workflow",
      description: "Free up valuable screen space on your main computer by offloading monitoring tasks, controls, and information displays to connected devices. From system resources and weather updates to smart home controls and media players, DeskThing keeps important information visible without cluttering your primary workspace.",
      iconColor: "text-blue-400"
    },
    {
      icon: <Code size={24} />,
      title: "Developer-Friendly",
      description: "With a comprehensive SDK and intuitive Links API layer, DeskThing makes it easy for developers of any skill level to create custom applications. The platform handles the complex communication between devices, allowing developers to focus on building functionality rather than managing connections.",
      iconColor: "text-purple-400"
    },
    {
      icon: <Puzzle size={24} />,
      title: "Modular App Ecosystem",
      description: "DeskThing features a growing library of both official and community-created apps. Each app is self-contained with both frontend and backend components, allowing for easy installation, updates, and customization. From system monitors to smart home controls, there's an app for almost every need.",
      iconColor: "text-yellow-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          iconColor={feature.iconColor}
        />
      ))}
    </div>
  );
}

export default function WhatSection() {
  const keyFeatures = [
    { label: "Cross-platform support", text: "for Windows, Mac, Linux, and any device with a modern browser" },
    { label: "Low resource utilization", text: "with less than 10% CPU usage on client devices" },
    { label: "Multi-device support", text: "with the ability to handle several devices connected simultaneously" },
    { label: "Real-time updates", text: "via secure WebSocket communication" },
    { label: "Comprehensive SDK", text: "with Links API for simplified app development" },
    { label: "Thread isolation", text: "for apps to ensure stability and security" },
    { label: "Reactive UI", text: "built with Zustand, React, and TailwindCSS" },
    { label: "Easy setup", text: "with no client-side installation required" }
  ];

  const infoCards = [
    {
      icon: <Globe size={36} />,
      iconColor: "text-green-400",
      title: "Universal Access",
      description: "Any device with a browser can connect to your DeskThing server over your local network. No app installation required—just navigate to the provided URL and start using your device as a DeskThing.",
      borderColor: "border-green-500"
    },
    {
      icon: <ShieldCheck size={36} />,
      iconColor: "text-blue-400",
      title: "Secure By Design",
      description: "DeskThing operates exclusively on your local network, minimizing security risks. All communication between the server and clients is handled within your network, ensuring that sensitive information remains private.",
      borderColor: "border-blue-500"
    },
    {
      icon: <Puzzle size={36} />,
      iconColor: "text-purple-400",
      title: "Expandable Platform",
      description: "The modular architecture allows for continuous expansion of capabilities through new apps and features. As the community grows, so does the ecosystem of available applications and use cases.",
      borderColor: "border-purple-500"
    }
  ];

  const coreApps = [
    { title: "System Monitor", description: "Track CPU, memory, disk usage, and network activity in real-time" },
    { title: "Weather", description: "Display current conditions and forecasts for your location" },
    { title: "Spotify Controller", description: "Control playback and view now-playing information" },
    { title: "Discord Status", description: "See active voice channels and participants" },
    { title: "Home Assistant", description: "Control smart home devices directly from your DeskThing" },
    { title: "And More...", description: "New official and community apps are added regularly" }
  ];

  return (
    <div className="p-2 md:p-8 bg-neutral-900 rounded-lg h-full">
      <h2 className="text-3xl font-bold mb-6">What is DeskThing?</h2>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed">
              DeskThing is an open-source platform that transforms any internet-connected device with a browser 
              into an interactive digital assistant for your computer. By repurposing outdated hardware like 
              old phones, tablets, or Spotify's discontinued Car Thing, DeskThing reduces electronic waste while 
              adding valuable functionality to your workspace.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="p-6 bg-neutral-800 rounded-full">
              <MonitorSmartphone size={80} className="text-green-400" />
            </div>
          </div>
        </div>
        
        {FeaturesGrid()}
        
        <div className="mt-8 bg-neutral-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Zap className="text-green-400 mr-3" size={28} />
            <h3 className="text-2xl font-semibold">Key Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {keyFeatures.map((feature, index) => (
              <ChecklistItem key={index} {...feature} />
            ))}
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
        
        <div className="mt-8 bg-neutral-700 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold mb-3">Core Applications</h3>
          <p className="mb-4">
            DeskThing comes with several official applications to get you started, with more being added regularly:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {coreApps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-neutral-800 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="/imgs/DeskThing_Device.png" 
                alt="DeskThing Device" 
                className="w-48 h-auto object-contain"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">More Than Just Software</h3>
              <p>
                DeskThing is more than just an application—it's a platform that fosters responsibility and creativity 
                while enhancing productivity. By transforming unused devices into powerful tools, DeskThing not only 
                reduces electronic waste but also empowers users and developers to create innovative solutions tailored 
                to their specific needs.
              </p>
              <p className="mt-3">
                Whether you're looking to maximize the potential of your old devices, build and deploy apps with ease, 
                or simply find ways to streamline your digital life, DeskThing offers a flexible, accessible, and 
                sustainable platform that adapts to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
