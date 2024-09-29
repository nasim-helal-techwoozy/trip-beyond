"use client";

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { formatOptionLabel as FormatOptionLabel } from "./FlightInput";
import { Label } from "keep-react";

interface PropsTypes {
  label: string;
  required?: boolean;
  onDateChange: (newdate: string) => void;
}

const FlightDate: React.FC<PropsTypes> = ({
  required,
  label,
  onDateChange,
}) => {
  const [date, setDate] = useState<any>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const day = date?.startDate ? new Date(date.startDate).getDate() : "";
  const month = date?.startDate
    ? new Date(date.startDate).toLocaleString("default", { month: "long" })
    : "";
  const weekday = date?.startDate
    ? new Date(date.startDate).toLocaleString("default", { weekday: "long" })
    : "";
  const year = date?.startDate ? new Date(date.startDate).getFullYear() : "";

  const handleDateChange = (date: any) => {
    setDate(date);
    const newDate = new Date(date?.startDate);

    onDateChange(newDate.toISOString());
  };

  return (
    <div>
      {label && <Label>{label}</Label>}

      <div className="relative h-[60px] w-[250px] rounded-[5px] border border-[#CCCCCC] px-3 pt-1 text-xl hover:border-[#0C254D]">
        <FormatOptionLabel
          label={`${weekday}, ${year}`}
          value={day.toString().padStart(2, "0")}
          iso={month}
        />

        <Datepicker
          asSingle={true}
          primaryColor={"blue"}
          value={date}
          onChange={handleDateChange}
          useRange={false}
          toggleClassName="hidden"
          containerClassName="absolute left-0 top-0 z-10 w-full"
          inputClassName="w-full  px-2 py-2 opacity-0 select-none "
        />
      </div>
    </div>
  );
};

export default FlightDate;
