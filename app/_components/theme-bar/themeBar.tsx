import { useThemeStore } from "@/app/_hook/useThemeStore";
import styles from "./themeBar.module.css";

const items = [
  {
    label: "Github Dark",
    value: "github-dark",
    icon: "/github-dark.png",
  },
  {
    label: "Dracula",
    value: "dracula",
    icon: "/dracula.png",
  },
  {
    label: "Auy Dark",
    value: "ayu-dark",
    icon: "/ayu.png",
  },
  {
    label: "Ayu Mirage",
    value: "ayu-mirage",
    icon: "/ayu.png",
  },
  {
    label: "Nord",
    value: "nord",
    icon: "/nord.png",
  },
  {
    label: "Night Owl",
    value: "night-owl",
    icon: "/night-owl.png",
  },
];

export default function ThemeBar() {
  const { toggleThemeBar, openedThemeBar } = useThemeStore();

  const handleChangeTheme = (theme: string) => {
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
    toggleThemeBar();
  };

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <input
          placeholder="Select Color Theme (Up/Down Keys to Preview)"
          className={styles.input}
        />
        <div className={styles.dropdown}>
          {items.map((item, index) => (
            <div
              onClick={() => handleChangeTheme(item.value)}
              className={styles.dropdownItem}
            >
              <img src={item.icon} width={20} height={30} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        {/* <div
          onClick={toggleThemeBar}
          className={`${styles.dropdownOverlay} ${
            openedThemeBar ? styles.active : ""
          }`}
        /> */}
      </div>
    </div>
  );
}
