'use client';

import { Box, useTheme } from '@mui/material';

// Components
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

// Styles
import styles from '../../app/RootLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <Box
      className={styles['root-layout-page']}
      sx={{
        background: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.default}) fixed`,
      }}
    >
      <Header />
      <div className={styles['root-layout-page-content']}>
        <div className={styles['root-layout-page-content-sidebar']}>
          <Sidebar />
          <Box
            className={styles['root-layout-page-content-sidebar-info']}
            sx={{ color: 'text.secondary' }}
          >
            © 2022 Spotilib
          </Box>
        </div>
        <div className={styles['root-layout-page-content-main']}>
          {children}
        </div>
      </div>
    </Box>
  );
};

export default ContentWrapper;
