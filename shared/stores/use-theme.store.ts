import create from 'zustand';

// Models
import { Theme } from '../types/shared.types';

// Models
export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/**
 * Searches string tag in Theme enum
 * @param theme Theme string
 * @returns Valid Theme enum
 */
const getThemeEnumByStringVal = (theme: string) => {
  let foundTheme = Object.entries(Theme).find((enumKV) => enumKV[0] === theme);
  return foundTheme && foundTheme[1] ? foundTheme[1] : Theme.Light;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getThemeEnumByStringVal(localStorage.getItem('app:theme') || 'light'),
  setTheme: (theme: Theme) => {
    set({ theme });
    document.documentElement.setAttribute('class', theme);
    localStorage.setItem('app:theme', theme);
  },
}));
