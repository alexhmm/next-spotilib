import Dexie, { type Table } from 'dexie';

// Types
import { DBArtist } from '@/app/[locale]/artists/types/artists.types';

export interface ArtistList {
  id?: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ArtistInList {
  id?: number;
  listId: number;
  artistId: string;
  addedAt: Date;
}

// Define the database
class SpotilibDatabase extends Dexie {
  artists!: Table<DBArtist>;
  artistLists!: Table<ArtistList>;
  artistsInLists!: Table<ArtistInList>;

  constructor() {
    super('spotilib');

    // Define tables and indexes
    this.version(1).stores({
      artists: 'id, createdAt, images, name, playedAt',
    });
  }
}

// Create a singleton instance
const db = new SpotilibDatabase();

export default db;
