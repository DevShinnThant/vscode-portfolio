import { projects } from "@/lib/tabs";
import Image from "next/image";

import React from "react";

export default function Projects() {
  return (
    <main className="w-full h-full pt-14">
      <div className="w-3/4 m-auto flex flex-col items-center">
        <div className="text-[14px] tracking-[0.4px] font-semibold text-accentColor">
          Showcase
        </div>
        <div className="text-3xl mt-4 font-bold tracking-[1px] text-gray-300">
          Digital design is like painting,
        </div>
        <div className="text-3xl mt-1 font-bold tracking-[1px] text-gray-300">
          the paint never dries.
        </div>
      </div>

      <div className="grid md:grid-cols-12 py-28 px-12 gap-14">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-span-4 group hover:bg-accentColor cursor-pointer h-[274px] sm:h-[300px] bg-gray-300 rounded-lg flex flex-col transition-all"
          >
            <Image
              loading="lazy"
              width={500}
              height={60}
              src={project.image}
              alt={project.title}
              className="rounded-t-lg aspect-square sm:aspect-auto w-full h-44 object-center group-hover:contrast-125"
            />
            <div className="flex   flex-col items-start p-3">
              <div className="text-lg group-hover:text-white group-hover:font-bold font-semibold text-black">
                {project.title}
              </div>
              <div className="text-sm group-hover:text-gray-300 text-gray-500">
                {project.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
