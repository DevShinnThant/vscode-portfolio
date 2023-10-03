"use client";

// Hooks
import { useEffect, useState } from "react";
import { useTabStore } from "@/lib/hooks/useTabStore";

// Components
import Link from "next/link";

// Icons
import ChevronRight from "@/app/icons/ChevronRight";

// Links
import { explorerItems } from "@/lib/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Explorer() {
  const [opened, setOpened] = useState<boolean>(true);

  const [openedItem, setOpenedItem] = useState<string[]>([]);

  const router = useRouter();

  const { addTab } = useTabStore();

  // Handler
  const toggleFolderHandler = (name: string) => {
    if (openedItem.includes(name)) {
      setOpenedItem((prev) => prev.filter((item) => item !== name));
    } else {
      setOpenedItem((prev) => [...prev, name]);
    }
  };

  useEffect(() => {
    console.log(openedItem);
  }, [openedItem]);

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
            "mt-[10px] flex flex-col  opacity-0 h-0 w-full transition",
            opened && "h-[200px] opacity-100"
          )}
        >
          {explorerItems.map((item) => {
            return (
              <div key={item.name} className="w-full">
                {/* Folder */}
                <div
                  onClick={() => {
                    if (!item.hasChildren && item.path) {
                      addTab(item);
                      router.push(item.path);
                    }
                    if (item.hasChildren) {
                      toggleFolderHandler(item.name);
                    }
                  }}
                  className={cn(
                    "w-full flex items-center rounded-sm",
                    item.hasChildren ? "" : "hover:bg-explorerHover"
                  )}
                >
                  {item.hasChildren ? (
                    <ChevronRight
                      className={cn(
                        "transition",
                        openedItem.includes(item.name) && "rotate-90"
                      )}
                    />
                  ) : null}
                  <div
                    key={item.name}
                    className={cn(
                      "w-full rounded-[4px] my-[6px] flex items-center ml-1 cursor-pointer",
                      item.hasChildren ? "" : "ml-[18px]"
                    )}
                  >
                    <Image
                      alt="arrow-icon"
                      src={item.icon}
                      width={16}
                      height={16}
                    />
                    <div className="ml-[8px] tracking-[0.1px] font-normal text-[14px] lowercase text-gray-300">
                      {item.name}
                    </div>
                  </div>
                </div>

                {/* Items */}
                {item.hasChildren ? (
                  <div
                    className={cn(
                      "opacity-0 h-fit  hidden w-full transition",
                      openedItem.includes(item.name) && "block pb-1 opacity-100"
                    )}
                  >
                    {item.children?.map((item) => (
                      <Link
                        href={item.path}
                        key={item.name}
                        onClick={() => {
                          addTab(item);
                        }}
                        className="flex hover:bg-explorerHover rounded-sm w-full h-[30px] cursor-pointer pl-6 gap-2 items-center justify-start"
                      >
                        <Image
                          alt="arrow-icon"
                          src={item.icon}
                          width={16}
                          height={16}
                        />
                        <div className="tracking-[0.1px] font-normal text-[14px] lowercase text-gray-300">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
