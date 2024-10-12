import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { useRouter } from "next/navigation";
import { CaretDown, Headset, Phone, Question, Ticket } from "phosphor-react";

const Support = () => {
  const router = useRouter();
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse className="text-black font-semibold">
          <div className="flex items-center gap-3">
            <span>
              <Headset size={25} />
            </span>
            <span>Support</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem
            onClick={() => router.push("/support/contact")}
            className="text-black font-semibold"
          >
            <Phone size={25} />
            Contact
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/support/faq")}
            className="text-black font-semibold"
          >
            <Question size={25} />
            FAQ
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/support/ticketing-system")}
            className="text-black font-semibold"
          >
            <Ticket size={25} />
            Ticketing system
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default Support;
