import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { useRouter } from "next/navigation";
import { CaretDown, Checks, Plus, Users } from "phosphor-react";

const Passengers = () => {
  const router = useRouter();
  return (
    <SidebarItem onClick={() => router.push("/search")} dropdown>
      <SidebarDropdown>
        <SidebarCollapse className="text-black font-semibold">
          <div className="flex items-center gap-3">
            <span>
              <Users size={25} />
            </span>
            <span>Passengers</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem
            onClick={() => router.push("/passengers/add-passenger")}
            className="text-black font-semibold"
          >
            <Plus size={25} />
            Add Passenger
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/passengers/quick-passenger")}
            className="text-black font-semibold"
          >
            <Checks size={25} />
            Quick Passenger
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default Passengers;
