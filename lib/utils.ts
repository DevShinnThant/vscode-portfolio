import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRepoTechColor(
  tech: "TypeScript" | "JavaScript" | "Vue" | "HTML" | "CSS" | "PHP"
) {
  let color: string = "";

  switch (tech) {
    case "TypeScript":
      color = "bg-blue-500";
      break;
    case "JavaScript":
      color = "bg-red-500";
      break;
    case "Vue":
      color = "bg-green-500";
      break;
    case "HTML":
      color = "bg-orange-500";
      break;
    case "CSS":
      color = "bg-purple-500";
      break;
    case "PHP":
      color = "bg-violet-500";
      break;
  }
  return color;
}
