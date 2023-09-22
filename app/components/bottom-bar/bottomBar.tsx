import BellIcon from "../../icons/BellIcon";
import CheckIcon from "../../icons/CheckIcon";
import ErrorIcon from "../../icons/ErrorIcon";
import NextjsIcon from "../../icons/NextjsIcon";
import SourceControlIcon from "../../icons/SourceControlIcon";
import WarningIcon from "../../icons/WarningIcon";

export default function BottomBar() {
  return (
    <div className="bg-bottomBar w-full absolute bottom-0 left-0 h-[25px] border-t border-bottomBorder text-neutral-300 px-[0.5rem] flex items-center justify-between text-[0.8rem]">
      <div className="h-full flex items-center">
        <a className="flex mr-[0.5rem] h-[24px] items-center py-[0.2rem] cursor-pointer">
          <SourceControlIcon className="mr-[10px]" />
          <p>main</p>
        </a>

        <div className="h-full flex items-center justify-center mr-[0.5rem py-[0.2rem] cursor-pointer">
          <ErrorIcon className="mr-[10px]" />
          <p>0</p>&nbsp;&nbsp;
          <WarningIcon className="mr-[10px]" />
          <p>0</p>
        </div>
      </div>
      <div className="h-full gap-6 flex items-center">
        <div className="h-full flex items-center justify-center mr-[0.5rem py-[0.2rem] cursor-pointer">
          <NextjsIcon className="mr-[10px]" />
          <p>Powered by Next.js</p>
        </div>
        <div className="h-full flex items-center justify-center mr-[0.5rem py-[0.2rem] cursor-pointer">
          <CheckIcon className="mr-[10px]" />
          <p>Prettier</p>
        </div>
        <div className="h-full flex items-center justify-center mr-[0.5rem py-[0.2rem] cursor-pointer">
          <BellIcon />
        </div>
      </div>
    </div>
  );
}
