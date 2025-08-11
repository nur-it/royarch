"use client";
import { menuItems } from "@/mocks/menu-items.mocks";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo } from "react";

const MenuItems = ({
  activeItem,
  setActiveItem,
  expandedItem,
  setExpandedItem,
  toggleExpanded,
  handleSubItemClick,
  closeMenu,
}) => {
  // Helper function to check if item has children
  const hasChildren = useCallback(
    (item) => item.children && item.children.length > 0,
    [],
  );

  // Helper function to check if item is active (considering children)
  const isItemActive = useCallback(
    (item) => {
      return (
        activeItem === item.id &&
        !item.children?.some((child) => child.id === activeItem)
      );
    },
    [activeItem],
  );

  // Helper function to check if item should show active state
  const shouldShowActiveState = useCallback(
    (item) => {
      return isItemActive(item) || expandedItem === item.id;
    },
    [isItemActive, expandedItem],
  );

  // Handle main item click
  const handleMainItemClick = useCallback(
    (item) => {
      if (hasChildren(item)) {
        toggleExpanded(item.id);
      } else {
        setActiveItem(item.id);
        setExpandedItem(null);
        closeMenu && closeMenu(); // Close menu on link click
      }
    },
    [hasChildren, toggleExpanded, setActiveItem, setExpandedItem, closeMenu],
  );

  // Handle sub item click with menu close
  const handleSubItemClickWithClose = useCallback(
    (parentId, subItemId) => {
      handleSubItemClick(parentId, subItemId);
      closeMenu && closeMenu(); // Close menu on link click
    },
    [handleSubItemClick, closeMenu],
  );

  // Get dynamic classes for main items
  const getMainItemClasses = useCallback(
    (item) => {
      const baseClasses =
        "group relative flex h-[80px] cursor-pointer items-center transition-all duration-300 ease-in-out";
      const activeClasses = shouldShowActiveState(item)
        ? "bg-opacity-40 bg-gray-600"
        : "hover:bg-opacity-20 hover:bg-gray-600";

      return `${baseClasses} ${activeClasses}`;
    },
    [shouldShowActiveState],
  );

  // Get dynamic classes for numbers and labels
  const getTextClasses = useCallback(
    (item, isLabel = false) => {
      const baseClasses = isLabel
        ? "text-xl font-bold tracking-wider transition-all duration-300 ease-in-out"
        : "font-mono text-lg font-medium transition-all duration-300 ease-in-out";

      const activeClasses = shouldShowActiveState(item)
        ? "text-red-500"
        : isLabel
          ? "text-white group-hover:text-gray-200"
          : "text-gray-400 group-hover:text-gray-300";

      return `${baseClasses} ${activeClasses}`;
    },
    [shouldShowActiveState],
  );

  // Get dynamic classes for chevron
  const getChevronClasses = useCallback(
    (item) => {
      const baseClasses = "h-5 w-5 transition-all duration-500 ease-in-out";
      const stateClasses =
        expandedItem === item.id
          ? "rotate-180 text-red-500"
          : "text-gray-400 group-hover:text-gray-300";

      return `${baseClasses} ${stateClasses}`;
    },
    [expandedItem],
  );

  // Get dynamic classes for sub items
  const getSubItemClasses = useCallback(
    (subItem) => {
      const baseClasses =
        "relative flex h-[60px] cursor-pointer items-center transition-all duration-300 ease-in-out";
      const activeClasses =
        activeItem === subItem.id
          ? "bg-opacity-40 bg-gray-600"
          : "hover:bg-opacity-20 hover:bg-gray-600";

      return `${baseClasses} ${activeClasses}`;
    },
    [activeItem],
  );

  // Get dynamic classes for sub item text
  const getSubItemTextClasses = useCallback(
    (subItem) => {
      const baseClasses =
        "text-lg font-semibold tracking-wide transition-all duration-300 ease-in-out";
      const activeClasses =
        activeItem === subItem.id
          ? "text-red-400"
          : "text-gray-300 hover:text-white";

      return `${baseClasses} ${activeClasses}`;
    },
    [activeItem],
  );

  // Reusable MenuItemContent component
  const MenuItemContent = ({ item }) => (
    <>
      {/* Perfect border alignment */}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gray-500 opacity-30" />
      <div className="absolute top-0 bottom-0 left-16 w-px bg-gray-500 opacity-20" />

      {/* Active/Selected Indicator */}
      {shouldShowActiveState(item) && (
        <div className="absolute top-0 right-0 bottom-0 w-1 bg-red-500 transition-all duration-500 ease-in-out" />
      )}

      {/* Content */}
      <div className="flex w-full items-center justify-between px-8">
        <div className="flex items-center space-x-8">
          {/* Number */}
          <span className={getTextClasses(item, false)}>{item.number}</span>

          {/* Label */}
          <span className={getTextClasses(item, true)}>{item.label}</span>
        </div>

        {/* Dropdown Arrow */}
        {hasChildren(item) && (
          <ChevronDown className={getChevronClasses(item)} />
        )}
      </div>
    </>
  );

  // Reusable MainMenuItem component
  const MainMenuItem = ({ item }) => {
    const itemClasses = useMemo(
      () => getMainItemClasses(item),
      [item, getMainItemClasses],
    );

    if (hasChildren(item)) {
      return (
        <button
          className={itemClasses}
          onClick={() => handleMainItemClick(item)}
          aria-expanded={expandedItem === item.id}
          aria-label={`Toggle ${item.label} menu`}
        >
          <MenuItemContent item={item} />
        </button>
      );
    }

    return (
      <Link
        href={item.href}
        className={itemClasses}
        onClick={() => handleMainItemClick(item)}
      >
        <MenuItemContent item={item} />
      </Link>
    );
  };

  // Reusable SubMenuItem component
  const SubMenuItem = ({ subItem, parentItem }) => {
    const subItemClasses = useMemo(
      () => getSubItemClasses(subItem),
      [subItem, getSubItemClasses],
    );
    const textClasses = useMemo(
      () => getSubItemTextClasses(subItem),
      [subItem, getSubItemTextClasses],
    );

    return (
      <div key={subItem.id} className="relative">
        {/* Perfect grid alignment */}
        <div className="absolute top-0 right-0 left-0 h-px bg-gray-500 opacity-25" />

        <Link
          href={subItem.href}
          className={subItemClasses}
          onClick={() => handleSubItemClickWithClose(parentItem.id, subItem.id)}
        >
          {/* Submenu active indicator */}
          {activeItem === subItem.id && (
            <div className="absolute top-0 right-0 bottom-0 w-0.5 bg-red-400 transition-all duration-300 ease-in-out" />
          )}

          {/* Vertical grid line for submenus */}
          <div className="absolute top-0 bottom-0 left-16 w-px bg-gray-500 opacity-20" />

          <div className="flex w-full items-center justify-end px-8">
            <span className={textClasses}>{subItem.label}</span>
          </div>
        </Link>
      </div>
    );
  };

  // Reusable Submenu component
  const Submenu = ({ item }) => {
    if (!hasChildren(item)) return null;

    return (
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expandedItem === item.id
            ? "max-h-[800px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-750 bg-opacity-30">
          {item.children.map((subItem) => (
            <SubMenuItem key={subItem.id} subItem={subItem} parentItem={item} />
          ))}
        </div>
      </div>
    );
  };

  // Main render function
  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <div key={item.id} className="relative">
        {/* Horizontal separator */}
        <div className="absolute top-0 right-0 left-0 h-px bg-gray-500 opacity-30" />

        {/* Main Menu Item */}
        <MainMenuItem item={item} />

        {/* Submenu Items */}
        <Submenu item={item} />
      </div>
    ));
  };

  return (
    <div className="bg-quaternary text-white shadow">
      <div className="custom_scrollbar max-h-[calc(100vh-100px)] overflow-y-auto px-[30px] py-10">
        {renderMenuItems()}
      </div>
    </div>
  );
};

export default MenuItems;
