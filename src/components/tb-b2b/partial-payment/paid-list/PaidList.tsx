"use client";
import { KeepTable } from "@/components/keep-react/KeepTable";
import React from "react";

// Interface for PaidList table data
interface PaidListInterface {
  agentName: string;
  agentCode: string;
  bookingId: string;
  pnr: string;
  bookingDate: string;
  airline: string;
  totalPrice: string;
  percentage: string;
  paidAmount: string;
}

// Sample data for PaidList
export const PaidListData: PaidListInterface[] = [
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
  },
];

// PaidList Component
const PaidList = () => {
  const PaidListFields: string[] = [
    "Agent Name",
    "Agent Code",
    "Booking ID",
    "PNR",
    "Booking Date",
    "Airline",
    "Total Price",
    "Percentage",
    "Paid Amount",
  ];

  return (
    <div className="mx-5">
      <KeepTable
        tableTitle="Paid List"
        headerItems={PaidListFields}
        data={PaidListData}
      />
    </div>
  );
};

export default PaidList;
