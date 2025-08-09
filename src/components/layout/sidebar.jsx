"use client";
import { sidebarConfig, socialLinks } from "@/mocks/sidebar";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="bg-night h-full w-full text-white">
      <div className="flex h-full flex-col items-center justify-between">
        {/* Top - Menu Button */}
        <div className="bg-primary flex h-25 w-full items-center justify-center">
          <button
            className="inline-flex cursor-pointer flex-col justify-center gap-1.5 p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[2px] w-7 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "translate-y-[7px] rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`h-[2px] w-7 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "-translate-y-[1px] -rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "translate-x-3 opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            />
          </button>
        </div>

        {/* Middle - Social Links */}
        <div className="bg-darker flex h-full max-h-[501px] w-full flex-col items-center justify-between py-[30px]">
          <div className="mx-auto h-56 w-[1px] bg-[#4c4c4c]" />
          <ul className="flex flex-col items-center justify-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }, idx) => (
              <li key={idx}>
                <Link
                  href={href}
                  aria-label={label}
                  className="group hover:bg-primary hover:border-primary inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#4c4c4c] bg-transparent text-white/40 transition-all duration-300 ease-in-out"
                >
                  <Icon className="size-4 transition-all group-hover:text-white" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto h-10 w-[1px] bg-[#4c4c4c]" />
        </div>

        {/* Bottom - Vertical Text */}
        <div className="relative h-[350px] w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-180">
            <p
              className="text-17 text-text-light cursor-text whitespace-nowrap select-text"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {sidebarConfig.copyright}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
