import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

// Define a blacklist
const blacklist = ["TheNordicGoat"];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const apiKey = process.env.BUYMEACOFFEE_API_KEY;

  if (!apiKey) {
    throw new Error("BUYMEACOFFEE_API_KEY environment variable is not set.");
  }

  let allSupporters: unknown[] = [];
  let nextPageUrl = "https://developers.buymeacoffee.com/api/v1/supporters";
  
  while (nextPageUrl) {
    const response = await fetch(nextPageUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Response("Failed to fetch supporters", { status: response.status });
    }

    const data = await response.json();
    allSupporters = allSupporters.concat(data.data);

    // Update nextPageUrl to the next page or null if no more pages
    nextPageUrl = data.next_page_url || null;
  }

  return json({ data: allSupporters });
};

export default function Supporters() {
  const { data: supporters } = useLoaderData();

  return (
    <div className="font-geist p-4 pt-20 max-w-screen min-h-screen bg-slate-800 flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold mb-6">Caffeine Addiction Enablers</h1>
      <ul className="space-y-4">
        {supporters && supporters.map((supporter: any) => {
          const isBlacklisted = blacklist.includes(supporter.payer_email) || blacklist.includes(supporter.payer_name);

          return (
            <li key={supporter.support_id} className="bg-white p-4 rounded shadow border-fuchsia-600 border-2">
              <div className="flex gap-3 items-center">
                <h2 className="text-xl font-semibold">{isBlacklisted ? 'Anonymous' : supporter.payer_name || 'Anonymous'}</h2>-<p className="text-fuchsia-600 font-semibold">{supporter.support_coffees} Cup{supporter.support_coffees > 1 ? 's' : ''} of Coffee</p>
              </div>
              <p>{isBlacklisted ? 'No message' : supporter.support_note || 'No message'}</p>
              <p className="text-gray-500 font-geistMono"><i>Supported on: {supporter.support_created_on}</i></p>
            </li>
          );
        })}
      </ul>
      <div className="group border-fuchsia-600 mt-10 border p-5 bg-white">
        <p>Thanks to all of these amazing people I am able to pull development nights well into the AMs! Whether or not that is a good thing is up to you to decide.</p>
        <p>It feels wrong to ask for money, but if you feel like supporting this venture you can donate <a
            className="hover:text-zinc-500 rounded-xl text-fuchsia-600"
            target="_blank"
            href="https://buymeacoffee.com/riprod"
            rel="noreferrer"
          >
            here
          </a></p>
      </div>
    </div>
  );
}
