import { SpotifyArtist } from './spotify.types';

export type Artist = Pick<SpotifyArtist, 'href' | 'id' | 'images' | 'name'>;
