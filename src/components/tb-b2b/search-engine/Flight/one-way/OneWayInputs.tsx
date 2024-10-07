"use client";
import { defaultAirports, restAirports } from "@/assets/data/airports";
import { IconSearchEngine } from "@/interfaces/icons";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Button } from "keep-react";
import { useEffect, useState } from "react";
import FlightInput from "@/components/common/flight-search/FlightInput";
import PickDate from "@/components/common/flight-search/PickDate";

const OneWayInputs = () => {
  const { setOrigin, setDestination, setDepartureDate } = useStoreActions(
    (actions: any) => actions.flightSearch
  );
  const { origin, destination, departureDate } = useStoreState(
    (state: any) => state.flightSearch
  );

  const [originSearchKey, setOriginSearchKey] = useState("");
  const [destinationSearchKey, setDestinationSearchKey] = useState("");

  const [originAirportLists, setOriginAirportLists] = useState<any>([]);
  const [destinationAirportLists, setDestinationAirportLists] = useState<any>(
    []
  );

  const [restOriginAirportLists, setRestOriginAirportLists] = useState<any>([]);
  const [restDestinationAirportLists, setRestDestinationAirportLists] =
    useState<any>([]);

  useEffect(() => {
    /**====================ORIGIN AIRPORT LIST======================== */
    const filteredOriginLists = defaultAirports.filter(
      (item) => item.value !== destination.value // Exclude the selected destination
    );
    setOriginAirportLists(filteredOriginLists);

    //rest
    const filteredRestOriginLists = restAirports.filter(
      (item) => item.value !== destination.value // Exclude the selected destination
    );
    setRestOriginAirportLists(filteredRestOriginLists);

    /**====================DESTINATION AIRPORT LIST=================== */
    const filteredDestinationLists = defaultAirports.filter(
      (item) => item.value !== origin.value // Exclude the selected origin
    );

    setDestinationAirportLists(filteredDestinationLists);
    //rest
    const filteredRestDestinationLists = restAirports.filter(
      (item) => item.value !== origin.value // Exclude the selected destination
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
        }
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
  }, [
    originSearchKey,
    destinationSearchKey,
    destination.value,
    origin.value,
    restOriginAirportLists,
    restDestinationAirportLists,
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6  justify-center items-center px-1">
      {/* From Input */}
      <div className="h-auto rounded-lg">
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
          }}
        />
      </div>

      {/* Swap Button */}
      <div className="flex items-center justify-center h-auto ">
        <Button
          className="bg-gray-300 p-1 size-[30px] aspect-square rounded-full z-10"
          onClick={() => {
            setDestination(origin);
            setOrigin(destination);
          }}
        >
          <IconSearchEngine.Swap className="text-xl text-black" />
        </Button>
      </div>
      {/* To Input */}
      <div className=" h-auto rounded-lg">
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
          }}
        />
      </div>
      {/* Vertical Line */}
      <div className="hidden lg:flex justify-center items-center h-auto">
        <div className="border-l-2 w-2 border-gray-500 h-16"></div>
      </div>

      {/* Date Picker */}
      <div className="h-auto rounded-lg">
        <PickDate
          date={departureDate}
          setDate={setDepartureDate}
          label="Departure"
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center h-auto">
        <Button className="px-12 py-2 text-lg rounded-full bg-primary-main text-white">
          Submit
        </Button>
      </div>
    </div>
  );
};
export default OneWayInputs;
