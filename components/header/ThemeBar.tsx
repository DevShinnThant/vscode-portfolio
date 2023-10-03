"use client";

// links
import { themeItems } from "@/lib/tabs";

// hooks
import { useThemeStore } from "@/lib/hooks/useThemeStore";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeBar() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { toggleThemeBar, openedThemeBar, setTheme, theme } = useThemeStore();

  const [themeList, setThemeList] = useState(themeItems || []);

  const onSearchChange = () => {
    const query = inputRef?.current?.value;
    if (query) {
      setThemeList(
        themeItems.filter(
          (item) => query?.toLocaleLowerCase() == item.label.toLocaleLowerCase()
        )
      );
    } else {
      setThemeList(themeItems);
    }
  };

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className="w-full h-[30px] bg-title flex items-center justify-center text-white text-[0.85rem] border-b border-[#191d20] py-[4px]">
      <div className="w-[40%] relative">
        <input
          onChange={() => onSearchChange()}
          ref={inputRef}
          placeholder="Select Color Theme"
          className="w-full z-20 rounded-sm bg-sidebar border border-gray-500 py-[2px] px-[8px] absolute focus:outline-none"
        />
        <div className="fixed top-[50px] z-10 w-[580px] h-[200px] bg-title flex flex-col gap-[8px] rounded-[4px] p-[10px]">
          {themeList.map((item) => (
            <div
              key={item.label}
              onClick={() => handleChangeTheme(item.value)}
              className={cn(
                "h-[24px] cursor-pointer flex items-center px-[8px] rounded-[4px]",
                theme === item.value && "bg-slate-500"
              )}
            >
              <img alt="arrow-icon" src={item.icon} width={20} height={30} />
              <p className="ml-[10px] text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
        <div
          onClick={toggleThemeBar}
          className={cn(
            "fixed top-0 left-0 w-full h-screen hidden opacity-0 transition-all duration-300",
            openedThemeBar && "block"
          )}
        />
      </div>
    </div>
  );
}
