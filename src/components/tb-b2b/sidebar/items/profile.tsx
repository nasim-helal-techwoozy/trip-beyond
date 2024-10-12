import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { useRouter } from "next/navigation";
import { CaretDown, HourglassMedium, Lock, User } from "phosphor-react";

const Profile = () => {
  const router = useRouter();
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse className="text-black font-semibold">
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
          <SidebarItem
            onClick={() => router.push("/profile/user")}
            className="text-black font-semibold"
          >
            <User size={25} />
            User
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/profile/company")}
            className="text-black font-semibold"
          >
            <HourglassMedium size={25} />
            Company
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/profile/auth")}
            className="text-black font-semibold"
          >
            <Lock size={25} />
            Authentication
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default Profile;
