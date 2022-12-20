'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Box, Divider, useTheme } from '@mui/material';

// Styles
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const { status } = useSession();
  const theme = useTheme();

  return (
    <Box className={styles['sidebar']} sx={{ backgroundColor: 'bg.sidebar' }}>
      <div className={styles['sidebar-nav']}>
        <Box
          className={styles['sidebar-nav-bg']}
          sx={{
            background: `linear-gradient(${theme.palette.bg.sidebar}, rgba(0,0,0,0))`,
          }}
        />
        <div className={styles['sidebar-nav-links']}>
          <Link className={styles['sidebar-item']} href="/">
            Home
          </Link>
          <Link className={styles['sidebar-item']} href="/notes">
            Notes
          </Link>
        </div>
        <Divider
          className={styles['sidebar-nav-divider']}
          sx={{ color: 'border.app' }}
        />
      </div>
      <div className={styles['sidebar-content']}>
        {status === 'authenticated' && (
          <>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
          </>
        )}
        <div className={styles['sidebar-content-info']}>© 2022 Spotilib</div>
      </div>
    </Box>
  );
};

export default memo(Sidebar);
