'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';

// Hooks
import { useTheme } from '../hooks/use-theme.hook';

type Props = {
  children: React.ReactNode;
};

const ThemeWrapper = ({ children }: Props) => {
  const { activeThemeGet } = useTheme();

  return (
    <ThemeProvider theme={activeThemeGet()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
