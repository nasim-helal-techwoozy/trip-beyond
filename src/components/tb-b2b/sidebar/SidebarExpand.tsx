"use client";
import { Sidebar, SidebarBody, SidebarItem, SidebarList } from "keep-react";
import { cn } from "keep-react/utils";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <Sidebar
      className={cn(
        "shadow-none border-none rounded-none tb-sidebar",
        className
      )}
    >
      <SidebarBody>
        <SidebarList className="space-y-0.5">
          <SidebarItem
            onClick={() => router.push("/search")}
            className="text-black font-semibold"
          >
            <MagnifyingGlass size={25} />
            Search
          </SidebarItem>

          <SidebarItem
            onClick={() => router.push("/share-pnr")}
            className="text-black font-semibold"
          >
            <Share size={25} />
            Share PNR
          </SidebarItem>

          <BookingHistory />

          <Passengers />

          <SidebarItem
            onClick={() => router.push("/payment/submit-payment-request")}
            className="text-black font-semibold"
          >
            <CreditCard size={25} />
            Payment
          </SidebarItem>

          <PartialPayment />

          <SidebarItem
            onClick={() => router.push("/transaction-history")}
            className="text-black font-semibold"
          >
            <ClockCounterClockwise size={25} />
            Transaction history
          </SidebarItem>

          <Profile />

          <Settings />

          <Support />
        </SidebarList>
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarExpand;
