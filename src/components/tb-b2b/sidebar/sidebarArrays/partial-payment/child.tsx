import { IconSidebar } from "@/interfaces/icons";
import { MenuItem } from "../MenuList";

let prevLink = "/partial-payment";
export const partialPaymentChildrenMenuList: MenuItem[] = [
  {
    level: 2,
    label: "Instant payment",
    route: prevLink + "/due-list",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 2,
    label: "Submit payment request",
    route: prevLink + "/paid-list",
    icon: <IconSidebar.SearchEngine />,
  },
  {
    level: 3,
    label: "Bank List",
    route: prevLink + "/bank-lists",
    icon: <IconSidebar.SearchEngine />,
  },
];
