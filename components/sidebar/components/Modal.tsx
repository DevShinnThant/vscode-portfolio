import { cn } from "@/lib/style";
import React, { SetStateAction } from "react";

interface Props {
  toggleThemeBar: () => void;
  openedSetting: boolean;
  setOpenedSetting: React.Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ toggleThemeBar, openedSetting, setOpenedSetting }: Props) => {
  return (
    <div>
      <div
        className={cn(
          "fixed opacity-0 w-[280px] h-[220px] py-[8px] px-[16px] rounded-[10px] border-[0.4px] border-white z-10 bottom-[10px] left-[48px] bg-zinc-900  transition-all duration-300",
          openedSetting && "opacity-100"
        )}
      >
        <div className="settingModalItem">
          <p>Command Pattle</p>
          <div className="settingModalSymbolsContainer">
            <p>&#x21E7;</p>
            <p>⌘</p>
            <p>P</p>
          </div>
        </div>

        <div className="w-full h-[1px] border-[0.2px] border-gray-500 my-[4px]" />

        <div className="settingModalItem">
          <p>Profiles (Default)</p>
          <div className="settingModalSymbolsContainer">
            <p>&#8680;</p>
          </div>
        </div>

        <div className="settingModalItem">
          <p>Setting Sync is On</p>
        </div>

        <div className="w-full h-[1px] border-[0.2px] border-gray-500 my-[4px]" />

        <div className="settingModalItem">
          <p>Settings</p>
          <div className="settingModalSymbolsContainer">
            <p>&#x21E7;</p>
          </div>
        </div>

        <div className="settingModalItem">
          <p>Extensions</p>
          <div className="settingModalSymbolsContainer">
            <p>&#x21E7;</p>
            <p>⌘</p>
            <p>X</p>
          </div>
        </div>

        <div className="settingModalItem">
          <p>Keyboard Shortcuts</p>
          <div className="settingModalSymbolsContainer">
            <p>[⌘K ⌘S]</p>
          </div>
        </div>

        <div
          onClick={() => {
            toggleThemeBar();
            setOpenedSetting(false);
          }}
          className="settingModalItem"
        >
          <p>Themes</p>
        </div>

        <div className="w-full h-[1px] border-[0.2px] border-gray-500 my-[4px]" />

        <div className="settingModalItem">
          <p>Restart to Update (1)</p>
        </div>
      </div>
      <div
        onClick={() => setOpenedSetting(false)}
        className={cn(
          "w-full h-screen fixed hidden top-0 z-[9] opacity-0",
          openedSetting && "block"
        )}
      />
    </div>
  );
};

export default Modal;
