"use client";

import FilesIcon from "@/app/icons/FilesIcon";
import styles from "./sidebar.module.css";
import GithubIcon from "@/app/icons/GithubIcon";
import CodeIcon from "@/app/icons/CodeIcon";
import PencilIcon from "@/app/icons/PencilIcon";
import MailIcon from "@/app/icons/MailIcon";
import AccountIcon from "@/app/icons/AccountIcon";
import SettingsIcon from "@/app/icons/SettingsIcon";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useThemeStore } from "@/app/lib/hooks/useThemeStore";
const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: GithubIcon,
    path: "/github",
  },
  {
    Icon: CodeIcon,
    path: "/projects",
  },
  {
    Icon: PencilIcon,
    path: "/articles",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
];

const settingItems = [
  {
    name: "Command Pattle...",
    icon: ["&#x21E7;", "⌘", "P"],
  },
  {
    name: "Setting",
  },
  {
    name: "Extensions",
  },
  {
    name: "",
  },
];

export default function Sidebar() {
  const route = useSelectedLayoutSegment();

  const [openedSetting, setOpenedSetting] = useState<boolean>(false);

  const { toggleThemeBar } = useThemeStore();

  return (
    <aside className={styles.parent}>
      <div className={styles.topIconContainer}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                (route === null && path === "/" && styles.active) ||
                ("/" + route === path && styles.active)
              }`}
            >
              <Icon
                fill={
                  "/" + route === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.bottomIconContainer}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div className={styles.iconContainer}>
              <Icon
                fill={
                  "/" + route === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
        <div>
          <div
            onClick={() => setOpenedSetting(!openedSetting)}
            className={styles.iconContainer}
          >
            <SettingsIcon fill={"rgb(106, 115, 125)"} className={styles.icon} />
            <div className={styles.count}>2</div>
          </div>

          <div
            className={`${styles.settingModal} ${
              openedSetting ? styles.active : ""
            }`}
          >
            <div className={styles.settingItem}>
              <p>Command Pattle</p>
              <div>
                <p>&#x21E7;</p>
                <p>⌘</p>
                <p>P</p>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.settingItem}>
              <p>Profiles (Default)</p>
              <div>
                <p>&#8680;</p>
              </div>
            </div>

            <div className={styles.settingItem}>
              <p>Setting Sync is On</p>
            </div>

            <div className={styles.divider} />

            <div className={styles.settingItem}>
              <p>Settings</p>
              <div>
                <p>&#x21E7;</p>
              </div>
            </div>

            <div className={styles.settingItem}>
              <p>Extensions</p>
              <div>
                <p>&#x21E7;</p>
                <p>⌘</p>
                <p>X</p>
              </div>
            </div>

            <div className={styles.settingItem}>
              <p>Keyboard Shortcuts</p>
              <div>
                <p>[⌘K ⌘S]</p>
              </div>
            </div>

            <div
              onClick={() => {
                toggleThemeBar();
                setOpenedSetting(false);
              }}
              className={styles.settingItem}
            >
              <p>Themes</p>
            </div>

            <div className={styles.divider} />

            <div className={styles.settingItem}>
              <p>Restart to Update (1)</p>
            </div>
          </div>
          <div
            onClick={() => setOpenedSetting(false)}
            className={`${styles.modalOverlay} ${
              openedSetting ? styles.active : ""
            }`}
          />
        </div>
      </div>
    </aside>
  );
}
