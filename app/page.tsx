import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.parent}>
      <div className={styles.leftContainer}></div>
      <div className={styles.rightContainer}>
        <img className={styles.rightImage} />
      </div>
    </div>
  );
}
