import { IconSidebar } from "@/interfaces/icons";
import { MenuItem } from "../../MenuList";

let prevLink = "/booking-history/refund";
export const BH_refundChildrenLists: MenuItem[] = [
  {
    level: 3,
    label: "history",
    route: prevLink + "/history",
    icon: <IconSidebar.SearchEngine />,
  },
  // {
  //   level: 3,
  //   label: "quotation",
  //   route: prevLink + "/quotation",
  //   icon: <IconSidebar.SearchEngine />,
  // },
];
