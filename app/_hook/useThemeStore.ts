import { createThemeSlice, ThemeSlice } from "./../_slices/theme-slice";
import { create } from "zustand";

export const useStore = create<ThemeSlice>((...a) => ({
  ...createThemeSlice(...a),
}));

export function useThemeStore() {
  const { openedThemeBar, toggleThemeBar } = useStore((state) => ({
    openedThemeBar: state.openedThemeBar,
    toggleThemeBar: state.toggleThemeBar,
  }));

  return {
    openedThemeBar,
    toggleThemeBar,
  };
}
