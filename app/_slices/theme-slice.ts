import { StateCreator } from "zustand";

export interface ThemeSlice {
  openedThemeBar: boolean;
  toggleThemeBar: () => void;
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  openedThemeBar: false,
  toggleThemeBar: () => {
    set((state) => ({
      ...state,
      openedThemeBar: !state.openedThemeBar,
    }));
  },
});
