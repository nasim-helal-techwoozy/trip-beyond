import { IconSidebar } from "@/interfaces/icons";
import { MenuItem } from "../MenuList";

let prevLink = "/settings";
export const settingsChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "portal",
    route: prevLink + "/portal",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 2,
    label: "notifications",
    route: prevLink + "/notifications",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 2,
    label: "user",
    route: prevLink + "/user",
    icon: <IconSidebar.SearchEngine />,
  },
];
