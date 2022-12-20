import { createTheme, Theme } from '@mui/material/styles';

// Stores
import { useThemeStore } from '../stores/use-theme.store';

// Types
import { Theme as ETheme } from '../types/shared.types';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
    '3xl': true;
    '4xl': true;
  }

  interface PaletteColor {
    sidebar?: string;
  }

  interface Palette {
    bg: {
      sidebar: string;
    };
  }

  interface PaletteOptions {
    bg: {
      sidebar: string;
    };
    border: {
      app: string;
    };
    // orange: {
    //   light: string;
    //   main: string;
    // };
  }

  interface Theme {
    bg: {
      sidebar: React.CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    bg: {
      sidebar: React.CSSProperties['color'];
    };
  }

  interface PaletteColor {
    sidebar?: string;
  }

  interface SimplePaletteColorOptions {
    sidebar?: string;
  }
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    '3xl': 1920,
    '4xl': 2560,
  },
};

const error = {
  light: '#f5433626',
  main: '#f54336',
};

const primary = {
  dark: '#0ABE33',
  light: '#62E390',
  main: '#1ED760',
};

const secondary = {
  main: '#EB5C0B',
};

// const success = {
//   light: '#48d55e26',
//   main: '#48d55e',
// };

const warning = {
  light: '#feab2926',
  main: '#feab29',
};

const typography = {
  // box: {
  //   fontSize: 14,
  fontFamily: "'Montserrat', 'sans-serif'",
  // fontSize: 14,
};

export const themeDark = createTheme({
  breakpoints,
  bg: {
    sidebar: '#0e0e0e',
  },
  palette: {
    background: {
      default: '#171717',
      paper: '#202020',
    },
    bg: {
      sidebar: '#0e0e0e',
    },
    border: {
      app: '#3a3a3a',
    },
    error,
    mode: 'dark',
    // orange,
    primary: primary,
    secondary,
    // success,
    warning,
  },
  typography,
});

export const themeLight = createTheme({
  breakpoints,
  bg: {
    sidebar: '#fafafa',
  },
  palette: {
    background: {
      default: '#fcfcfc',
    },
    bg: {
      sidebar: '#fafafa',
    },
    border: {
      app: '#eaeaea',
    },
    error,
    mode: 'light',
    // orange,
    primary: primary,
    secondary,
    // success,
    // text: {
    //   primary: '#444d58',
    //   secondary: '#8ea3b6',
    // },
    warning,
  },
  typography,
});

export const useTheme = () => {
  // Theme store state
  const [theme] = useThemeStore((state) => [state.theme]);

  /**
   * Returns active mui theme.
   * @returns Active MUI theme
   */
  const activeThemeGet = (): Theme => {
    switch (theme) {
      case ETheme.Dark:
        return themeDark;
      default:
        return themeLight;
    }
  };

  return {
    activeThemeGet,
  };
};
