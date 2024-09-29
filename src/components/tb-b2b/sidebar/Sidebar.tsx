import { nanoid } from "nanoid";
import React from "react";
import { MenuLists } from "./sidebarArrays/MenuList";
import SidebarItem from "./SidebarItem";
import { cn } from "keep-react/utils";

const Sidebar = ({ className }: any) => {
  return (
    <div
      className={cn(
        "no-scrollbar bg-metal-800 flex flex-col overflow-y-auto duration-300 ease-linear",
        className
      )}
    >
      <nav className="mt-2 py-4 lg:mt-2 ">
        {MenuLists.map((group) => (
          <div key={nanoid()}>
            <h3 className="text-body-2 text-center bg-metal-900 text-white py-2">
              {group.name}
            </h3>

            <div className="mb-6 flex flex-col gap-1.5">
              {group.menuItems.map((item: any) => {
                return <SidebarItem key={nanoid()} item={item} />;
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
