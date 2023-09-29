"use client";

// Hooks
import { useState } from "react";
import { useTabStore } from "@/lib/hooks/useTabStore";

// Components
import Link from "next/link";

// Icons
import ChevronRight from "@/app/icons/ChevronRight";

// Links
import { explorerItems } from "@/lib/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Explorer() {
  const [opened, setOpened] = useState<boolean>(true);

  const { addTab } = useTabStore();

  return (
    <div className="w-[18vw] h-full text-slate-300 bg-explorer border-r border-explorerBorder flex flex-col py-[0.5rem] px-[0.75rem]">
      <div className="font-normal mt-2 mb-6 uppercase text-[0.8rem] leading-[1px] ">
        Explorer
      </div>

      {/*  */}
      <div className="h-full">
        <div
          onClick={() => setOpened(!opened)}
          className="flex items-center cursor-pointer"
        >
          <ChevronRight className={cn("transition", opened && "rotate-90")} />
          <div className="ml-[10px] text-[12px] leading-[1px] font-medium uppercase">
            Portfolio
          </div>
        </div>

        <div
          className={cn(
            "mt-[10px] ml-[10px] opacity-0 h-0 w-full transition",
            opened && "h-[200px] opacity-100"
          )}
        >
          {explorerItems.map((item) => (
            <Link
              key={item.name}
              onClick={() => {
                addTab(item);
              }}
              href={item.path}
              className="w-full h-[20px] pl-[4px] rounded-[4px] my-[6px] flex items-center cursor-pointer"
            >
              <Image alt="arrow-icon" src={item.icon} width={14} height={14} />
              <div className="ml-[8px] font-normal text-[14px] text-white">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
