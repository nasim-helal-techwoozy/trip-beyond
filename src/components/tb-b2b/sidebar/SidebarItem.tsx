"use client";

import { IconSidebar } from "@/interfaces/icons";
import { cn } from "keep-react/utils";

import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

interface PropsTypes {
  item: any;
  className?: string;
}

const SidebarItem: React.FC<PropsTypes> = ({ item, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Function to determine if the current item or any of its children are active
  const isItemActive = (item: any): boolean => {
    if (item.route === pathname) return true;
    if (item.children)
      return item.children.some((child: any) => isItemActive(child));
    return false;
  };

  // Automatically open the item if it or any of its children are active
  useEffect(() => {
    if (isItemActive(item)) setIsOpen(true);
  }, [pathname]);

  // Handle item click: either navigate or toggle open state
  const handleItemClick = () => {
    if (!item.children) {
      router.push(item.route);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  // Check if the current item is the most child active item (has no active children)
  const isMostChildActive =
    isItemActive(item) && !item.children?.some(isItemActive);

  // Check if the current item is a most child element (has no children)
  const isMostChild = !item.children || item.children.length === 0;

  return (
    <>
      {/* Render button for parent and child items */}
      <button
        onClick={handleItemClick}
        className={cn(
          "group relative flex w-full items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4",
          { "bg-graydark dark:bg-meta-4 h-13": isMostChildActive },
          className
        )}
      >
        {/* Conditionally render icon for non-child items */}
        <span
          className={cn("mr-2 text-2xl text-white", {
            invisible: isMostChild && item.level > 1,
          })}
        >
          {item.icon}
        </span>

        <span className="capitalize text-nowrap text-white">{item.label}</span>

        {/* Render down arrow for items with children */}
        {item.children && (
          <IconSidebar.DownArrow
            className={cn("ml-auto text-white rotate-[-90deg] duration-300", {
              "rotate-[0deg]": isOpen,
            })}
          />
        )}
      </button>

      {/* Render children items if the parent is open */}
      {item.children && isOpen && (
        <div className="pl-[10px]">
          {item.children.map((child: any) => (
            <SidebarItem key={child.route} className="!pl-3" item={child} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
