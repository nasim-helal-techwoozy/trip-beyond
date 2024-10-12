"use client";
import { Sidebar, SidebarBody, SidebarItem, SidebarList } from "keep-react";
import { cn } from "keep-react/utils";
import {
  ClockCounterClockwise,
  CreditCard,
  Gear,
  Headset,
  MagnifyingGlass,
  Percent,
  Share,
  Stack,
  User,
  Users,
} from "phosphor-react";

const SidebarCollapse = ({ className }: any) => {
  return (
    <Sidebar
      className={cn(
        "w-full shadow-none rounded-none border-none tb-sidebar",
        className
      )}
    >
      <SidebarBody className="space-y-4">
        <SidebarList className="space-y-1 text-secondary-main">
          <SidebarItem className="text-black font-semibold">
            <MagnifyingGlass size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <Share size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <ClockCounterClockwise size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <Users size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <Percent size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <Headset size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <User size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <ClockCounterClockwise size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <Gear size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <Stack size={25} />
          </SidebarItem>

          <SidebarItem className="text-black font-semibold">
            <CreditCard size={25} />
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarCollapse;
