import { projects } from "@/lib/tabs";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  return (
    <main className="w-full h-full pt-16">
      <div className="w-fit border-b border-accentColor text-accentColor mb-10 m-auto text-2xl font-semibold tracking-[1px]">
        Projects
      </div>
      <div className="grid place-content-center">
        <div className="grid cards group grid-cols-12 gap-6 pointer-events-none">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer  card w-[240px] h-[200px] p-4 bg-main border hover:border-accentColor border-gray-400 rounded-sm hover:shadow-md col-span-4 translate-y-2 rotate-[4deg] transition-all hover:translate-y-0 hover:rotate-0 transform scale-[1] opacity-100 hover:scale-[1.15] hover:z-10 pointer-events-auto flex flex-col"
            >
              <img
                className="object-contain w-[60px] h-[30px]"
                width={60}
                height={30}
                alt={project.title}
                src={project.image}
              />
              <div className="text-xs mt-3 tracking-[1px] title text-gray-300 font-semibold">
                {project.title}
              </div>
              <div className="mt-2 text-[10px] tracking-[1px] text-gray-400 font-normal">
                {project.description}
              </div>
              <div className="flex justify-end">
                <div
                  aria-label={`Navigate the ${project.title} project.`}
                  className="group w-2/4 cursor-not-allowed transition-all hover:bg-accentColor border border-accentColor px-2 py-1 rounded-sm shadow-md mt-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] group-hover:text-white tracking-[1px] font-normal text-white">
                      View Project
                    </div>
                    <BsArrowRight size={12} color="white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
