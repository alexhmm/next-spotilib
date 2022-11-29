import create from 'zustand';

// Types
import { Token } from './auth.types';

export interface AuthState {
  token: Token | undefined;
  setToken: (token: Token | undefined) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('frontend:token')
    ? JSON.parse(localStorage.getItem('frontend:token') ?? '')
    : undefined,
  setToken: (token: Token | undefined) => {
    if (token) {
      localStorage.setItem('frontend:accessToken', JSON.stringify(token));
      set((state) => ({
        ...state,
        token: {
          access_token: token.access_token,
          expires_in: token.expires_in,
          refresh_token: token.refresh_token
            ? token.refresh_token
            : state.token?.refresh_token
            ? state.token?.refresh_token
            : '',
          scope: token.scope,
          token_type: token.token_type,
        },
      }));
    } else {
      localStorage.removeItem('frontend:accessToken');
      set({ token: undefined });
    }
  },
}));
