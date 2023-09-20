import { StateCreator } from "zustand";

export interface ThemeSlice {
  theme: string;
  setTheme: (theme: string) => void;
  openedThemeBar: boolean;
  toggleThemeBar: () => void;
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  theme: "github-dark",
  setTheme: (theme: string) => {
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
    set((state) => ({
      ...state,
      theme,
    }));
  },
  openedThemeBar: false,
  toggleThemeBar: () => {
    set((state) => ({
      ...state,
      openedThemeBar: !state.openedThemeBar,
    }));
  },
});
