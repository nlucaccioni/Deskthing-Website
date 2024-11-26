  const AboutSection = () => {
      return (
          <section className="max-w-4xl bg-zinc-900 p-8 rounded-lg shadow-lg border border-zinc-800">
              <h2 className="text-3xl font-semibold mb-4">What is DeskThing?</h2>
              <p className="mb-4">
                  DeskThing transforms Spotify&apos;s discontinued CarThing into a versatile desktop companion by turning it into an app platform. Users can install and run various applications like weather forecasts, NBA statistics, GitHub repository metrics, system resource monitoring, Discord notifications, and more. This open platform allows developers to create and share their own apps, extending the device&apos;s capabilities far beyond its original purpose.
              </p>
              <a href="/about" className="text-blue-400 hover:text-blue-300">
                  Learn more about DeskThing →
              </a>
          </section>
      )
  }

  export default AboutSection