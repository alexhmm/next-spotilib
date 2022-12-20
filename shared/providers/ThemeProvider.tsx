'use client';

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { memo } from 'react';

// Hooks
import { useTheme } from '../hooks/use-theme.hook';

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const { activeThemeGet } = useTheme();

  return (
    <MuiThemeProvider theme={activeThemeGet()}>
      <StyledEngineProvider>
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </MuiThemeProvider>
  );
};

export default memo(ThemeProvider);
