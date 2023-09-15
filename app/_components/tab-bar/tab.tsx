import Image from "next/image";
import styles from "./tab.module.css";
import Link from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useTabStore } from "@/app/_hook/useTabStore";

interface TabProps {
  name: string;
  icon: string;
  path: string;
}

export default function Tab({ name, icon, path }: TabProps) {
  const pathname = useSelectedLayoutSegment();
  const router = useRouter();

  const { removeTab } = useTabStore();

  return (
    <Link
      href={path}
      className={`${styles.parent} ${
        (pathname === null && path === "/" && styles.active) ||
        ("/" + pathname === path && styles.active)
      }`}
    >
      <Image width={20} height={20} src={icon} alt={name} />
      <p>{name}</p>

      {((pathname === null && path === "/") ||
        ("/" + pathname === path && styles.active)) && (
        <div
          onClick={() => {
            removeTab({ name, icon, path });
            router.back();
          }}
          className={styles.crossIcon}
        >
          {" "}
          &#215;
        </div>
      )}
    </Link>
  );
}
