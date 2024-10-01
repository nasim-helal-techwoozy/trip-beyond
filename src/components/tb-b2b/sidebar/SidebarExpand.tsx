"use client";
import { Sidebar, SidebarBody, SidebarItem, SidebarList } from "keep-react";
import { cn } from "keep-react/utils";
import {
  ClockCounterClockwise,
  CreditCard,
  MagnifyingGlass,
  Share,
} from "phosphor-react";
import BookingHistory from "./items/booking-history";
import PartialPayment from "./items/partial-payment";
import Passengers from "./items/passengers";
import Profile from "./items/profile";
import Settings from "./items/settings";
import Support from "./items/support";

const SidebarExpand = ({ className }: any) => {
  return (
    <Sidebar
      className={cn(
        "shadow-none border-none rounded-none tb-sidebar",
        className
      )}
    >
      <SidebarBody>
        <SidebarList className="space-y-0.5">
          <SidebarItem>
            <MagnifyingGlass size={25} />
            Search
          </SidebarItem>

          <SidebarItem>
            <Share size={25} />
            Share PNR
          </SidebarItem>

          <BookingHistory />

          <Passengers />

          <PartialPayment />

          <Support />

          <Profile />

          <Settings />

          <SidebarItem>
            <ClockCounterClockwise size={25} />
            Transaction history
          </SidebarItem>

          <SidebarItem>
            <CreditCard size={25} />
            Payment
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarExpand;
