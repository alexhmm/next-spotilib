// Components
import { ArtistCard } from '../../artists/components/ArtistCard';

// Types
import { ArtistCardType } from '../../artists/types/artists.types';
import { SpotifySearchResponse } from '@/lib/types/spotify.types';

// Utils
import { getSpotifyData } from '@/lib/utils/spotify.utils';

export default async function Search({
  params,
}: {
  params: Promise<{ q: string }>;
}) {
  const { q } = await params;
  const search = await getSpotifyData<SpotifySearchResponse>(
    `/search?q=${q}&type=artist`
  );

  return (
    <main className="w-full">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 3xl:grid-cols-8">
        {search?.artists.items.map((artist) => (
          <ArtistCard
            key={artist.id}
            artist={{
              id: artist.id,
              images: artist.images,
              name: artist.name,
            }}
            type={ArtistCardType.Search}
          />
        ))}
      </div>
    </main>
  );
}
