import { useTabStore } from "@/app/_hook/useTabStore";
import Tab from "./tab";
import styles from "./tabBar.module.css";

export default function TabBar() {
  const { tabs, clearTabs } = useTabStore();

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        {tabs.map((tab) => (
          <Tab key={tab.name} icon={tab.icon} name={tab.name} path={tab.path} />
        ))}
      </div>

      {tabs.length > 1 ? (
        <div onClick={() => clearTabs()} className={styles.iconContainer}>
          <img
            className={styles.trashIcon}
            src="/trash.svg"
            width={20}
            height={20}
          />
        </div>
      ) : null}
    </div>
  );
}
