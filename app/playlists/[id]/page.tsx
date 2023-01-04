import Image from 'next/image';
import { unstable_getServerSession } from 'next-auth/next';

// Components
import PlaylistTrack from '../components/PlaylistTrack/PlaylistTrack';

// Router
import ProtectedRoute from '../../../shared/router/ProtectedRoute';

// Styles
import styles from './PlaylistPage.module.scss';

// Types
import { SpotilibSession } from '../../../shared/types/auth.types';
import { Playlist } from '../playlists.types';

// UI
import H2 from '../../../shared/ui/H2/H2';

// Utils
import { authOptions } from '../../../pages/api/auth/[...nextauth]';

export async function getPlaylist(id: string): Promise<Playlist | undefined> {
  console.log('getPlaylist', id);
  const session: SpotilibSession | null = await unstable_getServerSession(
    authOptions
  );

  if (session?.token?.accessToken) {
    const url = `https://api.spotify.com/v1/playlists/${id}?offset=100`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.token?.accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return res.json();
  } else {
    return Promise.resolve(undefined);
  }
}

export default async function PlaylistPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getPlaylist(id);
  //   console.log('playlist tracks', data?.tracks.items.length);

  return (
    <ProtectedRoute>
      <div className={styles['playlist-page']}>
        {data && (
          <>
            <div className={styles['playlist-page-header']}>
              <div className={styles['playlist-page-header-img']}>
                <Image
                  alt={`Playlist ${data.name}`}
                  height={192}
                  src={data.images[0].url}
                  width={192}
                />
              </div>
              <div className={styles['playlist-page-header-info']}>
                <div className={styles['playlist-page-header-info-meta']}>
                  <div
                    className={styles['playlist-page-header-info-meta-type']}
                  >
                    PLAYLIST
                  </div>
                  <div
                    className={styles['playlist-page-header-info-meta-public']}
                  >
                    {data.public ? 'Public' : 'Private'}
                  </div>
                </div>
                <H2>{data?.name}</H2>
                <div
                  className={styles['playlist-page-header-info-description']}
                >
                  {data?.description}
                </div>
                <div className={styles['playlist-page-header-info-tracks']}>
                  {data?.owner.display_name} • {data.tracks.total} Tracks
                </div>
              </div>
            </div>
            <div className={styles['playlist-page-content']}>
              {data.tracks.items.map((track) => (
                <PlaylistTrack key={track.track.id} track={track} />
              ))}
            </div>
          </>
        )}
      </div>
    </ProtectedRoute>
  );
}
