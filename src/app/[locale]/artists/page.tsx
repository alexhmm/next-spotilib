'use client';

import { useTranslations } from 'next-intl';

// Components
import { ArtistCard } from './components/ArtistCard';

// Hooks
import { useDatabase } from '@/lib/hooks/use-db';
import { useLiveQuery } from '@/lib/hooks/use-live-query';

// Types
import { ArtistCardType } from './types/artists.types';

// UI
import { H2 } from '@/lib/ui/H2';
import { LoadingSpinner } from '@/lib/ui/LoadingSpinner';

// Utils
import db from '@/lib/utils/db';

const Artists = () => {
  const { isDatabaseReady } = useDatabase();
  const t = useTranslations();

  const artists = useLiveQuery(() => db.artists.toArray());

  return (
    <main className="w-full">
      <H2>{t('artists.title')}</H2>
      {!isDatabaseReady && <LoadingSpinner />}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 3xl:grid-cols-8">
        {artists?.map((artist) => (
          <ArtistCard
            artist={artist}
            key={artist.id}
            type={ArtistCardType.List}
          />
        ))}
      </div>
    </main>
  );
};

export default Artists;
