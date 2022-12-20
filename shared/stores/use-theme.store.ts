import create from 'zustand';

// Models
import { Theme } from '../types/shared.types';

// Models
export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: Theme.Dark,
  setTheme: (theme: Theme) => {
    set({ theme });
    document.documentElement.setAttribute('class', theme);
  },
}));
