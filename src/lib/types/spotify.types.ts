export enum SpotifyType {
  Artist = 'artist',
}

export interface SpotifyArtist {
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface SpotifyExternalUrls {
  spotify: string;
}

interface SpotifyFollowers {
  href: string;
  total: number;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifySearchItem {
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: SpotifyType;
  uri: string;
}

export interface SpotifySearchResponse {
  artists: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: SpotifySearchItem[];
  };
}

export interface SpotifyUser {
  display_name: string;
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  href: string;
  id: string;
  images: SpotifyImage[];
  type: string;
  uri: string;
}
