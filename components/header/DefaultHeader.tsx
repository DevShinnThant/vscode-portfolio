const DefaultHeader = () => {
  return (
    <div className="w-full over h-[30px] bg-title px-[0.5rem] flex items-center justify-center text-white text-[0.85rem] border-b border-b-[#191d20]">
      <div className="w-full grid grid-cols-3">
        {/* Left */}
        <div className="flex items-center">
          <img width={20} height={20} src="/vscode_icon.svg" alt="vscode" />
          <div className="ml-6 flex items-center gap-4 cursor-pointer">
            <div>File</div>
            <div>Edit</div>
            <div>View</div>
            <div>Go</div>
            <div>Run</div>
            <div>Terminal</div>
            <div>Help</div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="w-full py-2 h-[16px] bg-slate-600 outline-none border border-gray-400 rounded-[5px] flex items-center justify-center">
            <img alt="portfolio" width={14} height={14} src="/search.svg" />
            <p className="ml-[10px] text-white text-[12px] font-[500]">
              portfolio
            </p>
          </button>
        </div>

        {/* Right */}
        <div className="flex justify-end items-center">
          <div className="w-[10px] h-[10px] rounded-full bg-[#f1fa8c]" />
          <div className="w-[10px] mx-2 h-[10px] rounded-full bg-[#50fa7b]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5555]" />
        </div>
      </div>
    </div>
  );
};

export default DefaultHeader;
