import SearchBar from "@/components/search/SearchBar";
import React from "react";

export default function GithubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full pt-8 h-full">
      <div className="w-4/5 m-auto">
        <div className="flex justify-between items-center">
          <div className="tracking-[1px] w-fit  mb-6 text-xl text-gray-300">
            Github Repositories
          </div>
          <SearchBar />
        </div>
        <div className="w-full pb-8 overflow-scroll">{children}</div>
      </div>
    </div>
  );
}
