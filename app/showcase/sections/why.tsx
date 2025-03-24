"use client";
import {
  Recycle,
  LineChart,
  Code,
  Cpu,
  Globe,
  Puzzle,
  MessageSquareQuote,
  Lightbulb,
} from "lucide-react";

export default function WhySection() {
  return (
    <div className="md:p-8 p-2 bg-neutral-900 rounded-lg h-full">
      <h2 className="text-3xl font-bold mb-6">Why should I use it?</h2>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed">
              DeskThing offers a unique combination of environmental
              responsibility, productivity enhancement, and technological
              flexibility. Whether you're looking to repurpose old devices,
              streamline your workflow, or develop custom applications,
              DeskThing provides a platform that adapts to your needs.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="p-6 bg-neutral-800 rounded-full">
              <Lightbulb size={80} className="text-yellow-400" />
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Recycle className="text-green-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Reduce E-Waste</h3>
          </div>
          <p>
            Modern smartphones have a relatively short shelf life, with most
            becoming obsolete within a few years. DeskThing gives new life to
            these devices that would otherwise end up as electronic waste,
            extending their useful lifespan and reducing environmental impact.
            As Christians are called to be good stewards of what we're given,
            DeskThing helps you recycle and add use to what you already own
            rather than contributing to more e-waste.
          </p>
          <div className="mt-4 bg-neutral-700 p-3 rounded-lg">
            <p className="text-sm italic">
              According to a SellCell survey, '80.2% of Americans and 80.5% of
              Brits have two or more unused devices lying around at home.' This
              highlights the significant number of devices that could be
              repurposed rather than sitting idle. For more details, you can{" "}
              <a
                href="https://www.sellcell.com/blog/electronics-hoarding-survey/"
                className="text-blue-400 hover:underline"
              >
                visit the survey results
              </a>
              .
            </p>
          </div>
        </div>

        <div className="bg-neutral-800 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <LineChart className="text-blue-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Enhance Productivity</h3>
          </div>
          <p>
            For many users, especially in creative fields, managing multiple
            applications on a single screen can be overwhelming and inefficient.
            DeskThing transforms your desk with a customizable heads-up display
            that offloads non-essential applications to a secondary device,
            maintaining a clean desktop experience. From monitoring system
            resources to tracking stocks, weather, and sports scores, DeskThing
            complements your primary workstation without consuming valuable
            screen space.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-neutral-700 p-3 rounded-lg text-center">
              <h4 className="text-blue-400 font-medium text-lg">30%</h4>
              <p className="text-sm">Reduction in context switching</p>
            </div>
            <div className="bg-neutral-700 p-3 rounded-lg text-center">
              <h4 className="text-blue-400 font-medium text-lg">100%</h4>
              <p className="text-sm">Main screen dedicated to primary tasks</p>
            </div>
            <div className="bg-neutral-700 p-3 rounded-lg text-center">
              <h4 className="text-blue-400 font-medium text-lg">24/7</h4>
              <p className="text-sm">
                Continuous access to important information
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Code className="text-purple-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Open Source Advantage</h3>
          </div>
          <p>
            As an open-source platform, DeskThing benefits from community
            contributions, transparent development, and no hidden costs or data
            collection. The comprehensive SDK puts all the controls into
            developers' hands in an easy and intuitive way, with a low barrier
            to entry for full-stack web development. Whether you're looking to
            use existing apps or create your own, DeskThing's open ecosystem
            empowers both users and developers.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-700 p-3 rounded-lg flex">
              <div className="mr-3 mt-1">
                <Code size={18} className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium">Comprehensive SDK</h4>
                <p className="text-sm">
                  Develop apps using familiar web technologies like React and
                  Node.js
                </p>
              </div>
            </div>
            <div className="bg-neutral-700 p-3 rounded-lg flex">
              <div className="mr-3 mt-1">
                <Globe size={18} className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium">Community Support</h4>
                <p className="text-sm">
                  Active Discord server and GitHub community for collaboration
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Cpu className="text-yellow-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Resource Efficiency</h3>
          </div>
          <p>
            DeskThing is designed to be lightweight, using minimal system
            resources on both the server and client sides. The core engine
            manages system resources efficiently, handles app communication
            seamlessly, and provides the foundation for all functionality while
            using less than 100MB of RAM and minimal CPU when idle. This ensures
            smooth performance even on older hardware, making it accessible to a
            wide range of devices that might otherwise be considered obsolete.
          </p>
          <div className="mt-4 bg-neutral-700 p-3 rounded-lg">
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <h4 className="text-yellow-400 font-medium">&#60;10%</h4>
                <p className="text-xs">CPU usage on client devices</p>
              </div>
              <div className="text-center">
                <h4 className="text-yellow-400 font-medium">&#60;100MB</h4>
                <p className="text-xs">RAM usage when idle</p>
              </div>
              <div className="text-center">
                <h4 className="text-yellow-400 font-medium">7+</h4>
                <p className="text-xs">Simultaneous device connections</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Globe className="text-teal-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold">
              Cross-Platform Compatibility
            </h3>
          </div>
          <p>
            DeskThing works across multiple operating systems (Windows, macOS,
            Linux) and can connect to any device with a browser. There's no need
            for specialized hardware or complex setup—simply install DeskThing
            on your computer, navigate to the provided URL on your device, and
            you're ready to go. This universal compatibility ensures a
            consistent experience regardless of your technology ecosystem.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-neutral-700 p-2 rounded-lg text-center">
              <p className="text-sm font-medium text-teal-400">Windows</p>
            </div>
            <div className="bg-neutral-700 p-2 rounded-lg text-center">
              <p className="text-sm font-medium text-teal-400">macOS</p>
            </div>
            <div className="bg-neutral-700 p-2 rounded-lg text-center">
              <p className="text-sm font-medium text-teal-400">Linux</p>
            </div>
            <div className="bg-neutral-700 p-2 rounded-lg text-center">
              <p className="text-sm font-medium text-teal-400">Any Browser</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Puzzle className="text-pink-400 mr-3" size={24} />
            <h3 className="text-xl font-semibold">Modular App System</h3>
          </div>
          <p>
            DeskThing features a modular app system where both official and
            community-created apps can be installed to extend functionality.
            Apps are self-contained modules that provide specific functionality,
            communicating with the core through a secure API. They can be
            installed, updated, or removed without affecting the rest of the
            system, allowing you to customize your experience to match your
            specific needs and workflow.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-neutral-700 p-3 rounded-lg">
              <h4 className="font-medium text-pink-400">System Monitoring</h4>
              <p className="text-sm mt-1">
                Track CPU, memory, and network usage
              </p>
            </div>
            <div className="bg-neutral-700 p-3 rounded-lg">
              <h4 className="font-medium text-pink-400">Media Controls</h4>
              <p className="text-sm mt-1">Control music and video playback</p>
            </div>
            <div className="bg-neutral-700 p-3 rounded-lg">
              <h4 className="font-medium text-pink-400">Smart Home</h4>
              <p className="text-sm mt-1">
                Manage connected devices and scenes
              </p>
            </div>
            <div className="bg-neutral-700 p-3 rounded-lg">
              <h4 className="font-medium text-pink-400">Weather</h4>
              <p className="text-sm mt-1">Real-time forecasts and conditions</p>
            </div>
            <div className="bg-neutral-700 p-3 rounded-lg">
              <h4 className="font-medium text-pink-400">Calendar</h4>
              <p className="text-sm mt-1">View upcoming events and reminders</p>
            </div>
            <div className="bg-neutral-700 p-3 rounded-lg">
              <h4 className="font-medium text-pink-400">And More...</h4>
              <p className="text-sm mt-1">Expanding library of applications</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <MessageSquareQuote className="text-green-400 mr-3" size={24} />
            Community Feedback
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <div className="p-5 bg-neutral-800 rounded-lg relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-green-900 flex items-center justify-center">
                <MessageSquareQuote size={16} className="text-green-400" />
              </div>
              <p className="italic text-gray-300">
                "DeskThing is a fantastic project that breathes new life into
                the Car Thing device. It's amazing to see the community come
                together to repurpose this hardware."
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://cdn.arstechnica.net/civis/data/avatars/m/502/502117.jpg?1731438555"
                  srcSet="https://cdn.arstechnica.net/civis/data/avatars/m/502/502117.jpg?1731438555 1x, https://cdn.arstechnica.net/civis/data/avatars/l/502/502117.jpg?1731438555 2x"
                  alt="Josh Hendrickson"
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">@JoshHendrickson</p>
                  <a
                    href="https://arstechnica.com/civis/threads/firmware-hacks-are-rejuvenating-spotify%E2%80%99s-car-thing-before-the-company-bricks-it.1504069/"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    View on Ars Technica Forum
                  </a>
                </div>
              </div>
            </div>
            <div className="p-5 bg-neutral-800 rounded-lg relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">
                <MessageSquareQuote size={16} className="text-blue-400" />
              </div>
              <p className="italic text-gray-300">
                "I appreciate the effort behind DeskThing. It's great to see
                developers creating alternative uses for discontinued products,
                turning them into useful tools."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">RB</span>
                </div>
                <div>
                  <p className="font-medium">@rockbruno</p>
                  <a
                    href="https://news.ycombinator.com/item?id=42034362"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    View on Hacker News
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-neutral-700 rounded-lg border-l-4 border-green-500 mt-8">
          <h3 className="text-xl font-semibold mb-3">The DeskThing Vision</h3>
          <p className="text-gray-300">
            DeskThing is more than just an application—it's a platform that
            fosters responsibility and creativity while enhancing productivity.
            By transforming unused devices into powerful tools, DeskThing not
            only reduces electronic waste but also empowers users and developers
            to create innovative solutions tailored to their specific needs.
          </p>
          <p className="text-gray-300 mt-3">
            Whether you're looking to maximize the potential of your old
            devices, build and deploy apps with ease, or simply find ways to
            streamline your digital life, DeskThing offers a flexible,
            accessible, and sustainable platform that adapts to you. The
            project's commitment to open-source principles ensures that it will
            continue to evolve based on community needs and contributions.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-neutral-800 p-3 rounded-lg">
              <h4 className="font-medium text-green-400 mb-1">
                Environmental Impact
              </h4>
              <p className="text-sm">
                By extending the useful life of devices, DeskThing helps reduce
                the 53.6 million metric tons of e-waste generated globally each
                year.
              </p>
            </div>
            <div className="bg-neutral-800 p-3 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-1">Accessibility</h4>
              <p className="text-sm">
                DeskThing's low resource requirements make it accessible to
                users with older hardware or limited technical resources.
              </p>
            </div>
            <div className="bg-neutral-800 p-3 rounded-lg">
              <h4 className="font-medium text-purple-400 mb-1">
                Community Growth
              </h4>
              <p className="text-sm">
                The expanding ecosystem of apps and developers creates a
                positive feedback loop of innovation and improvement.
              </p>
            </div>
          </div>
          <p className="text-gray-300 mt-4">
            As Christians are called to be good stewards of what we're given,
            DeskThing embodies this principle by helping users make the most of
            existing technology rather than contributing to a culture of
            disposability. This approach not only benefits the environment but
            also promotes a mindset of resourcefulness and creativity that can
            extend beyond technology into other areas of life.
          </p>
        </div>

        <div className="bg-neutral-800 p-5 rounded-lg mt-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <Lightbulb size={64} className="text-yellow-400" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">
                Ready to Get Started?
              </h3>
              <p>
                Join the growing community of DeskThing users and developers who
                are transforming their digital workspaces while giving new life
                to old devices. Whether you're a developer looking to create
                custom solutions or a user seeking to enhance your productivity,
                DeskThing provides the tools and flexibility you need.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="/releases"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors"
                >
                  Download Now
                </a>
                <a
                  href="https://wiki.thinglabs.tech"
                  className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition-colors"
                >
                  Read Documentation
                </a>
                <a
                  href="/discord"
                  className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition-colors"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
