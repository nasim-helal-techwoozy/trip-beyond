import { IconSidebar } from "@/interfaces/icons";
import { MenuItem } from "../../MenuList";
import { BH_flightChildrenLists } from "./flight/child";
import { BH_voidChildrenLists } from "./void/child";
import { BH_refundChildrenLists } from "./refund/child";
import { BH_reissueChildrenLists } from "./reissue/child";

export const bookingHistory = "/booking-history";

export const bookingHistoryChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "flight",
    route: bookingHistory + "/flight",
    icon: <IconSidebar.Flight className="rotate-[45deg]" />,
    children: BH_flightChildrenLists,
  },
  {
    level: 2,
    label: "void",
    route: bookingHistory + "/void",
    icon: <IconSidebar.Void />,
    children: BH_voidChildrenLists,
  },
  {
    level: 2,
    label: "refund",
    route: bookingHistory + "/refund",
    icon: <IconSidebar.Refund />,
    children: BH_refundChildrenLists,
  },
  {
    level: 2,
    label: "reissue",
    route: bookingHistory + "/reissue",
    icon: <IconSidebar.Reissue />,
    children: BH_reissueChildrenLists,
  },
  {
    level: 2,
    label: "hotel",
    route: bookingHistory + "/hotel",
    icon: <IconSidebar.Hotel />,
  },
  {
    level: 2,
    label: "visa",
    route: bookingHistory + "/visa",
    icon: <IconSidebar.Visa />,
  },
  {
    level: 2,
    label: "tour package",
    route: bookingHistory + "/tour-package",
    icon: <IconSidebar.TourPackage />,
  },
  {
    level: 2,
    label: "group tour",
    route: bookingHistory + "/group-tour",
    icon: <IconSidebar.GroupTour />,
  },
];
