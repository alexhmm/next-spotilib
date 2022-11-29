import create from 'zustand';

// Types
import { UserProfile } from './user.types';

export interface UserState {
  profile: UserProfile | undefined;
  setProfile: (profile: UserProfile | undefined) => void;
}

export const useUserStore = create<UserState>((set) => ({
  profile: undefined,
  setProfile: (profile: UserProfile | undefined) => set({ profile }),
}));
