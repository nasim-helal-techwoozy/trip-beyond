"use client"
import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";

interface Propstypes {
  shops?: number;
  airlines?: number;
  title: string;
  price: string;
  type: "stops" | "airlines";
}
const FilterChecker: React.FC<Propstypes> = ({
  shops,
  airlines,
  title,
  price,
  type,
}) => {
  const selectedStops = useStoreState(
    (state: any) => state.oneWayFilter?.stops?.value,
  );
  const selectedAirlines = useStoreState(
    (state: any) => state.oneWayFilter?.airlines?.value,
  );

  const toggleStop = useStoreActions(
    (actions: any) => actions.oneWayFilter?.stops?.toggleStops,
  );
  const toggleAirline = useStoreActions(
    (actions: any) => actions.oneWayFilter?.airlines?.toggleAirline,
  );

  const isChecked = () => {
    if (type === "stops") {
      return selectedStops?.includes(title);
    }
    if (type === "airlines") {
      return selectedAirlines?.includes(title);
    }
    return false;
  };

  const handleChange = () => {
    if (type === "stops") {
      toggleStop(title);
    } else if (type === "airlines") {
      toggleAirline(title);
    }
  };

  return (
    <div className="flex gap-1 px-2 py-1">
      <input
        type="checkbox"
        name={type}
        checked={isChecked()}
        onChange={handleChange}
        className="mr-1"
      />
      <span className="text-sm">{shops ?? airlines}</span>
      <span className="text-sm">{title}</span>
      <span className="text-sm">{airlines}</span>
      <span className="ml-auto text-sm">{price}</span>
    </div>
  );
};

export default FilterChecker;
