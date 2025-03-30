import Dexie, { type Table } from 'dexie';

// Define artist types
export interface Artist {
  id: string;
  name: string;
  imageUrl?: string;
  genres?: string[];
  popularity?: number;
  followers?: number;
  savedAt: Date;
  // Add any other fields you want to store
}

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
  artists!: Table<Artist>;
  artistLists!: Table<ArtistList>;
  artistsInLists!: Table<ArtistInList>;

  constructor() {
    super('spotilib');

    // Define tables and indexes
    this.version(1).stores({
      artists: 'id, name, savedAt',
      artistLists: '++id, name, createdAt, updatedAt',
      artistsInLists: '++id, listId, artistId, addedAt',
    });
  }
}

// Create a singleton instance
const db = new SpotilibDatabase();

export default db;
