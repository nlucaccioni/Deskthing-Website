import { redirect } from "next/navigation";

const redirects = {
  youtube: {
    destination: "https://www.youtube.com/@deskthing",
    title: "DeskThing | Youtube",
    description: "Subscribe to Deskthing on YouTube!",
  },
  discord: {
    destination: "https://discord.com/invite/deskthing-1267348109067817051",
    title: "DeskThing | Discord",
    description: "Join the DeskThing Discord community!",
  },
  deskthing: {
    destination: "deskthing://",
    title: "DeskThing Custom Protocol",
    description: "Attempting to open the Deskthing application.",
  },
};

export async function generateStaticParams() {
  return Object.keys(redirects).map((key) => ({
    slug: key,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // Await the params object

  const redirectInfo = redirects[slug];

  if (!redirectInfo) {
    return {
      title: "Page Not Found",
      description: "The requested page does not exist.",
    };
  }

  return {
    title: redirectInfo.title,
    description: redirectInfo.description,
  };
}

export default async function RedirectPage({ params }) {
  const { slug } = await params;

  const redirectInfo = redirects[slug];

  if (!redirectInfo) {
    redirect("/404");
  }

  let { destination } = redirectInfo;

  if (slug === "deskthing") {
    const searchParams = new URLSearchParams(params?.query || "");
    destination += searchParams ? `?${searchParams.toString()}` : "";
  }

  redirect(destination);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-neutral-50">
      <h1 className="text-4xl mb-4">Redirecting...</h1>
      <p>You are being redirected. If nothing happens, click below:</p>
      <a
        href={destination}
        className="mt-4 text-green-400 hover:underline"
      >
        Go to {destination}
      </a>
    </div>
  );
}