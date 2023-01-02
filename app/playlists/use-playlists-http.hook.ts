import { useSession } from 'next-auth/react';

// Hooks
import { useFetch } from '../../shared/hooks/use-fetch.hook';

// Types
import { SpotilibSession } from '../../shared/types/auth.types';
import { PlaylistsGetParams, PlaylistsGetResponse } from './playlists.types';

export const usePlaylistsHttp = () => {
  const { fetchData } = useFetch();
  const { data: session, status } = useSession();

  /**
   * GET Contacts.
   * @returns Contacts
   */
  const playlistsGet = async (
    params: PlaylistsGetParams
  ): Promise<PlaylistsGetResponse | undefined> => {
    const spotilibSession = session as SpotilibSession;
    if (
      spotilibSession?.token?.providerAccountId &&
      status === 'authenticated'
    ) {
      return await fetchData(
        `users/${spotilibSession.token?.providerAccountId}/playlists`,
        {
          params: new URLSearchParams({
            limit: params.limit.toString(),
            offset: params.offset.toString(),
          }),
        }
      );
    }
    return undefined;
  };

  return {
    playlistsGet,
  };
};
