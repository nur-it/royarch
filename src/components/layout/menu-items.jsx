"use client";
import { menuItems } from "@/mocks/menu-items.mocks";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const MenuItems = ({
  activeItem,
  setActiveItem,
  expandedItem,
  setExpandedItem,
  toggleExpanded,
  handleSubItemClick,
  closeMenu,
}) => {
  const handleMainItemClick = (item) => {
    if (item.children?.length > 0) {
      toggleExpanded(item.id);
    } else {
      setActiveItem(item.id);
      setExpandedItem(null);
      closeMenu?.();
    }
  };

  const handleSubItemClickWithClose = (parentId, subItemId) => {
    handleSubItemClick(parentId, subItemId);
    closeMenu?.();
  };

  const isItemActive = (item) => {
    return (
      activeItem === item.id &&
      !item.children?.some((child) => child.id === activeItem)
    );
  };

  const isItemHighlighted = (item) => {
    return isItemActive(item) || expandedItem === item.id;
  };

  return (
    <div className="bg-quaternary border-darker/30 border-r text-white">
      <div className="custom_scrollbar relative max-h-[calc(100vh-100px)] overflow-x-hidden overflow-y-auto px-[30px] py-10">
        {menuItems.map((item) => (
          <div key={item.id} className="relative">
            {/* Horizontal separator */}
            <div className="bg-tertiary absolute top-0 right-0 left-0 h-px" />

            {/* Main Menu Item */}
            {item.children?.length > 0 ? (
              <button
                className="group relative flex w-full cursor-pointer items-center transition-all duration-300 ease-in-out"
                onClick={() => handleMainItemClick(item)}
                aria-expanded={expandedItem === item.id}
                aria-label={`Toggle ${item.label} menu`}
              >
                <MenuItemContent
                  item={item}
                  isHighlighted={isItemHighlighted(item)}
                />
              </button>
            ) : (
              <Link
                href={item.href}
                className="group relative flex cursor-pointer items-center transition-all duration-300 ease-in-out"
                onClick={() => handleMainItemClick(item)}
              >
                <MenuItemContent
                  item={item}
                  isHighlighted={isItemHighlighted(item)}
                />
              </Link>
            )}

            {/* Submenu */}
            {item.children?.length > 0 && (
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedItem === item.id
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-tertiary mx-2.5 border-x bg-[#6b6b6b]">
                  {item.children.map((subItem) => (
                    <div key={subItem.id} className="relative">
                      {/* Grid alignment line */}
                      <div className="absolute top-0 right-0 left-0 h-px bg-gray-100 opacity-25" />

                      <Link
                        href={subItem.href}
                        className={`relative flex w-full cursor-pointer items-center py-4 transition-all duration-300 ease-in-out ${
                          activeItem === subItem.id ? "" : ""
                        }`}
                        onClick={() =>
                          handleSubItemClickWithClose(item.id, subItem.id)
                        }
                      >
                        {/* Submenu active indicator */}
                        {activeItem === subItem.id && (
                          <div className="bg-primary absolute top-0 right-0 bottom-0 w-0.5 transition-all duration-300 ease-in-out" />
                        )}

                        {/* Vertical grid line */}

                        <div className="flex w-full items-center justify-end px-8">
                          <span
                            className={`text-base font-semibold tracking-wide uppercase transition-all duration-300 ease-in-out ${
                              activeItem === subItem.id
                                ? "text-red-400"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {subItem.label}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Extracted component for menu item content
const MenuItemContent = ({ item, isHighlighted, expandedItem }) => (
  <>
    <div className="bg-tertiary absolute top-0 right-2.5 z-0 h-full w-px scale-125" />
    <div className="bg-tertiary absolute top-0 left-2.5 z-0 h-full w-px scale-125" />

    {/* Last item separator */}
    {item.id === menuItems[menuItems.length - 1].id && (
      <div className="bg-tertiary absolute bottom-0 left-0 z-0 h-px w-full" />
    )}

    {/* Content */}
    <div className="group after:bg-primary relative flex w-full items-center justify-between py-9 pr-8 transition-all duration-300 ease-in-out after:absolute after:right-[-40px] after:z-0 after:h-1 after:w-40 after:translate-x-full after:rounded-3xl after:transition-transform after:duration-500 after:ease-in-out after:content-[''] hover:after:translate-x-0">
      <div className="flex items-center space-x-8">
        {/* Number */}
        <span
          className={`ml-2.5 inline-flex items-center justify-center text-xl font-bold text-white/10 transition-all duration-300 ease-in-out group-hover:text-white`}
        >
          <span className="bg-tertiary inline-block h-px w-6 transition-all duration-300 ease-in-out group-hover:w-10" />
          <span className="transition-all duration-300 ease-in-out group-hover:translate-x-1">
            {item.number}
          </span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Label */}
        <span className="bg-tertiary inline-block h-px w-10 transition-all duration-300 ease-in-out group-hover:bg-transparent" />
        <span
          className={`relative z-10 text-base font-semibold tracking-wider transition-all duration-300 ease-in-out`}
        >
          {item.label}
        </span>

        <ChevronDown
          className={`bg-tertiary/50 absolute right-0.5 z-10 h-3 w-4 border border-[#9c9c9c] text-white transition-all duration-500 ease-in-out backdrop:blur-[1px] ${expandedItem === item.id ? "rotate-180" : ""}`}
        />
      </div>
    </div>
  </>
);

export default MenuItems;
