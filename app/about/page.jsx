export default function AboutPage() {
  return (
    <>
      <div className="min-h-svh flex flex-row justify-between pt-nav">
        <div className="mainContainer flex flex-col mx-auto gap-columnGap">
          <h1 className="text-green-600">
            About <br />
            DeskThing
          </h1>
          <section>
            <h2>A Quick History Lesson</h2>
            <p className="characterLimit">
              Spotify officially launched the CarThing in 2022. The device was
              very polarizing to its customers and ultimately flopped in the
              eyes of Spotify. As a result, Spotify has decided not only to
              discontinue the product but also to discontinue support for the
              device, leaving it as e-waste. Spotify has actually encouraged
              users to throw away their current devices. December 9, 2024, marks
              the official end of the very short-lived product. However, many of
              its users have found ways to repurpose the CarThing to increase
              productivity.
            </p>
            <div className="w-full bg-white rounded-2xl h-64 overflow-clip mt-4 border border-neutral-700">
              <img
                src="/imgs/CarThing_Hero.png"
                alt="Spotify CarThing"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="font-mono text-xs mt-2 text-neutral-300">
              CREDIT: SPOTIFY
            </p>
          </section>
          <section>
            <h2>What We Plan to Do About It</h2>
            <p className="characterLimit">
              Spotify officially launched the CarThing in 2022. The device was
              very polarizing to its customers and ultimately flopped in the
              eyes of Spotify. As a result, Spotify has decided not only to
              discontinue the product but also to discontinue support for the
              device, leaving it as e-waste. Spotify has actually encouraged
              users to throw away their current devices. December 9, 2024, marks
              the official end of the very short-lived product. However, many of
              its users have found ways to repurpose the CarThing to increase
              productivity.
            </p>
            <div className="w-full bg-white rounded-2xl h-64 overflow-clip mt-4 border border-neutral-700">
              <img
                src="/imgs/DeskThing_Hero.png"
                alt="DeskThing Logo"
                className="object-cover w-full h-full"
              />
            </div>
          </section>
          <section>
            <h2>What DeskThing Strives to Become</h2>
            <p className="characterLimit">
              What started as a hobby project has turned into a passion project.
              We hope to continue to improve the DeskThing and make it a staple
              in the lives of our users. We hope to continue to add new features
              and improve the user experience, making the DeskThing a better
              product for everyone. Take back the Car Thing.
            </p>
            <br />
            <ul className="font-light">
              <li>- 100% Open Source</li>
              <li>- 100% Expandable</li>
              <li>- 100% Capable</li>
            </ul>
          </section>
          <section className="p-6 bg-neutral-900 rounded-2xl">
            <p>
              Okay, fancy company talk aside.
              <br /><br />
              I want this to act as a sign of encouragement. You've made it this
              far, why not shoot for the moon? And once you hit that, aim for
              the stars. You'll never know what you're capable of unless you
              try. You will fail. We all do. But you can always try again.
              <br /><br />
              Realistically I doubt anyone is going to find this. But if you
              have somehow stumbled upon my little project on this corner of the
              internet. I want to welcome you here. I'm really trying my hardest
              to make the DeskThing an easy entrypoint for beginners to mess
              around with real tools to build their own deskside applications.
              If you're at all interested or want to support this project, there
              are links on the home page of this site.
              <br /><br />
              Thank you,
              <br /><br />
              Riprod
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
