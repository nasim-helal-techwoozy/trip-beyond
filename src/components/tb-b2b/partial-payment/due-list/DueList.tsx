"use client";
import { KeepTable } from "@/components/keep-react/KeepTable";
import React from "react";

// Interface for DueList table data
interface DueListInterface {
  agentName: string;
  agentCode: string;
  bookingId: string;
  pnr: string;
  bookingDate: string;
  airline: string;
  totalPrice: string;
  percentage: string;
  paidAmount: string;
  dueAmount: string;
  remainingDay: string;
  lastPaymentDate: string;
  action: string;
}

// Sample data for DueList
export const DueListData: DueListInterface[] = [
  {
    agentName: "Trip Beyond",
    agentCode: "TC01845",
    bookingId: "TCL638633634542475990",
    pnr: "67R5TQ",
    bookingDate: "01-10-2024",
    airline: "SQ",
    totalPrice: "60,063.98",
    percentage: "25%",
    paidAmount: "15,015",
    dueAmount: "45,048.98",
    remainingDay: "0",
    lastPaymentDate: "08-10-2024",
    action: "Edit Delete",
  },
];

// DueList Component
const DueList = () => {
  const DueListFields: string[] = [
    "Agent Name",
    "Agent Code",
    "Booking ID",
    "PNR",
    "Booking Date",
    "Airline",
    "Total Price",
    "Percentage",
    "Paid Amount",
    "Due Amount",
    "Remaining Day",
    "Last Payment Date",
    "Action",
  ];

  return (
    <div className="mx-5">
      <KeepTable
        tableTitle="Due List"
        headerItems={DueListFields}
        data={DueListData}
      />
    </div>
  );
};

export default DueList;
