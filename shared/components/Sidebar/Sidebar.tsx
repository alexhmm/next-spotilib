'use client';

import { memo, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useMutation } from 'react-query';
import { Box, Divider, useTheme } from '@mui/material';

// Hooks
import { useFetch } from '../../hooks/use-fetch.hook';
import { usePlaylists } from '../../../app/playlists/use-playlists.hook';
import { usePlaylistsHttp } from '../../../app/playlists/use-playlists-http.hook';

// Stores
import { usePlaylistsStore } from '../../../app/playlists/use-playlists.store';

// Styles
import styles from './Sidebar.module.scss';

// Types
import { SpotilibSession } from '../../types/auth.types';
import { PlaylistsGetParams } from '../../../app/playlists/playlists.types';

const Sidebar = () => {
  const { handleError, handleRetry } = useFetch();
  const { playlistsGetEffect } = usePlaylists();
  const { playlistsGet } = usePlaylistsHttp();
  const { data: session, status } = useSession();
  const theme = useTheme();

  // Playlists store state
  const [playlists] = usePlaylistsStore((state) => [state.playlists]);

  // ######### //
  // MUTATIONS //
  // ######### //

  // GET Playlists mutation
  const playlistsGetMutation = useMutation(
    (params: PlaylistsGetParams) => playlistsGet(params),
    {
      retry: (failureCount, error: any) => handleRetry(failureCount, error),
    }
  );

  // Set playlists data on mount
  useEffect(() => {
    if (playlistsGetMutation.data) {
      try {
        playlistsGetEffect({
          items: playlistsGetMutation.data.items,
          limit: playlistsGetMutation.data.limit,
          offset: playlistsGetMutation.data.offset,
          total: playlistsGetMutation.data.total,
        });
      } catch (error) {
        console.log('ERROR on getting playlists:', error);
      }
    }
    if (playlistsGetMutation.error) {
      const errRes = playlistsGetMutation.error?.response;
      if (errRes) {
        handleError(errRes.status);
      }
    }
  }, [playlistsGetMutation.data, playlistsGetMutation.error]);

  // ####### //
  // EFFECTS //
  // ####### //

  // Get playlists on mount
  useEffect(() => {
    const spotilibSession = session as SpotilibSession;
    if (spotilibSession?.token?.accessToken) {
      playlistsGetMutation.mutate({
        limit: 20,
        offset: 0,
      });
    }
  }, [session]);

  return (
    <Box className={styles['sidebar']} sx={{ backgroundColor: 'bg.sidebar' }}>
      <div className={styles['sidebar-nav']}>
        <Box
          className={styles['sidebar-nav-bg']}
          sx={{
            background: `linear-gradient(${theme.palette.bg.sidebar}, rgba(0,0,0,0))`,
          }}
        />
        <div className={styles['sidebar-nav-links']}>
          <Link className={styles['sidebar-item']} href="/">
            Home
          </Link>
          <Link className={styles['sidebar-item']} href="/notes">
            Notes
          </Link>
        </div>
        <Divider
          className={styles['sidebar-nav-divider']}
          sx={{ color: 'border.app' }}
        />
      </div>
      <div className={styles['sidebar-content']}>
        <div className={styles['sidebar-content-playlists']}>
          {status === 'authenticated' && (
            <>
              {playlists &&
                playlists.items.length > 0 &&
                playlists.items.map((playlist) => (
                  <Link
                    key={playlist.id}
                    className={styles['sidebar-content-playlists-item']}
                    href={`/playlists/${playlist.id}`}
                  >
                    {playlist.name}
                  </Link>
                ))}
            </>
          )}
        </div>
        <div className={styles['sidebar-content-info']}>© 2022 Spotilib</div>
      </div>
    </Box>
  );
};

export default memo(Sidebar);
