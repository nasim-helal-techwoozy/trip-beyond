import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { useRouter } from "next/navigation";
import { CaretDown, ClipboardText, Percent } from "phosphor-react";

const PartialPayment = () => {
  const router = useRouter();
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse className="text-black font-semibold">
          <div className="flex items-center gap-3">
            <span>
              <Percent size={25} />
            </span>
            <span>Partial Payment</span>
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem
            onClick={() => router.push("/partial-payment/due-list")}
            className="text-black font-semibold"
          >
            <ClipboardText size={25} />
            Due List
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/partial-payment/paid-list")}
            className="text-black font-semibold"
          >
            <ClipboardText size={25} />
            Paid List
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default PartialPayment;
