import { getAuthSession } from '@/auth';

export async function getSpotifyData<T>(url: string): Promise<T | undefined> {
  const session = await getAuthSession();

  if (!session?.accessToken) {
    // throw new Error('No access token available');
    return;
  }

  const response = await fetch(`https://api.spotify.com/v1${url}`, {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });

  if (!response.ok) {
    // throw new Error(`Spotify API error: ${response.statusText}`);
  }

  return response.json();
}
