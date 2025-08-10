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
            "absolute right-4 bottom-6 z-10 flex h-8 w-8 items-center justify-center bg-white/20 backdrop-blur-sm transition-all duration-500",
            isHovered
              ? "translate-x-0 transform opacity-100"
              : "translate-x-12 transform opacity-0",
          )}
        >
          <ProjectIcon className="h-4 w-4 text-white" />
        </Link>

        {/* Category and Title */}
        <div className="absolute right-0 bottom-0 left-0 p-4">
          <div className="mb-2">
            <span className="inline-block rounded bg-blue-400/20 px-2 py-1 text-xs font-medium text-blue-400">
              {item.category.toUpperCase()}
            </span>
          </div>
          <h3 className="text-sm leading-tight font-medium text-white">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
