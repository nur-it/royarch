"use client";

import { ProjectIcon } from "@/components/shared/svgs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const ProjectCard = ({ item, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-[427px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full scale-125 object-cover transition-transform duration-700 group-hover:scale-100"
        />

        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-70",
          )}
        />

        {/* Arrow Icon with slide animation from right */}
        <Link
          href={`/projects/${item.slug}`}
          className={cn(
            "bg-darker border-primary hover:text-primary absolute right-10 bottom-20 z-10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-[5px] text-white transition-all duration-500 before:absolute before:inset-0 before:scale-0 before:rounded-full before:bg-white before:transition-transform before:duration-500 hover:before:scale-100",
            isHovered
              ? "translate-x-0 transform opacity-100"
              : "translate-x-12 transform opacity-0",
          )}
        >
          <ProjectIcon className="relative z-10 size-4" />
        </Link>

        {/* Category and Title */}
        <div className="bg-darker absolute right-0 bottom-0 left-0 m-3 p-6">
          <div>
            <span className="text-13 inline-block uppercase">
              {item.category}.
            </span>
          </div>
          <h3 className="hover:text-primary text-base font-semibold text-white transition-all duration-500 ease-in-out">
            <Link href={`/projects/${item.slug}`}>{item.title}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
