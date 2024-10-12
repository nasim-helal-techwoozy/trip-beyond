import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { useRouter } from "next/navigation";
import { CaretDown, Gear, Globe, Notification, User } from "phosphor-react";

const Settings = () => {
  const router = useRouter();
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse className="text-black font-semibold">
          <div className="flex items-center gap-3">
            <span>
              <Gear size={25} />
            </span>
            <span>Settings</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem
            onClick={() => router.push("/settings/portal")}
            className="text-black font-semibold"
          >
            <Globe size={25} />
            Portal
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/settings/notification")}
            className="text-black font-semibold"
          >
            <Notification size={25} />
            Notification
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/settings/user")}
            className="text-black font-semibold"
          >
            <User size={25} />
            User
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default Settings;
