"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Logo from "./Logo";
import MenuItems from "./menu-items";
import Sidebar from "./sidebar";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative overflow-x-hidden">
      <div
        className={cn(
          "bg-night fixed top-0 left-25 z-[60] flex h-25 w-full items-center pl-4 md:pl-8 lg:w-[310px] lg:justify-center lg:pl-0",
          "transition-transform duration-300 ease-in-out",
          isMenuOpen ? "lg:-translate-x-25" : "-translate-x-0",
        )}
      >
        <Logo />
      </div>
      <aside className="fixed top-0 left-0 z-50 w-25 lg:h-screen">
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </aside>

      <div
        className={cn(
          "fixed top-25 w-full transition-transform duration-300 ease-in-out lg:left-25 lg:w-[400px]",
          isMenuOpen ? "z-40 translate-x-0" : "z-0 -translate-x-full",
        )}
      >
        <MenuItems />
      </div>
    </div>
  );
};

export default HeaderSection;
