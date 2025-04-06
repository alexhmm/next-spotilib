import { SpotifyArtist } from '@/lib/types/spotify.types';

export enum ArtistCardType {
  List = 'LIST',
  Search = 'SEARCH',
}

export type ArtistDBProps = {
  createdAt: string;
  playedAt: string | null;
};

export type Artist = Pick<SpotifyArtist, 'id' | 'images' | 'name'>;

export type DBArtist = Artist & ArtistDBProps;
