import { useContext } from "react";
import { TabContext } from "../_contexts/TabContext";

export const useTabStore = () => {
  const store = useContext(TabContext);
  return store;
};
