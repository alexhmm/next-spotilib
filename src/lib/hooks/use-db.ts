import { useEffect, useState } from 'react';

// Utils
import db from '@/lib/utils/db';

export const useDatabase = () => {
  const [isDatabaseReady, setIsDatabaseReady] = useState(false);

  useEffect(() => {
    // Open the database
    db.open()
      .then(() => {
        setIsDatabaseReady(true);
      })
      .catch((err) => {
        console.error('Failed to open database:', err);
        // setError(err);
      });

    // Clean up function to properly close the database when component unmounts
    return () => {
      if (db && !db.isOpen()) {
        db.close();
      }
    };
  }, []); // Empty dependency array ensures this runs once

  return {
    isDatabaseReady,
  };
};
