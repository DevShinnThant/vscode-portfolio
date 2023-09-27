"use client";

// Hooks
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/lib/hooks/useThemeStore";
import { useState } from "react";
import { cn } from "@/lib/style";

// Icons
import SettingsIcon from "@/app/icons/SettingsIcon";

// Components
import Link from "next/link";
import Modal from "./components/Modal";
import { sidebarBottomItems, sidebarTopItems } from "@/lib/tabs";

export default function Sidebar() {
  const pathname = usePathname();

  const [openedSetting, setOpenedSetting] = useState<boolean>(false);

  const { toggleThemeBar } = useThemeStore();

  return (
    <aside className="min-w-[50px] h-full bg-sidebar flex flex-col justify-between">
      <div className="pt-[10px] w-full h-[300px] flex flex-col gap-2 justify-center items-center">
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link aria-label={`Navigate the ${path} page`} href={path} key={path}>
            <div
              className={cn(
                "cursor-pointer w-full border-l-2 border-transparent relative z-10",
                pathname === path ? "border-accentColor" : ""
              )}
            >
              <Icon
                fill={
                  pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className="w-[48px] h-[48px] py-[0.65rem] block mx-auto cursor-pointer"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full h-[100px] flex flex-col justify-center items-center">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link
            aria-label={`Navigate the ${path} page`}
            className="m-0"
            href={path}
            key={path}
          >
            <div className="cursor-pointer w-full border-l-2 border-l-transparent relative z-10">
              <Icon
                fill={
                  pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className="w-[48px] h-[48px] py-[0.65rem] block mx-auto cursor-pointer"
              />
            </div>
          </Link>
        ))}
        <div
          onClick={() => setOpenedSetting(!openedSetting)}
          className="cursor-pointer w-full border-l-2 border-l-transparent relative z-10"
        >
          <SettingsIcon
            fill={"rgb(106, 115, 125)"}
            className="w-[48px] h-[48px] py-[0.65rem] block mx-auto cursor-pointer"
          />
          <div className="absolute right-[4px] bottom-[8px] text-white text-[10px] font-extrabold w-[16px] h-[16px] rounded-full bg-blue-500 flex justify-center items-center">
            2
          </div>
        </div>

        <Modal
          openedSetting={openedSetting}
          setOpenedSetting={setOpenedSetting}
          toggleThemeBar={toggleThemeBar}
        />
      </div>
    </aside>
  );
}
