'use client';

import { memo } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { Box, Button } from '@mui/material';

// Stores
import { useThemeStore } from '../../stores/use-theme.store';

// Styles
import styles from './Header.module.scss';

// Types
import { Theme } from '../../types/shared.types';

const Header = () => {
  const { data: session, status } = useSession();

  // Theme store state
  const [theme, setTheme] = useThemeStore((state) => [
    state.theme,
    state.setTheme,
  ]);

  return (
    <div className={styles['header']}>
      <Box
        className={styles['header-logo']}
        sx={{ backgroundColor: 'bg.sidebar' }}
      >
        Spotilib
      </Box>
      <div className={styles['header-info']}>
        {status !== 'loading' && (
          <Button
            onClick={() =>
              setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
            }
          >
            Toggle Theme
          </Button>
        )}
        {status === 'authenticated' && (
          <Button onClick={() => signOut()}>{session.user?.name}</Button>
        )}
      </div>
    </div>
  );
};

export default memo(Header);
