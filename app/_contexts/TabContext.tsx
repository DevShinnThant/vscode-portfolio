import React, { createContext, useState } from "react";
import { TabType } from "../_config/tabs";

interface TabContextType {
  tabs: TabType[];
  addTab: (tab: TabType) => void;
  removeTab: (tab: TabType) => void;
}

export const TabContext = createContext<TabContextType>({
  tabs: [],
  addTab: (tab: TabType) => {},
  removeTab: (tab: TabType) => {},
});

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabs, setTabs] = useState<TabType[]>([]);

  const addTab = (tab: TabType) => {
    if (tabs.includes(tab)) return;
    setTabs([...tabs, tab]);
  };

  const removeTab = (tab: TabType) => {
    const isExisted = tabs.find((item) => item.name === tab.name);

    if (isExisted) {
      setTabs((tabs) => {
        return tabs.filter((item) => item.name !== tab.name);
      });
    }
  };

  return (
    <TabContext.Provider
      value={{
        tabs,
        addTab,
        removeTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
