import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import Link from "next/link";
import { CaretDown, HourglassMedium, Lock, User } from "phosphor-react";

const Profile = () => {
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse>
          <div className="flex items-center gap-3">
            <span>
              <User size={25} />
            </span>
            <span>Profile</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem>
            <User size={25} />
            <Link href="/profile/user">
              <span>User</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <HourglassMedium size={25} />
            <Link href="/profile/company">
              <span>Company</span>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Lock size={25} />
            <Link href="/profile/auth">
              <span>Authentication</span>
            </Link>
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default Profile;
