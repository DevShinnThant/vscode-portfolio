import FilesIcon from "@/app/_components/icons/FilesIcon";
import styles from "./sidebar.module.css";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import CodeIcon from "@/app/_components/icons/CodeIcon";
import PencilIcon from "@/app/_components/icons/PencilIcon";
import MailIcon from "@/app/_components/icons/MailIcon";
import AccountIcon from "@/app/_components/icons/AccountIcon";
import SettingsIcon from "@/app/_components/icons/SettingsIcon";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

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
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
];

export default function Sidebar() {
  const route = useSelectedLayoutSegment();

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
      </div>
    </aside>
  );
}
