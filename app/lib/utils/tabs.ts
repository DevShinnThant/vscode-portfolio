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

export interface SidebarItemType {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
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
    Icon: PencilIcon,
    path: "/articles",
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
