// Types
import { User as IUser } from '@/lib/types/spotify/user.types';

// Utils
import { getSpotifyData } from '@/lib/utils/spotify.utils';

export default async function User() {
  try {
    const data = await getSpotifyData<IUser>('/me');

    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Your Top Tracks</h2>
        <div className="space-y-4">
          <div>{data?.display_name}</div>
          {data?.images && data?.images.length > 0 && (
            <img
              className="aspect-square object-cover rounded-full w-16"
              src={data?.images[0].url || '/placeholder.svg'}
              alt={`${data?.display_name} user image`}
            />
          )}
          {/* {data.items.map((track: any) => (
            <div
              key={track.id}
              className="flex items-center gap-4 p-3 bg-zinc-900 rounded-lg"
            >
              <Image
                src={track.album.images[0].url || '/placeholder.svg'}
                alt={track.album.name}
                width={60}
                height={60}
                className="rounded-md"
              />
              <div>
                <h3 className="font-medium">{track.name}</h3>
                <p className="text-sm text-zinc-400">
                  {track.artists.map((a: any) => a.name).join(', ')}
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div className="text-red-500">Error loading Spotify data</div>;
  }
}
