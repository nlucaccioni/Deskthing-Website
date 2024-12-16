export async function fetchServerReleases(): Promise<Array<{
  version: string;
  releaseDate: string;
  releaseNotes: string;
  rawFiles: Array<{
    name: string;
    url: string;
  }>;
  platforms: {
    linuxDeb?: string;
    linuxAppImage?: string;
    macArm64?: string;
    macX64?: string;
    raspberry?: string;
    windows?: string;
  };
}>> {
  const url: string = `https://api.github.com/repos/itsriprod/deskthing/releases`;

  try {
    const response: Response = await fetch(url, {
      next: { revalidate: 300 }, // ISR: revalidate every 5 minutes
    });

    //Rate limit debugging
    // const rateLimitRemaining: string | null = response.headers.get('X-RateLimit-Remaining');
    // const rateLimitReset: string | null = response.headers.get('X-RateLimit-Reset');
    // console.log(
    //   'Rate Limit Remaining:',
    //   rateLimitRemaining,
    //   'Rate Limit Reset Time:',
    //   new Date(parseInt(rateLimitReset as string) * 1000).toISOString()
    // );

    if (!response.ok) {
      throw new Error(`Error fetching releases: ${response.statusText}`);
    }

    const releases: Array<any> = await response.json();
    
    // Filter out releases with no valid assets and map them into the required format
    return releases
      .map((release: any) => {
        const assets: Array<any> = release.assets.filter((asset: any) =>
          asset.name.toLowerCase().includes("deskthing")
        );

        // Return null or undefined to indicate no valid data found
        if (assets.length === 0) return null;

        const rawFiles: Array<{ name: string; url: string }> = assets.map((asset: any) => ({
          name: asset.name,
          url: asset.browser_download_url,
        }));

        return {
          version: release.tag_name,
          releaseDate: release.published_at,
          releaseNotes: release.body,
          rawFiles,
          platforms: {
            linuxDeb: assets.find(
              (asset: any) => asset.name.includes("amd64") && asset.name.endsWith(".deb")
            )?.browser_download_url,
            linuxAppImage: assets.find(
              (asset: any) =>
                asset.name.includes("linux") && asset.name.endsWith(".AppImage")
            )?.browser_download_url,
            macArm64: assets.find((asset: any) => asset.name.includes("mac_arm64") || asset.name.includes("mac-arm64"))
              ?.browser_download_url,
            macX64: assets.find((asset: any) => asset.name.includes("mac_x64") || asset.name.includes("mac-x64"))
              ?.browser_download_url,
            raspberry: assets.find((asset: any) => asset.name.includes("raspberry"))
              ?.browser_download_url,
            windows: assets.find((asset: any) => asset.name.includes("win"))
              ?.browser_download_url,
          },
        };
      })
      .filter((release: any) => release !== null) // Filter out null values from the array
      .map((release: any) => {
        // Ensure all fields are strings or optional as required by the type
        return {
          ...release,
          version: String(release.version),
          releaseDate: String(release.releaseDate),
          releaseNotes: String(release.releaseNotes),
          rawFiles: release.rawFiles.map((file: any) => ({
            ...file,
            name: String(file.name),
            url: String(file.url),
          })),
          platforms: Object.fromEntries(
            Object.entries(release.platforms).map(([key, value]) => [
              key,
              value ? String(value) : undefined,
            ])
          ),
        };
      });
  } catch (error) {
    console.error(error);
    return [];
  }
}
