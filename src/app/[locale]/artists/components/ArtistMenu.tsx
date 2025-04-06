'use client';

import { FC, useCallback } from 'react';

// Hooks
import { useArtistDatabase } from '@/lib/hooks/use-artist-db';

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
  onUpdate?: () => void;
};

const ArtistMenu: FC<ArtistMenuProps> = (props) => {
  const { removeArtist, saveArtist } = useArtistDatabase();

  const onRemoveArtist = useCallback(() => {
    removeArtist(props.artist.id);
    props.onUpdate && props.onUpdate();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DotsVerticalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {props.type === ArtistCardType.List && (
          <DropdownMenuItem onClick={onRemoveArtist}>
            Aus Bibliothek entfernen
          </DropdownMenuItem>
        )}
        {props.type === ArtistCardType.Search && (
          <DropdownMenuItem onClick={() => saveArtist(props.artist)}>
            Zur Bibliothek hinzufügen
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ArtistMenu;
