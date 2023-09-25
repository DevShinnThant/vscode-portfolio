// Components
import Image from "next/image";
import Link from "next/link";

// Hooks
import { usePathname } from "next/navigation";
import { useTabStore } from "@/app/lib/hooks/useTabStore";
import { cn } from "@/app/lib/utils/style";

interface TabProps {
  name: string;
  icon: string;
  path: string;
}

export default function Tab({ name, icon, path }: TabProps) {
  const pathname = usePathname();

  const { removeTab } = useTabStore();

  return (
    <Link
      href={path}
      className={cn(
        "w-[160px] hover:bg-tabBorder h-full bg-tab py-[0.37rem] px-[1.25rem] text-[#ececec] flex items-center justify-between text-[0.9rem] cursor-pointer",
        pathname === path && "border-b border-accentColor"
      )}
    >
      <div className="flex items-center">
        <Image width={20} height={20} src={icon} alt={name} />
        <p className="ml-2">{name}</p>
      </div>

      {pathname === path && (
        <div
          onClick={() => {
            removeTab({ name, icon, path });
          }}
        >
          &#215;
        </div>
      )}
    </Link>
  );
}
