"use client";

import { useTabStore } from "@/app/lib/hooks/useTabStore";
import Tab from "./tab";

export default function TabBar() {
  const { tabs, clearTabs } = useTabStore();

  return (
    <div className="w-[calc(100% - (40px+12vw))] h-[40px] bg-tabs border border-tabBorder overflow-x-scroll flex justify-between items-center">
      <div className="flex items-center">
        {tabs.map((tab) => (
          <Tab key={tab.name} icon={tab.icon} name={tab.name} path={tab.path} />
        ))}
      </div>

      {tabs.length > 1 ? (
        <div
          onClick={() => clearTabs()}
          className="h-full mr-2 flex justify-center items-center"
        >
          <img
            className="w-[16px] h-[16px] cursor-pointer"
            src="/trash.svg"
            width={20}
            height={20}
            alt="trash-icon"
          />
        </div>
      ) : null}
    </div>
  );
}
