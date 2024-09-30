import {
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarItem,
} from "keep-react";
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
import React from "react";

const BookingHistory = () => {
  return (
    <SidebarItem dropdown>
      <SidebarDropdown>
        <SidebarCollapse>
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
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <Airplane size={25} />
                  Flight
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-start">On-Hold</SidebarItem>
                <SidebarItem className="justify-start">Issued</SidebarItem>
                <SidebarItem className="justify-start">
                  Canceled Booking
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <X size={25} />
                  Void
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-start">History</SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <ArrowUUpLeft size={25} />
                  Refund
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-start">History</SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <ArrowClockwise size={25} />
                  Reissue
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>
              <SidebarDropdownList>
                <SidebarItem className="justify-start">History</SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem>
            <HourglassMedium size={25} />
            Hotel
          </SidebarItem>
          <SidebarItem>
            <CreditCard size={25} />
            Visa
          </SidebarItem>
          <SidebarItem>
            <MapPin size={25} />
            Tour Package
          </SidebarItem>
          <SidebarItem>
            <Users size={25} />
            Group tour
          </SidebarItem>
        </SidebarDropdownList>
      </SidebarDropdown>
    </SidebarItem>
  );
};

export default BookingHistory;
