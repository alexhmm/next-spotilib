import { FC } from 'react';
import { Link } from '@/navigation';

// Components
import AvatarFallback from '@/lib/components/AvatarFallback/AvatarFallback';
import ArtistMenu from './ArtistMenu';

// Types
import { Artist, ArtistCardType } from '../types/artists.types';
import { SpotifyType } from '@/lib/types/spotify.types';

type ArtistCardProps = {
  artist: Artist;
  type: ArtistCardType;
};

export const ArtistCard: FC<ArtistCardProps> = (props) => {
  return (
    <Link
      className="flex flex-col gap-2 group h-fit items-center justify-center w-full p-4 relative rounded-md transition-colors truncate hover:bg-card hover:text-accent-foreground lg:gap-4"
      href={`https://open.spotify.com/artist/${props.artist.id}`}
      target="_blank"
    >
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100">
        <ArtistMenu artist={props.artist} type={props.type} />
      </div>
      {props.artist.images[0] && props.artist.images[0].url ? (
        <img
          className="aspect-square object-cover rounded-full w-5/6"
          src={props.artist.images[0].url}
        />
      ) : (
        <AvatarFallback type={SpotifyType.Artist} />
      )}
      <span className="font-bold text-center truncate w-full">
        {props.artist.name}
      </span>
    </Link>
  );
};
