"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const ProjectCard = ({ item, delay = 0, onItemClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onItemClick(item);
  };

  return (
    <div
      className="group relative cursor-pointer overflow-hidden bg-gray-800 transition-all duration-500 hover:scale-105 hover:transform"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-70",
          )}
        />

        {/* Arrow Icon with slide animation from right */}
        <div
          className={cn(
            "absolute top-4 right-4 flex h-8 w-8 items-center justify-center bg-white/20 backdrop-blur-sm transition-all duration-500",
            isHovered
              ? "translate-x-0 transform opacity-100"
              : "translate-x-12 transform opacity-0",
          )}
        >
          <ArrowUpRight className="h-4 w-4 text-white" />
        </div>

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
