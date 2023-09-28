import EyeIcon from "@/app/icons/EyeIcon";
import StarIcon from "@/app/icons/StarIcon";

interface Props {
  name: string;
  description: string;
  repoType: string;
  star: number;
  tech: string;
  watcher: number;
}

const Card = ({ name, description, repoType, star, tech, watcher }: Props) => {
  return (
    <div className="w-full border bg-slate-600 rounded-md col-span-4 h-44 p-4 flex flex-col items-start gap-8">
      <div className="w-full flex justify-between items-center">
        <div className="text-sm font-semibold text-gray-300">{name}</div>
        <div className="flex w-16 justify-center items-center border border-gray-400 rounded-xl">
          <div className="text-gray-400 text-[12px]">{repoType}</div>
        </div>
      </div>
      <div className="text-sm font-normal tracking-[1px]">{description}</div>
      <div className="flex items-center justify-start gap-4">
        <div>{tech}</div>

        <div className="flex items-center gap-3">
          <StarIcon />
          <div>{star}</div>
        </div>

        <div className="flex items-center gap-3">
          <EyeIcon />
          <div>{watcher}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
