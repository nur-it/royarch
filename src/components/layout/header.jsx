"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Logo from "./Logo";
import Sidebar from "./sidebar";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "bg-night fixed top-0 left-25 z-50 flex h-25 w-[310px] items-center justify-center",
          "transition-transform duration-300 ease-in-out",
          isMenuOpen ? "lg:-translate-x-25" : "-translate-x-0",
        )}
      >
        <Logo />
      </div>
      <aside className="fixed top-0 left-0 z-50 w-25 lg:h-screen">
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </aside>
    </>
  );
};

export default HeaderSection;
