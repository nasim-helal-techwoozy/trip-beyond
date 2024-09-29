import { IconSidebar } from "@/interfaces/icons";
import { MenuItem } from "../../MenuList";

let prevLink = "/booking-history/flight";
export const BH_flightChildrenLists: MenuItem[] = [
  {
    level: 3,
    label: "on hold",
    route: prevLink + "/on-hold",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 3,
    label: "issued",
    route: prevLink + "/issued",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 3,
    label: "canceled booking",
    route: prevLink + "/canceled-booking",
    icon: <IconSidebar.SearchEngine />,
  },
];
