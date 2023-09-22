const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-fraunces)", ...fontFamily.serif],
        sans: ["var(--font-quicksand)", ...fontFamily.sans],
      },
      colors: {
        main: "var(--main-bg)",
        mainText: "var(--bg-text)",
        textColor: "var(--text-color)",
        accentColor: "var(--accent-color)",
        title: "var(--titlebar-bg)",
        sidebar: "var(--sidebar-bg)",
        sidebarHover: "var(--sidebar-hover-bg)",
        explorer: "var(--explorer-bg)",
        explorerHover: "var(--explorer-hover-bg)",
        explorerBorder: "var(--explorer-border)",
        tabs: "var(--tabs-bg)",
        tab: "var(--tab-bg)",
        tabBorder: "var(--tab-border)",
        tabActiveBg: "var(--tab-active-bg)",
        bottomBar: "var(--bottombar-bg)",
        bottomBorder: "var(--bottombar-border)",
      },
      boxShadow: {
        upper:
          "0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)",
        "upper-md":
          "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      keyframes: {
        // hide: {
        //   from: { opacity: 1 },
        //   to: { opacity: 0 },
        // },
        // slideIn: {
        //   from: {
        //     transform: "translateX(calc(100% + var(--viewport-padding)))",
        //   },
        //   to: { transform: "translateX(0))" },
        // },
        // swipeOut: {
        //   from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
        //   to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        // },
      },
      animation: {
        // hide: "hide 100ms ease-in",
        // slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // swipeOut: "swipeOut 100ms ease-out",
      },
    },
  },
};
