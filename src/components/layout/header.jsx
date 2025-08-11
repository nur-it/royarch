"use client";
import { cn } from "@/lib/utils";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Logo from "./Logo";
import MenuItems from "./menu-items";
import Sidebar from "./sidebar";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [activeItem, setActiveItem] = useState("home");
  const menuRef = useRef(null);

  // Close menu when any link is clicked
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Effect to handle clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // The sidebar contains the toggle button. If we click on it, we don't want to immediately close the menu.
      const sidebar = document.querySelector("aside");
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        sidebar &&
        !sidebar.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);

  // Toggle menu open/closed
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Toggle expanded state of menu items
  const toggleExpanded = useCallback((itemId) => {
    setExpandedItem((prev) => {
      if (prev === itemId) {
        return null;
      } else {
        setActiveItem(itemId);
        return itemId;
      }
    });
  }, []);

  // Handle sub-item clicks with menu closure
  const handleSubItemClick = useCallback(
    (parentId, subItemId) => {
      setActiveItem(subItemId);
      setExpandedItem(parentId); // Keep parent item expanded
      closeMenu(); // Close menu when any link is clicked
    },
    [closeMenu],
  );

  // Menu handlers object for better organization
  const menuHandlers = useMemo(
    () => ({
      toggleMenu,
      closeMenu,
      toggleExpanded,
      handleSubItemClick,
      setActiveItem,
      setExpandedItem,
      setIsMenuOpen,
    }),
    [toggleMenu, closeMenu, toggleExpanded, handleSubItemClick],
  );

  // Menu state object for better organization
  const menuState = useMemo(
    () => ({
      isMenuOpen,
      activeItem,
      expandedItem,
    }),
    [isMenuOpen, activeItem, expandedItem],
  );

  // Dynamic classes for logo section
  const logoSectionClasses = useMemo(
    () =>
      cn(
        "bg-night fixed top-0 left-25 z-[60] flex h-25 w-full items-center pl-4 md:pl-8 lg:w-[310px] lg:justify-center lg:pl-0",
        "transition-transform duration-300 ease-in-out",
        isMenuOpen ? "lg:-translate-x-25" : "-translate-x-0",
      ),
    [isMenuOpen],
  );

  // Dynamic classes for menu items section
  const menuItemsClasses = useMemo(
    () =>
      cn(
        "fixed top-25 w-full transform transition-transform duration-300 ease-out lg:left-25 lg:w-[400px]",
        isMenuOpen ? "z-40 translate-x-0" : "z-0 -translate-x-full",
      ),
    [isMenuOpen],
  );

  return (
    <div className="relative overflow-x-hidden">
      {/* Logo Section */}
      <div className={logoSectionClasses}>
        <Logo />
      </div>

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-50 w-25 lg:h-screen">
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          toggleMenu={toggleMenu}
        />
      </aside>

      {/* Menu Items */}
      <div ref={menuRef} className={menuItemsClasses}>
        <MenuItems {...menuState} {...menuHandlers} />
      </div>
    </div>
  );
};

export default HeaderSection;