import { FiEye, FiStar } from "react-icons/fi";
import CardGrid from "./components/CardGrid";

export default function Loading() {
  return (
    <main>
      <CardGrid className="animate-pulse">
        {[...new Array(5)].map((_) => (
          <div className="w-full border bg-gray-600 opacity-40 cursor-pointer rounded-md col-span-4 h-32 p-4 flex flex-col items-start gap-6">
            <div className="w-full flex justify-between items-center">
              <div className="w-12 h-[8px] rounded-lg bg-slate-500" />

              <div className="flex w-16 h-[8px] bg-slate-500 border border-gray-400 rounded-xl" />
            </div>

            <div className="w-full">
              <p className="w-24 h-[12px] bg-slate-500 rounded-lg text-gray-400"></p>
            </div>

            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center gap-3">
                <FiStar size={13} color="white" />
                <div className="w-3 h-3 bg-slate-400 rounded-full text-gray-400" />
              </div>

              <div className="flex items-center gap-3">
                <FiEye size={13} color="white" />
                <div className="w-3 h-3 bg-slate-400 rounded-full text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </CardGrid>
    </main>
  );
}
