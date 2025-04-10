'use client';

import { useCallback } from 'react';

// Types
import { Artist, DBArtist } from '@/app/[locale]/artists/types/artists.types';

// Utils
import db from '@/lib/utils/db';

export function useArtistsDatabase() {
  const getArtists = useCallback(async (): Promise<DBArtist[] | undefined> => {
    try {
      if (db) return await db.artists.toArray();
    } catch (error) {
      console.error('Failed to get artists:', error);
      return undefined;
    }
  }, []);

  const removeArtist = useCallback(async (id: string): Promise<string> => {
    try {
      await db.artists.where({ id }).delete();
      return id;
    } catch (error) {
      console.error('Failed to remove artist from db:', error);
      throw error;
    }
  }, []);

  const saveArtist = useCallback(async (artist: Artist): Promise<string> => {
    if (!artist?.id) {
      throw new Error('Invalid artist data');
    }

    // First save the artist to the database if not already saved
    const match = await db.artists.get(artist.id);

    if (match) {
      throw new Error('Artist already exist');
    }

    const dbArtist: DBArtist = {
      id: artist.id,
      createdAt: new Date().toISOString(),
      images: artist.images,
      name: artist.name,
      playedAt: null,
    };

    try {
      await db.artists.put(dbArtist);
      return dbArtist.id;
    } catch (error) {
      console.error('Failed to save artist:', error);
      throw error;
    }
  }, []);

  return {
    getArtists,
    removeArtist,
    saveArtist,
  };
}
