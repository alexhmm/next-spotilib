import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

const useSpotify = () => {
  const { data: session, status, update } = useSession();

  const [token, setToken] = useState<string | null>(null);

  // Set token by authenticated status
  useEffect(() => {
    if (status === 'authenticated' && session?.accessToken) {
      setToken(session.accessToken);
    } else if (status === 'authenticated' && !session?.accessToken) {
      setToken(null);
      // Update the session on authenticated status to get session access token
      update();
    } else if (status === 'unauthenticated') {
      setToken(null);
    }
  }, [session?.accessToken, status]);

  const getSpotifyData = useCallback(
    async <T>(url: string): Promise<T | undefined> => {
      if (!token) {
        return undefined;
      }

      const response = await fetch(`https://api.spotify.com/v1${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Spotify API error: ${response.statusText}`);
      }

      return response.json();
    },
    [token]
  );

  return {
    getSpotifyData,
    token,
  };
};

export default useSpotify;
