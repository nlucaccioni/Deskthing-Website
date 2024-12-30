import { useParams, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { IconCarThing } from "../assets/icons";

export default function Index() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params["*"]) {
      setLoading(true);
      const args = searchParams.toString();
      const deskthingUrl = `deskthing://${params["*"]}${
        args ? `?${args}` : ""
      }`;

      // Attempt to open the deskthing:// URL
      window.location.href = deskthingUrl;

      // Close the webpage after a short delay
      setTimeout(() => {
        window.close();
      }, 3000);
    }
  }, [params, searchParams]);

  if (loading) {
    return (
      <div>
      <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
        <h1 className="w-full flex items-center justify-center text-4xl font-semibold">Opening {params["*"]}{searchParams.size > 0 && '?' + searchParams.toString()}</h1>
        <IconCarThing className="stroke-white w-full h-full"  />
      </div>
    </div>
    );
  }

  return (
    <div>
      <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
        <h1 className="w-full flex items-center justify-center text-4xl font-semibold">Waiting For Command...</h1>
        <IconCarThing className="stroke-white w-full h-full"  />
      </div>
    </div>
  );
}
