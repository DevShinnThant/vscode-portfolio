"use client";

import { useThemeStore } from "@/lib/hooks/useThemeStore";
import DefaultHeader from "./DefaultHeader";
import ThemeBar from "./ThemeBar";

const Header = () => {
  const { openedThemeBar } = useThemeStore();

  return <>{openedThemeBar ? <ThemeBar /> : <DefaultHeader />}</>;
};

export default Header;
