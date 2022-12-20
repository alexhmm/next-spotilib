'use client';

import { Box, useTheme } from '@mui/material';

import styles from '../../app/RootLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const BackgroundProvider = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <Box
      className={styles['root-layout-page']}
      sx={{
        background: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.default}) fixed`,
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundProvider;
