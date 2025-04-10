'use client';

import { useEffect, useState } from 'react';
import Dexie from 'dexie';

// Hooks
import { useDatabase } from './use-db';

/**
 * A hook that subscribes to Dexie query results and updates when the database changes
 * @param queryFunction A function that returns a Promise with the query result
 * @returns The current query result
 */
export function useLiveQuery<T>(
  queryFunction: () => Promise<T>
): T | undefined {
  const { isDatabaseReady } = useDatabase();

  const [result, setResult] = useState<T>();

  useEffect(() => {
    let isMounted = true;

    // Function to execute the query and update state
    const fetchData = async () => {
      try {
        const data = await queryFunction();
        if (isMounted) {
          setResult(data);
        }
      } catch (error) {
        console.error('Error in live query:', error);
      }
    };

    if (isDatabaseReady) {
      // Initial fetch
      fetchData();
    }

    // Set up subscription to database changes
    const subscription = Dexie.liveQuery(queryFunction).subscribe(
      // onNext callback
      (data) => {
        if (isMounted) {
          setResult(data);
        }
      },
      // onError callback
      (error) => {
        console.error('Subscription error:', error);
      }
    );

    // Clean up subscription when component unmounts
    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [isDatabaseReady]);

  return result;
}
