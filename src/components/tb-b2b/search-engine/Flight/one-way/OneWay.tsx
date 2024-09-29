"use client";

import { useState } from "react";
import FlightInputsSearch from "../../FlightInputsSearch";

const OneWay = () => {
  const [flightSearchData, setFlightSearchData] = useState<any>({
    origin: "",
    destination: "",
    departureDate: new Date(),
  });
  return (
    <div>
      <FlightInputsSearch
        onOriginChange={(origin) => {
          setFlightSearchData({ ...flightSearchData, origin: origin });
        }}
        onDestinationChange={(destination) => {
          setFlightSearchData({
            ...flightSearchData,
            destination: destination,
          });
        }}
      />
    </div>
  );
};

export default OneWay;
