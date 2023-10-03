import { cn, getRepoTechColor } from "@/lib/utils";
import Link from "next/link";
import { FiEye, FiStar } from "react-icons/fi";

interface Props {
  name: string;
  description: string;
  repoType: string;
  star: number;
  tech: "TypeScript" | "JavaScript" | "Vue" | "HTML" | "CSS" | "PHP";
  watcher: number;
}

const Card = ({ name, description, repoType, star, tech, watcher }: Props) => {
  return (
    <div className="w-full border group hover:border-accentColor cursor-pointer rounded-md col-span-4 h-34 p-4 flex flex-col items-start gap-6 transition-all">
      <div className="w-full flex justify-between items-center">
        <div className="text-sm font-semibold text-gray-300 truncate">
          {name}
        </div>
        <div className="flex w-16 justify-center items-center border border-gray-400 rounded-xl">
          <div className="text-gray-400 text-[12px]">{repoType}</div>
        </div>
      </div>

      <div className="w-full">
        <p className="text-xs truncate text-gray-400 font-normal">
          {description ||
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque amet"}
        </p>
      </div>

      <div className="w-full flex items-center justify-between gap-4">
        <div className="flex gap-3 items-center">
          {tech ? (
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-3 h-3 rounded-full",
                  tech === "JavaScript"
                    ? "bg-yellow-300"
                    : tech === "Vue"
                    ? "bg-green-500"
                    : tech === "TypeScript"
                    ? "bg-blue-600"
                    : tech === "HTML"
                    ? "bg-orange-600"
                    : ""
                )}
              />
              <div className="text-gray-400 text-[12px]">{tech}</div>
            </div>
          ) : null}

          <div className="flex items-center gap-3">
            <FiStar size={13} color="white" />
            <div className="text-gray-400 text-[14px]">{star}</div>
          </div>

          <div className="flex items-center gap-3">
            <FiEye size={13} color="white" />
            <div className="text-gray-400 text-[14px]">{watcher}</div>
          </div>
        </div>
        <Link
          target="_blank"
          href={`https://github.com/ShinnTNT/${name}`}
          className="flex shadow-md bg-accentColor backdrop-contrast-200 rounded-lg px-[8px] py-[1px] items-center "
        >
          <div className="text-[10px] font-semibold tracking-[0.6px] text-white">
            Github
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
