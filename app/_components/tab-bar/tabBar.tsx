import { useTabStore } from "@/app/_hook/useTabStore";
import Tab from "./tab";
import styles from "./tabBar.module.css";

export default function TabBar() {
  const { tabs } = useTabStore();

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        {tabs.map((tab) => (
          <Tab icon={tab.icon} name={tab.name} path={tab.path} />
        ))}
      </div>
    </div>
  );
}
