"use client";

import { IconSearchEngine } from "@/interfaces/icons";
import React, { useState, useEffect } from "react";
import FlightInput from "./FlightInput";
import {
  defaultAirports,
  restAirports,
  defaultOriginAirport,
  defaultDestinationAirport,
} from "@/assets/data/airports";
interface PropsTypes {
  onOriginChange: (origin: string) => void;
  onDestinationChange: (destination: string) => void;
}

const FlightInputsSearch: React.FC<PropsTypes> = ({
  onOriginChange,
  onDestinationChange,
}) => {
  const [origin, setOrigin] = useState(defaultOriginAirport);
  const [destination, setDestination] = useState(defaultDestinationAirport);
  const [originSearchKey, setOriginSearchKey] = useState("");
  const [destinationSearchKey, setDestinationSearchKey] = useState("");

  const [originAirportLists, setOriginAirportLists] = useState<any>([]);
  const [destinationAirportLists, setDestinationAirportLists] = useState<any>(
    [],
  );

  const [restOriginAirportLists, setRestOriginAirportLists] = useState<any>([]);
  const [restDestinationAirportLists, setRestDestinationAirportLists] =
    useState<any>([]);

  useEffect(() => {
    /**====================ORIGIN AIRPORT LIST======================== */
    const filteredOriginLists = defaultAirports.filter(
      (item) => item.value !== destination.value, // Exclude the selected destination
    );
    setOriginAirportLists(filteredOriginLists);

    //rest
    const filteredRestOriginLists = restAirports.filter(
      (item) => item.value !== destination.value, // Exclude the selected destination
    );
    setRestOriginAirportLists(filteredRestOriginLists);

    /**====================DESTINATION AIRPORT LIST=================== */
    const filteredDestinationLists = defaultAirports.filter(
      (item) => item.value !== origin.value, // Exclude the selected origin
    );

    setDestinationAirportLists(filteredDestinationLists);
    //rest
    const filteredRestDestinationLists = restAirports.filter(
      (item) => item.value !== origin.value, // Exclude the selected destination
    );
    setRestDestinationAirportLists(filteredRestDestinationLists);
    /**===============ORIGIN SEARCH KEY========================== */
    if (originSearchKey) {
      const newOriginLists = filteredOriginLists.filter((item: any) => {
        const label = item?.label?.toLowerCase();
        const value = item?.value?.toLowerCase();
        return (
          label?.startsWith(originSearchKey) ||
          value?.startsWith(originSearchKey)
        );
      });

      setOriginAirportLists(newOriginLists);

      if (newOriginLists.length === 0) {
        const myNewLists = restOriginAirportLists.filter((item: any) => {
          const label = item?.label?.toLowerCase();
          const value = item?.value?.toLowerCase();
          return (
            label?.startsWith(originSearchKey) ||
            value?.startsWith(originSearchKey)
          );
        });

        setOriginAirportLists(myNewLists);
      }
    }

    /**===============DESTINATION SEARCH KEY====================== */
    if (destinationSearchKey) {
      const newDestinationLists = filteredDestinationLists.filter(
        (item: any) => {
          const label = item?.label?.toLowerCase();
          const value = item?.value?.toLowerCase();
          return (
            label?.startsWith(destinationSearchKey) ||
            value?.startsWith(destinationSearchKey)
          );
        },
      );
      setDestinationAirportLists(newDestinationLists);

      if (newDestinationLists.length === 0) {
        const myNewLists = restDestinationAirportLists.filter((item: any) => {
          const label = item?.label?.toLowerCase();
          const value = item?.value?.toLowerCase();
          return (
            label?.startsWith(destinationSearchKey) ||
            value?.startsWith(destinationSearchKey)
          );
        });

        setDestinationAirportLists(myNewLists);
      }
    }
  }, [origin, destination, originSearchKey, destinationSearchKey]);

  return (
    <div className="relative flex items-center gap-5">
      <FlightInput
        label="From"
        id="from"
        options={
          originAirportLists.length ? originAirportLists : defaultAirports
        }
        value={origin}
        onInputChange={(item: string) => {
          setOriginSearchKey(item?.toLowerCase());
        }}
        onChange={(option: any) => {
          setOrigin(option);
          onOriginChange(option.value);
        }}
      />

      <SwapBtn
        onClick={() => {
          setDestination(origin);
          setOrigin(destination);
        }}
      />

      <FlightInput
        label="To"
        id="to"
        options={
          destinationAirportLists.length
            ? destinationAirportLists
            : defaultAirports
        }
        value={destination}
        onInputChange={(item: string) => {
          setDestinationSearchKey(item?.toLowerCase());
        }}
        onChange={(option: any) => {
          setDestination(option);
          onDestinationChange(option.value);
        }}
      />
    </div>
  );
};

export default FlightInputsSearch;

/** ======================SWAP BUTTON================== */

const SwapBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="absolute left-[50%] top-[45%] z-1 -translate-x-[50%] rounded-full bg-slate-300 p-1.5"
      onClick={onClick}
    >
      <IconSearchEngine.Swap className="text-xl" />
    </button>
  );
};
