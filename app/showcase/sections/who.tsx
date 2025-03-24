"use client";

import { User, Code, Users, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="p-2 md:p-8 bg-neutral-900 rounded-lg h-full">
      <h2 className="text-3xl font-bold mb-6">About DeskThing</h2>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 space-y-4">
            <p>
              DeskThing was created by Nathan Emerick, a passionate developer
              who saw an opportunity to transform discarded technology into
              valuable tools. What began as a personal project to repurpose
              Spotify's discontinued Car Thing devices has evolved into a
              community-supported platform with a growing ecosystem of apps and
              developers.
            </p>
            <p>
              As a computer science student at Grand Canyon University, Nathan
              developed DeskThing as part of his Capstone Project. His vision
              went beyond simply creating another piece of software—he wanted to
              address the growing problem of electronic waste while providing a
              practical solution for enhancing productivity.
            </p>
            <p>
              "I was frustrated seeing perfectly functional hardware being
              thrown away just because a company decided to discontinue
              support," Nathan explains. "The Car Thing had a great screen,
              buttons, and dial—all the components needed for an excellent
              desktop companion. It seemed wasteful to let that go to landfill
              when it could still serve a purpose."
            </p>
          </div>
          <a
            href="http://linkedin.com/in/nathan-emerick"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-1/3 bg-neutral-800 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-neutral-700 transition-all duration-300 group relative"
          >
            <div className="w-24 h-24 rounded-full mb-4 overflow-hidden ring-2 ring-blue-400/30 group-hover:ring-blue-400/70 transition-all duration-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHn-FXQlEFJog/profile-displayphoto-shrink_200_200/B56ZXHo2uaHEAY-/0/1742811131162?e=1748476800&v=beta&t=rTDAv4L6p9DDzU6uCDEvsXiJbYyMC40Wn8k67T_TmZQ"
                alt="Nathan Emerick"
                className="w-full h-full object-cover brightness-90 contrast-95 group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
              Nathan Emerick
            </h3>
            <p className="text-sm text-center text-gray-400 mt-1 flex items-center gap-2">
              <Users size={16} className="text-blue-400" />
              Creator & Lead Developer
            </p>
            <p className="text-sm text-center mt-3 text-gray-300">
              "Technology should be sustainable, accessible, and empower users
              to create their own solutions."
            </p>
            <div className="flex items-center gap-2 mt-4 text-blue-400">
              <span className="text-sm">Visit LinkedIn Profile</span>
            </div>
            <ArrowRight className="absolute bottom-2 right-2 w-5 h-5 opacity-0 group-hover:opacity-100 text-blue-400 transition-all duration-300" />
          </a>
        </div>

        <div className="bg-neutral-800 p-5 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">The Journey</h3>
          <p className="mb-3">
            The DeskThing project began in early 2023 when Spotify announced
            they would be discontinuing the Car Thing, leaving many users with
            devices that would soon become non-functional. Nathan, who had
            recently purchased one, refused to accept that the hardware would
            become useless.
          </p>
          <p>
            After working with the ThingLabs team to setup the initial hack, he
            set to work creating the initial prototype that could run custom
            software on the Car Thing. What started as a personal hack quickly
            gained attention when he shared his progress online. Other Car Thing
            owners, facing the same obsolescence problem, began reaching out
            with questions, suggestions, and offers to help.
          </p>
          <p className="mt-3">
            "The response was overwhelming," Nathan recalls. "I realized this
            wasn't just about saving my own device—there was a whole community
            of people who wanted to keep using their hardware. That's when
            DeskThing transformed from a personal project into an open-source
            platform."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-400 flex items-center gap-2">
              <Code size={20} />
              Open Source Philosophy
            </h3>
            <p className="text-sm">
              Nathan firmly believes in the power of open-source development. By
              making DeskThing freely available and open to contributions, he's
              created a platform that benefits from diverse perspectives and
              continues to evolve beyond what any single developer could achieve
              alone.
            </p>
          </div>
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-400 flex items-center gap-2">
              <User size={20} />
              Christian Worldview
            </h3>
            <p className="text-sm">
              As a student at Grand Canyon University, Nathan's approach to
              technology is informed by his Christian worldview. "In the Bible,
              we're called to be good stewards of what we're given," he
              explains. "DeskThing embodies this principle by extending the
              useful life of devices that would otherwise contribute to
              environmental waste."
            </p>
          </div>
          <div className="bg-neutral-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-purple-400 flex items-center gap-2">
              <Users size={20} />
              Community Focus
            </h3>
            <p className="text-sm">
              From the beginning, Nathan designed DeskThing with community
              involvement in mind. The comprehensive SDK, detailed
              documentation, and active support channels all reflect his
              commitment to making the platform accessible to developers of all
              skill levels.
            </p>
          </div>
        </div>

        <div className="bg-neutral-700 p-5 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <ArrowRight size={24} />
            Looking Forward
          </h3>
          <p>
            Today, Nathan continues to lead DeskThing development while
            balancing his academic responsibilities and other projects. His
            vision for the future includes expanding device compatibility,
            enhancing the app ecosystem, and potentially developing
            purpose-built hardware specifically designed for the DeskThing
            platform.
          </p>
          <p className="mt-3">
            "What excites me most is seeing what other people create with
            DeskThing," he says. "Every time someone develops a new app or finds
            a creative way to use the platform, it validates the original vision
            and pushes us to make the system even better."
          </p>
          <p className="mt-3">
            As the community continues to grow, Nathan remains committed to the
            core principles that inspired DeskThing: sustainability,
            accessibility, and empowering users to create their own solutions to
            everyday problems.
          </p>
        </div>
      </div>
    </div>
  );
}
