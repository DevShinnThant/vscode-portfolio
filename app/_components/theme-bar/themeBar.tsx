import { useThemeStore } from "@/app/_hook/useThemeStore";
import styles from "./themeBar.module.css";
import { useRef, useState } from "react";

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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { toggleThemeBar, openedThemeBar, setTheme, theme } = useThemeStore();

  const [themeList, setThemeList] = useState(items || []);

  const onSearchChange = () => {
    const query = inputRef?.current?.value;
    if (query) {
      setThemeList(
        items.filter(
          (item) => query?.toLocaleLowerCase() == item.label.toLocaleLowerCase()
        )
      );
    } else {
      setThemeList(items);
    }
  };

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <input
          onChange={() => onSearchChange()}
          ref={inputRef}
          placeholder="Select Color Theme"
          className={styles.input}
        />
        <div className={styles.dropdown}>
          {themeList.map((item) => (
            <div
              onClick={() => handleChangeTheme(item.value)}
              className={`${styles.dropdownItem} ${
                theme === item.value ? styles.active : ""
              }`}
            >
              <img src={item.icon} width={20} height={30} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <div
          onClick={toggleThemeBar}
          className={`${styles.dropdownOverlay} ${
            openedThemeBar ? styles.active : ""
          }`}
        />
      </div>
    </div>
  );
}
