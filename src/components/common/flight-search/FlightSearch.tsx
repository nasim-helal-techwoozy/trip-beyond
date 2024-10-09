"use client";
import { defaultAirports } from "@/assets/data/airports";
import { IconSearchEngine } from "@/interfaces/icons";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Button } from "keep-react";
import { useMemo, useState } from "react";
import FlightInput from "./FlightInput";
import PickDate from "./PickDate";
import { Spinner } from "keep-react";

interface PropsTypes {
  hasReturnDate?: boolean;
  hasSubmitButton?: boolean;
}

const FlightSearch: React.FC<PropsTypes> = ({
  hasReturnDate,
  hasSubmitButton,
}) => {
  const { setOrigin, setDestination, setDepartureDate, setReturnDate } =
    useStoreActions((actions: any) => actions.flightSearch);

  const { oneWaySearch } = useStoreActions((actions: any) => actions.oneWay);
  const { response, error, isLoading } = useStoreState(
    (state: any) => state.oneWay
  );

  const { origin, destination, departureDate, returnDate } = useStoreState(
    (state: any) => state.flightSearch
  );
  const [originSearchKey, setOriginSearchKey] = useState("");
  const [destinationSearchKey, setDestinationSearchKey] = useState("");

  // Memoize filtered airport lists
  const originAirportLists = useMemo(() => {
    const filteredDefault = defaultAirports.filter(
      (item) => item.value !== destination.value // Exclude selected destination
    );

    if (originSearchKey) {
      return filteredDefault.filter((item) => {
        const label = item?.label?.toLowerCase();
        const value = item?.value?.toLowerCase();
        return (
          label?.startsWith(originSearchKey) ||
          value?.startsWith(originSearchKey)
        );
      });
    }

    return filteredDefault;
  }, [originSearchKey, destination.value]);

  const destinationAirportLists = useMemo(() => {
    const filteredDefault = defaultAirports.filter(
      (item) => item.value !== origin.value // Exclude selected origin
    );

    if (destinationSearchKey) {
      return filteredDefault.filter((item) => {
        const label = item?.label?.toLowerCase();
        const value = item?.value?.toLowerCase();
        return (
          label?.startsWith(destinationSearchKey) ||
          value?.startsWith(destinationSearchKey)
        );
      });
    }

    return filteredDefault;
  }, [destinationSearchKey, origin.value]);

  // Handle swapping origin and destination
  const handleFlightSearch = () => {
    oneWaySearch({
      CatalogProductOfferingsQueryRequest: {
        CatalogProductOfferingsRequest: {
          "@type": "CatalogProductOfferingsRequestAir",
          maxNumberOfUpsellsToReturn: 4,
          contentSourceList: ["GDS"],
          PassengerCriteria: [
            {
              "@type": "PassengerCriteria",
              number: 1,
              passengerTypeCode: "ADT",
            },
          ],
          SearchCriteriaFlight: [
            {
              "@type": "SearchCriteriaFlight",
              departureDate: "2024-10-15",
              From: {
                value: "SYD",
              },
              To: {
                value: "MEL",
              },
            },
          ],
          SearchModifiersAir: {
            "@type": "SearchModifiersAir",
            CarrierPreference: [
              {
                "@type": "CarrierPreference",
                preferenceType: "Preferred",
                carriers: ["QF"],
              },
            ],
          },
        },
      },
    });
  };

  return (
    <div className="space-y-5 md:space-y-0 md:flex  items-center gap-5">
      <div className="relative flex-1 md:flex md:flex-row md:items-center">
        <FlightInput
          className="flex-1"
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

        <Button
          type="button"
          className="absolute md:relative right-0 top-1/2 p-1 size-[30px] aspect-square rounded-full z-10 ring-1 ring-secondary-main"
          onClick={() => {
            setDestination(origin);
            setOrigin(destination);
          }}
        >
          <IconSearchEngine.Swap className="text-xl" />
        </Button>

        <FlightInput
          className="flex-1"
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

      <div className="relative space-y-2 md:space-y-0 md:flex md:gap-5 md:items-center flex-1">
        <PickDate
          date={departureDate}
          setDate={setDepartureDate}
          label="Departure"
        />

        {hasReturnDate && (
          <PickDate date={returnDate} setDate={setReturnDate} label="Return" />
        )}
      </div>
      {hasSubmitButton && (
        <Button
          onClick={handleFlightSearch}
          className="ml-auto flex items-center gap-2"
        >
          {isLoading && <Spinner color="warning" size="sm" />}search
        </Button>
      )}
    </div>
  );
};

export default FlightSearch;
