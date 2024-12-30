export async function fetchDiscordMemberCount(): Promise<number> {
  const url = "https://discord.com/api/v10/invites/qWbSwzWJ4e?with_counts=true";

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error(`Failed to fetch member count: ${response.statusText}`);
    }

    const data = await response.json();
    return data.approximate_member_count ?? 0; // Return 0 if the field is missing
  } catch (error) {
    console.error("Error fetching Discord member count:", error);
    return 0; // Return 0 in case of an error
  }
}