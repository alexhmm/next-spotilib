'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

// Components
import { ArtistCard } from './components/ArtistCard';

// Hooks
import { useArtistDatabase } from '@/lib/hooks/use-artist-db';

// Types
import { Artist, ArtistCardType } from './types/artists.types';

// UI
import H2 from '@/lib/ui/H2';

const Artists = () => {
  const { isReady, getArtists } = useArtistDatabase();
  const t = useTranslations();

  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    isReady && loadArtists();
  }, [isReady]);

  const loadArtists = async () => {
    const loadedArtists = await getArtists();
    setArtists(loadedArtists ?? []);
  };

  return (
    <main className="w-full">
      <H2>{t('artists.title')}</H2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 3xl:grid-cols-8">
        {artists.map((artist) => (
          <ArtistCard
            artist={artist}
            key={artist.id}
            type={ArtistCardType.List}
            onUpdate={loadArtists}
          />
        ))}
      </div>
    </main>
  );
};

export default Artists;
