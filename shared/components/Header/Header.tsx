'use client';

import { memo } from 'react';
import { Box } from '@mui/material';

// Stores
import { useThemeStore } from '../../stores/use-theme.store';
import { useUserStore } from '../../../app/user/use-user.store';

// Styles
import styles from './Header.module.scss';

// Types
import { Theme } from '../../types/shared.types';

const Header = () => {
  // Theme store state
  const [theme, setTheme] = useThemeStore((state) => [
    state.theme,
    state.setTheme,
  ]);

  // User store state
  const [profile] = useUserStore((state) => [state.profile]);

  return (
    <Box className={styles['header']} sx={{ borderColor: 'border.app' }}>
      <div className={styles['header-content']}>
        <div className={styles['header-content-logo']}>Spotilib</div>
        <div className={styles['header-content-nav']}>
          <button
            onClick={() =>
              setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
            }
          >
            Toggle
          </button>
          {profile && <div>{profile.display_name}</div>}
        </div>
      </div>
    </Box>
  );
};

export default memo(Header);
