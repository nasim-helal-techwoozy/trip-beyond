import { IconSidebar } from "@/interfaces/icons";
import { MenuItem } from "../MenuList";

let prevLink = "/payments";
export const paymentsChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "bank lists",
    route: prevLink + "/bank-lists",
    icon: <IconSidebar.SearchEngine />,
  },
];
