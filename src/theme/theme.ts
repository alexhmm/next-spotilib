'use client';

import { orange, red, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
    '3xl': true;
    '4xl': true;
    '5xl': true;
  }

  interface Palette {
    bg: {
      dialog: string;
      form: string;
      header: string;
      menu: string;
    };
  }

  interface PaletteOptions {
    bg: {
      dialog: string;
      form: string;
      header: string;
      menu: string;
    };
  }

  interface PaletteColor {
    dialog?: string;
    form?: string;
    header?: string;
    menu?: string;
  }

  interface SimplePaletteColorOptions {
    dialog?: string;
    form?: string;
    header?: string;
    menu?: string;
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
    '5xl': 3840,
  },
};

const error = {
  main: red[400],
};

const primary = {
  main: orange[400],
};

const secondary = {
  main: teal[400],
};

const typography = {
  fontFamily: montserrat.style.fontFamily,
};

// Create a theme instance.
export const darkTheme = createTheme({
  breakpoints,
  palette: {
    background: {
      paper: '#1f1f1f',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
    },
    bg: {
      dialog: '#232323',
      form: '#1f1f1f',
      header: '#1a1a1a',
      menu: '#232323',
    },
    error,
    mode: 'dark',
    primary,
    secondary,
  },
  typography,
});

export const lightTheme = createTheme({
  breakpoints,
  palette: {
    background: {
      default: '#eeeeee',
      paper: '#ffffff',
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
    },
    bg: {
      dialog: '#ffffff',
      form: '#f1f1f1',
      header: '#f6f6f6',
      menu: '#f6f6f6',
    },
    error,
    mode: 'light',
    primary,
    secondary,
  },
  typography,
});
