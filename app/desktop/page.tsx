'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function DesktopRedirect() {
  const searchParams = useSearchParams();

  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    let path = searchParams.get('path');

    // Create a new URLSearchParams object
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('path');

    const redirectUrl = `deskthing://${path}?${newParams.toString()}`;

    // Use window.location for client-side redirect
    window.location.href = redirectUrl;
    setTimeout(() => {
      window.location.href = '/';
    }, 5000);
  }, [searchParams]);

  // Render nothing while redirecting
  return (
    <div className="h-full w-full flex align-center justify-center">
      <div className="text-xl">Launching your DeskThing server</div>
    </div>
  );
}
