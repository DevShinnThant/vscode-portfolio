import Image from "next/image";
import styles from "./tab.module.css";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface TabProps {
  name: string;
  icon: string;
  path: string;
}

export default function Tab({ name, icon, path }: TabProps) {
  const pathname = useSelectedLayoutSegment();

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
    </Link>
  );
}
