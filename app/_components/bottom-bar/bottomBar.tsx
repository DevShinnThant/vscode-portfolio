import BellIcon from "../icons/BellIcon";
import CheckIcon from "../icons/CheckIcon";
import ErrorIcon from "../icons/ErrorIcon";
import NextjsIcon from "../icons/NextjsIcon";
import SourceControlIcon from "../icons/SourceControlIcon";
import WarningIcon from "../icons/WarningIcon";
import styles from "./bottomBar.module.css";

export default function BottomBar() {
  return (
    <div className={styles.parent}>
      <div className={styles.itemsContainer}>
        <a className={styles.link}>
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>

        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.section}>
          <NextjsIcon className={styles.icon} />
          <p>Powered by Next.js</p>
        </div>
        <div className={styles.section}>
          <CheckIcon style={{ marginTop: "6px" }} className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </div>
  );
}
