"use client";

import styles from "./layout.module.css";
import { NextFont } from "next/dist/compiled/@next/font";

import React, { useEffect } from "react";
import Header from "../header/header";
import Head from "next/head";
import Sidebar from "../sidebar/sidebar";
import Explorer from "@/app/_components/explorer/explorer";
import BottomBar from "../bottom-bar/bottomBar";
import TabBar from "../tab-bar/tabBar";
import { TabProvider } from "@/app/_contexts/TabContext";
import ThemeBar from "../theme-bar/themeBar";
import { useThemeStore } from "@/app/_hook/useThemeStore";

export default function Layout({
  children,
  font,
}: {
  children: React.ReactNode;
  font: NextFont;
}) {
  const { openedThemeBar } = useThemeStore();

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "theme",
        localStorage.getItem("theme") || ""
      );
    }
  }, []);

  return (
    <html lang="en">
      <CustomHead />
      <body className={font.className}>
        {openedThemeBar ? <ThemeBar /> : <Header />}
        <div className={styles.bodyWrapper}>
          <TabProvider>
            <Sidebar />
            <Explorer />
            <div className={styles.children}>
              <TabBar />
              <div className={styles.childrenWrapper}>{children}</div>
            </div>
          </TabProvider>
        </div>
        <BottomBar />
      </body>
    </html>
  );
}

const CustomHead = () => {
  return (
    <Head>
      <title>Shinn Thant</title>
      <meta
        name="description"
        content="Shinn Thant is a front end developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="shinn thant, web developer,vscode portfolio, nextjs, shinn thant portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Shinn Thant's Portfolio" />
      <meta
        property="og:description"
        content="A front-end developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
