'use client';

import { CSSProperties } from 'react';
import { red, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Outfit } from 'next/font/google';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import '@mui/material/Typography';

const outfit = Outfit({
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

  interface TypographyVariants {
    body3: CSSProperties;
    title: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: CSSProperties;
    title: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    title: true;
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
  main: '#208df3',
};

const secondary = {
  main: teal[400],
};

const typography: TypographyOptions = {
  fontFamily: outfit.style.fontFamily,

  // poster: {
  //   color: 'red',
  //   fontWeight: 900,
  // },
  body3: {
    fontSize: 30,
    color: '#ff0000',
  },
  title: {
    fontSize: 16,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
};

// Create a theme instance.
export const darkTheme = createTheme({
  breakpoints,
  palette: {
    background: {
      paper: '#1f1f1f',
      default: '#1f1f1f',
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
