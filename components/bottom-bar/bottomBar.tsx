import BellIcon from "../../app/icons/BellIcon";
import CheckIcon from "../../app/icons/CheckIcon";
import ErrorIcon from "../../app/icons/ErrorIcon";
import NextjsIcon from "../../app/icons/NextjsIcon";
import SourceControlIcon from "../../app/icons/SourceControlIcon";
import WarningIcon from "../../app/icons/WarningIcon";

export default function BottomBar() {
  return (
    <div className="bg-bottomBar w-full h-[25px] border-t border-bottomBorder text-neutral-300 px-[0.5rem] flex items-center justify-between text-[0.8rem]">
      <div className="h-full flex items-center">
        <a className="flex mr-[0.5rem] items-center cursor-pointer">
          <SourceControlIcon className="mr-[10px]" />
          <p>main</p>
        </a>

        <div className="h-full flex items-center justify-center mr-[0.5rem] cursor-pointer">
          <ErrorIcon className="mr-[10px]" />
          <p>0</p>&nbsp;&nbsp;
          <WarningIcon className="mr-[10px]" />
          <p>0</p>
        </div>
      </div>
      <div className="h-full gap-6 flex items-center">
        <div className="h-full flex items-center justify-center mr-[0.5rem] cursor-pointer">
          <NextjsIcon className="mr-[10px]" />
          <p>Powered by Next.js</p>
        </div>
        <div className="h-full flex items-center justify-center mr-[0.5rem] cursor-pointer">
          <CheckIcon className="mr-[10px]" />
          <p>Prettier</p>
        </div>
        <div className="h-full flex items-center justify-center mr-[0.5rem] cursor-pointer">
          <BellIcon />
        </div>
      </div>
    </div>
  );
}
