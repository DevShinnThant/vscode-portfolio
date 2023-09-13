import ChevronRight from "@/app/_components/icons/ChevronRight";
import styles from "./explorer.module.css";
import { useState } from "react";
import Link from "next/link";

const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "js_icon.svg",
  },
  {
    name: "articles.json",
    path: "/articles",
    icon: "json_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "markdown_icon.svg",
  },
];

export default function Explorer() {
  const [opened, setOpened] = useState<boolean>(true);

  return (
    <div className={styles.parent}>
      <div className={styles.title}>Explorer</div>

      {/*  */}
      <div className={styles.container}>
        <div
          onClick={() => setOpened(!opened)}
          className={styles.dropdownContainer}
        >
          <ChevronRight
            style={{
              transform: !opened ? "" : `rotate(90deg)`,
              transition: `all linear 0.1s`,
            }}
          />
          <div className={styles.dropdownTitle}>Portfolio</div>
        </div>

        <div className={`${styles.itemsContent} ${opened ? styles.show : ""}`}>
          {explorerItems.map((item) => (
            <Link href={item.path} className={styles.itemContainer}>
              <img src={item.icon} width={14} height={14} />
              <div className={styles.itemName}>{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
      {/*  */}
    </div>
  );
}
