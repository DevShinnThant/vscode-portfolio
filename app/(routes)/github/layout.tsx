import SearchBar from "@/components/search/SearchBar";
import React from "react";

export default function GithubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full p-8">
      <div className="flex justify-between items-center">
        <div className="tracking-[1px] border-b w-fit border-gray-400 mb-6 text-xl text-gray-400">
          Github Repositories
        </div>
        <SearchBar />
      </div>
      {children}
    </div>
  );
}
