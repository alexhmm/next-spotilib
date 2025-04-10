'use client';

import { FC, useCallback } from 'react';
import { useTranslations } from 'next-intl';

// Hooks
import { useArtistsDatabase } from '@/lib/hooks/use-artists-db';

// Icons
import { DotsVerticalIcon } from '@radix-ui/react-icons';

// UI
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/ui/DropdownMenu';

// Types
import { Artist, ArtistCardType } from '../types/artists.types';

type ArtistMenuProps = {
  artist: Artist;
  type: ArtistCardType;
};

const ArtistMenu: FC<ArtistMenuProps> = (props) => {
  const { removeArtist, saveArtist } = useArtistsDatabase();
  const t = useTranslations();

  const onRemoveArtist = useCallback(() => {
    removeArtist(props.artist.id);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DotsVerticalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {props.type === ArtistCardType.List && (
          <DropdownMenuItem onClick={onRemoveArtist}>
            {t('artists.card.menu.remove')}
          </DropdownMenuItem>
        )}
        {props.type === ArtistCardType.Search && (
          <DropdownMenuItem onClick={() => saveArtist(props.artist)}>
            {t('artists.card.menu.add')}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ArtistMenu;
