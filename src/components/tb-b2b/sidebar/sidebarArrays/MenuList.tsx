import { ReactNode } from "react";
import { IconSidebar } from "@/interfaces/icons";
import { bookingHistoryChildrenMenuList } from "./booking-history/child";
import { partialPaymentChildrenMenuList } from "./partial-payment/child";
import { passengerChildrenMenuList } from "./passengers/child";
import { paymentsChildrenMenuList } from "./payments/child";
import { profileChildrenMenuList } from "./profile/child";
import { settingsChildrenMenuList } from "./settings/child";
import { supportChildrenMenuList } from "./support/child";

export interface MenuItem {
  level: number;
  label: string;
  route?: string;
  icon?: ReactNode;
  children?: MenuItem[];
}

export interface MenuGroup {
  name: string;
  menuItems: MenuItem[];
}

export const MenuLists: MenuGroup[] = [
  {
    name: "MENU",
    menuItems: [
      {
        level: 1,
        label: "Search Engine",
        route: "/search-engine",
        icon: <IconSidebar.SearchEngine />,
      },
      {
        level: 1,
        label: "Share PNR",
        route: "/share-pnr",
        icon: <IconSidebar.SharePnr />,
      },
      {
        level: 1,
        label: "booking history",
        route: "/booking-history",
        icon: <IconSidebar.BookingHistory />,
        children: bookingHistoryChildrenMenuList,
      },
      {
        level: 1,
        label: "passengers",
        route: "/passengers",
        icon: <IconSidebar.AddPassenger />,
        children: passengerChildrenMenuList,
      },
      {
        level: 1,
        label: "Payment",
        route: "/partial-payment",
        icon: <IconSidebar.PartialPayment />,
        children: partialPaymentChildrenMenuList,
      },
      {
        level: 1,
        label: "support",
        route: "/support",
        icon: <IconSidebar.Support />,
        children: supportChildrenMenuList,
      },
      {
        level: 1,
        label: "profile",
        route: "/profile",
        icon: <IconSidebar.Profile />,
        children: profileChildrenMenuList,
      },
      {
        level: 1,
        label: "settings",
        route: "/settings",
        icon: <IconSidebar.Settings />,
        children: settingsChildrenMenuList,
      },
      {
        level: 1,
        label: "transactions history",
        route: "/transactions-history",
        icon: <IconSidebar.Transaction />,
      },
      {
        level: 1,
        label: "payments",
        route: "/payments",
        icon: <IconSidebar.Payment />,
        children: paymentsChildrenMenuList,
      },
    ],
  },
];
