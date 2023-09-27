"use client";
import React, { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import { TabType, tabs as TABS } from "../../tabs";

interface TabContextType {
  tabs: TabType[];
  addTab: (tab: TabType) => void;
  removeTab: (tab: TabType) => void;
  clearTabs: () => void;
}

export const TabContext = createContext<TabContextType>({
  tabs: [],
  addTab: () => {},
  removeTab: () => {},
  clearTabs: () => {},
});

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [tabs, setTabs] = useState<TabType[]>([TABS[0]]);

  const addTab = (tab: TabType) => {
    if (tab.name === TABS[0].name) return;

    if (tabs.includes(tab)) return;
    setTabs([...tabs, tab]);
  };

  const removeTab = (tab: TabType) => {
    if (tab.name === TABS[0].name) return;

    const isExisted = tabs.find((item) => item.name === tab.name);

    if (isExisted) {
      setTabs((tabs) => {
        return tabs.filter((item) => item.name !== tab.name);
      });
      router.back();
    }
  };

  const clearTabs = () => {
    setTabs([TABS[0]]);
    router.push("/");
  };

  return (
    <TabContext.Provider
      value={{
        tabs,
        addTab,
        removeTab,
        clearTabs,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
