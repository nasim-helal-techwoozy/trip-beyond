import { IconSidebar } from "@/interfaces/icons";
import { MenuItem } from "../MenuList";

let prevLink = "/passengers";
export const passengerChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "add passenger",
    route: prevLink + "/add-passenger",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 2,
    label: "quick passenger",
    route: prevLink + "/quick-passenger",
    icon: <IconSidebar.SearchEngine />,
  },
];
