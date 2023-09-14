import Tab from "./tab";
import styles from "./tabBar.module.css";

export default function TabBar() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <Tab icon="/react_icon.svg" name="home.jsx" path="/" />
        <Tab icon="/html_icon.svg" name="about.html" path="/about" />
        <Tab icon="/css_icon.svg" name="contact.css" path="/contact" />
        <Tab icon="/js_icon.svg" name="projects.js" path="/projects" />
        <Tab icon="/json_icon.svg" name="articles.json" path="/articles" />
        <Tab icon="/markdown_icon.svg" name="github.md" path="/github" />
      </div>
    </div>
  );
}
