"use client";
import { useContext } from "react";
import { TabContext } from "../store/client/TabContext";

export const useTabStore = () => {
  const store = useContext(TabContext);
  return store;
};
