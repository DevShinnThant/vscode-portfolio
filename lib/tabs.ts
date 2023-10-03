import AccountIcon from "@/app/icons/AccountIcon";
import CodeIcon from "@/app/icons/CodeIcon";
import FilesIcon from "@/app/icons/FilesIcon";
import GithubIcon from "@/app/icons/GithubIcon";
import MailIcon from "@/app/icons/MailIcon";
import PencilIcon from "@/app/icons/PencilIcon";
import { SVGProps } from "react";

export interface TabType {
  icon: string;
  name: string;
  path: string;
}

export const tabs: TabType[] = [
  {
    icon: "/ts.svg",
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
    icon: "/ts.svg",
    name: "README.ts",
    path: "/github",
  },
];

export interface SidebarItemType {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  path: string;
}

export const sidebarTopItems: SidebarItemType[] = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: GithubIcon,
    path: "/github",
  },
  {
    Icon: CodeIcon,
    path: "/projects",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
];

export const sidebarBottomItems: SidebarItemType[] = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
];

export interface ThemeItemType {
  label: string;
  value: string;
  icon: string;
}

export const themeItems: ThemeItemType[] = [
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

export const explorerItems = [
  {
    name: "contact.html",
    path: "/contact",
    icon: "/html_icon.svg",
    hasChildren: false,
  },
  {
    name: "TypeScript",
    icon: "/ts-folder.svg",
    hasChildren: true,
    children: [
      {
        name: "index.tsx",
        path: "/",
        icon: "/ts.svg",
      },
      {
        name: "projects.tsx",
        path: "/projects",
        icon: "/ts.svg",
      },
      {
        name: "github.ts",
        path: "/github",
        icon: "/ts.svg",
      },
    ],
  },
  {
    name: "JavaScript",
    icon: "/js-folder.svg",
    hasChildren: true,
    children: [
      {
        name: "about.js",
        path: "/about",
        icon: "/js_icon.svg",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "The Beast Fitness",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maximetenetur facere excepturi.",
    image: "/thebeast.svg",
    link: "/",
  },
  {
    id: 2,
    title: "Pocket Nicotine",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maximetenetur facere excepturi.",
    image: "/pocketnicotine-logo.png",
    link: "/",
  },
  {
    id: 3,
    title: "App Studio",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maximetenetur facere excepturi.",
    image: "/app-studio.png",
    link: "/",
  },
  {
    id: 4,
    title: "Vscode Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maximetenetur facere excepturi.",
    image: "/vscode_icon.svg",
    link: "/",
  },
  {
    id: 5,
    title: "MUI Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maximetenetur facere excepturi.",
    image: "/nord.png",
    link: "/",
  },
  {
    id: 6,
    title: "Crown Clothing",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maximetenetur facere excepturi.",
    image: "/nord.png",
    link: "/",
  },
];
