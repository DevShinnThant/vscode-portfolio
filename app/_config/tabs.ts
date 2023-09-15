export interface TabType {
  icon: string;
  name: string;
  path: string;
}

export const tabs: TabType[] = [
  {
    icon: "/react_icon.svg",
    name: "index.tsx",
    path: "/",
  },
  {
    icon: "/html_icon.svg",
    name: "about.html",
    path: "/about",
  },
  {
    icon: "/css_icon.svg",
    name: "contact-me.css",
    path: "/contact",
  },
  {
    icon: "/js_icon.svg",
    name: "projects.ts",
    path: "/projects",
  },
  {
    icon: "/json_icon.svg",
    name: "blogs.json",
    path: "/articles",
  },
  {
    icon: "/markdown_icon.svg",
    name: "README.md",
    path: "/github",
  },
];
