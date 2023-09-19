"use client";

import styles from "./page.module.css";
import Lottie from "lottie-react";

import animationData from "../public/animation_lmlkdwc5.json";

export default function Home() {
  return (
    <div className={styles.parent}>
      <div className={styles.leftContainer}>
        <div className={styles.leftChildContainer}>
          <p className={styles.intro}>Hello, my name is</p>
          <p className={styles.name}>Shinn Thant.</p>
          <p className={styles.subTitle}>I love exploring new things!</p>

          <p className={styles.description}>
            🚀 I specialize in transforming ideas into pixel-perfect,
            user-friendly websites that not only look stunning but also function
            flawlessly. With a strong foundation in HTML, CSS, and JavaScript, I
            bring creativity and technical expertise to every project.
          </p>
          <p className={styles.description}>
            I enjoy learning new skills and implementing them in real life.
          </p>

          <button className={styles.button}>
            <p>Get In Touch</p>
          </button>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          color="white"
          style={{ width: "420px", height: "420px" }}
        />
      </div>
    </div>
  );
}
