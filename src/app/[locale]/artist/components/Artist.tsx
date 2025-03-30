import { AvatarFallback } from '@/lib/components/AvatarFallback/AvatarFallback';
import { Artist as IArtist } from '@/lib/types/db.types';
import { SpotifyType } from '@/lib/types/spotify.types';
import { Button } from '@/lib/ui/Button';
import { FC } from 'react';

type ArtistProps = {
  artist: IArtist;
};

export const Artist: FC<ArtistProps> = (props) => {
  return (
    <Button
      className="flex flex-col gap-2 h-fit justify-between w-full p-4 truncate"
      variant="card"
    >
      {props.artist.images[0] && props.artist.images[0].url ? (
        <img
          className="aspect-square object-cover rounded-full w-5/6"
          src={props.artist.images[0].url}
        />
      ) : (
        <AvatarFallback type={SpotifyType.Artist} />
      )}
      <span className="font-bold truncate">{props.artist.name}</span>
    </Button>
  );
};
