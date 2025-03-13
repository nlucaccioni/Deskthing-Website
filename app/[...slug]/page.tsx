import { redirect } from "next/navigation";
import { JSX } from "react";

interface RedirectInfo {
  destination: string;
  title: string;
  description: string;
}

const redirects: Record<string, RedirectInfo> = {
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
  desktop: {
    destination: "deskthing://",
    title: "DeskThing Custom Protocol",
    description: "Attempting to open the Deskthing application.",
  },
  support: {
    destination: "https://buymeacoffee.com/riprod",
    title: "Deskthing | Support",
    description: "Support development of Deskthing.",
  }
};

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return Object.keys(redirects).map((key) => ({
    slug: [key],
  }));
}

interface GenerateMetadataParams {
  params?: Promise<{ slug?: string[] }>;
}

export async function generateMetadata(props: GenerateMetadataParams): Promise<{ title: string; description: string }> {
  const params = await props.params;
  if (!params || !params.slug || params.slug.length === 0) {
    return {
      title: "Page Not Found",
      description: "The requested page does not exist.",
    };
  }

  const slug = params.slug[0];

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

interface RedirectPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function RedirectPage(props: RedirectPageProps): Promise<JSX.Element> {
  const params = await props.params;
  if (!params || !params.slug) {
    redirect("/404");
    return <></>;
  }

  const slugArray = params.slug;
  const slug = slugArray[0];

  const redirectInfo = redirects[slug];

  if (!redirectInfo) {
    redirect("/404");
    return <></>;
  }

  let { destination } = redirectInfo;


  if (slug === "deskthing" || slug === "desktop") {
    const path = slugArray.slice(1).join("/");
    destination += path ? `/${path}` : "";
  }

  redirect(destination);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-neutral-50">
      <h1 className="text-4xl mb-4">Redirecting...</h1>
      <p>You are being redirected. If nothing happens, click below:</p>
      <a href={destination} className="mt-4 text-green-400 hover:underline">
        Go to {destination}
      </a>
    </div>
  );
}
