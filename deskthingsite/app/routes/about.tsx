export default function About() {
  return (
    <div className="font-geist p-4 pt-20 max-w-screen min-h-screen bg-black text-white flex flex-col items-center">
      <div className="max-w-4xl bg-zinc-900 p-8 rounded-lg shadow-lg border border-zinc-800">
        <h1 className="text-4xl font-bold mb-4">What is the DeskThing?</h1>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2"><i>A quick history lesson:</i></h3>
          <p className="mb-4">
          Spotify officially launched the CarThing in 2022. The device was very polarizing to its customers and ultimately flopped in the eyes of Spotify. As a result, Spotify has decided not only to discontinue the product but also to discontinue support for the device, leaving it as e-waste. Spotify has actually encouraged users to throw away their current devices. December 9, 2024, marks the official end of the very short-lived product. However, many of its users have found ways to repurpose the CarThing to increase productivity.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">What we plan to do about it:</h2>
          <p className="mb-4">
          The DeskThing project aims to help extend the product life of the CarThing while also enabling additional features to further increase productivity. In its current state, the DeskThing is compatible with the CarThing when connected directly to a computer. However, the end goal for this project is to make it more adaptable to individual needs. This includes the ability to use the product on other devices such as Raspberry Pi's, Android phones, desktop apps, etc. It currently expands on the CarThing's original functionality by removing the need for a Bluetooth connection to a mobile device, adding local audio support (which enables the CarThing to report information from other sources), and providing weather reporting. More work needs to be done to get this project where the CarThing should have been at release. By the end of this project, we hope to prevent unnecessary e-waste and provide the best possible user experience outside of a second monitor.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">What DeskThing strives to become:</h2>
          <p className="mb-4">
          What started as a hobby project has turned into a passion project. We hope to continue to improve the DeskThing and make it a staple in the lives of our users. We hope to continue to add new features and improve the user experience, making the DeskThing a better product for everyone. Take back the Car Thing.
          </p>
          <ul>
            <li>
              <p>- 100% Open Source</p>
            </li>
            <li>
              <p>- 100% Expandable</p>
            </li>
            <li>
              <p>- 100% Capable</p>
            </li>
          </ul>
        </section>
        <p className="text-xl">Thank you</p>
      </div>
        <div className="max-w-4xl my-52 bg-zinc-900 p-8 rounded-lg shadow-lg">

        <section className="">
          <p>Okay, fancy company talk aside.</p>
          <p className="indent-4">I want this to act as a sign of encouragement. You&apos;ve made it this far, why not shoot for the moon? And once you hit that, aim for the stars. You&apos;ll never know what you&apos;re capable of unless you try. You will fail. We all do. But you can always try again. </p>
          <p className="indent-4">Realistically I doubt anyone is going to find this. But if you have somehow stumbled upon my little project on this corner of the internet. I want to welcome you here. I&apos;m really trying my hardest to make the DeskThing an easy entrypoint for beginners to mess around with real tools to build their own deskside applications. If you&apos;re at all interested or want to support this project, there are links on the home page of this site.</p>
          <br />
          <p>Thank you,</p>
          <p>Riprod</p>
        </section>
        </div>
    </div>
  );
}