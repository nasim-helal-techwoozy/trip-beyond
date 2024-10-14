import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
import { useRouter } from "next/navigation";
import {
  Airplane,
  ArrowClockwise,
  ArrowUUpLeft,
  CaretDown,
  ClockCounterClockwise,
  CreditCard,
  HourglassMedium,
  MapPin,
  Users,
  X,
} from "phosphor-react";

const BookingHistory = () => {
  const router = useRouter();
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse className="text-black font-semibold">
          <div className="flex items-center gap-3">
            <ClockCounterClockwise size={25} />
            Booking History
          </div>
          <span className="group-open:-rotate-180">
            <CaretDown size={20} />
          </span>
        </SidebarCollapse>

        <SidebarDropdownList>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse className="text-black font-semibold">
                <div className="flex items-center gap-3">
                  <Airplane size={25} />
                  Flight
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem
                  onClick={() => router.push("/booking-history/flight/on-hold")}
                  className="justify-start text-black font-semibold"
                >
                  On-Hold
                </SidebarItem>
                <SidebarItem
                  onClick={() => router.push("/booking-history/flight/issued")}
                  className="justify-start text-black font-semibold"
                >
                  Issued
                </SidebarItem>
                <SidebarItem
                  onClick={() =>
                    router.push("/booking-history/flight/canceled-booking")
                  }
                  className="justify-start text-black font-semibold"
                >
                  Canceled Booking
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse className="text-black font-semibold">
                <div className="flex items-center gap-3">
                  <X size={25} />
                  Void
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem
                  onClick={() => router.push("/booking-history/void-history")}
                  className="justify-start text-black font-semibold"
                >
                  History
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse className="text-black font-semibold">
                <div className="flex items-center gap-3">
                  <ArrowUUpLeft size={25} />
                  Refund
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem
                  onClick={() => router.push("/booking-history/refund-history")}
                  className="justify-start text-black font-semibold"
                >
                  History
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse className="text-black font-semibold">
                <div className="flex items-center gap-3">
                  <ArrowClockwise size={25} />
                  Reissue
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem
                  onClick={() =>
                    router.push("/booking-history/reissue-history")
                  }
                  className="justify-start text-black font-semibold"
                >
                  History
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/booking-history/hotel")}
            className="text-black font-semibold"
          >
            <HourglassMedium size={25} />
            Hotel
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/booking-history/visa")}
            className="text-black font-semibold"
          >
            <CreditCard size={25} />
            Visa
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/booking-history/tour-package")}
            className="text-black font-semibold"
          >
            <MapPin size={25} />
            Tour Package
          </SidebarItem>
          <SidebarItem
            onClick={() => router.push("/booking-history/group-tour")}
            className="text-black font-semibold"
          >
            <Users size={25} />
            Group tour
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default BookingHistory;
