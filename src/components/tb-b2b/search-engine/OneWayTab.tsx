"use client";
import formatDate from "@/utils/formatDate";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";

import FlightDate from "./FlightDate";
import FlightInputsSearch from "./FlightInputsSearch";
import { Button } from "keep-react";

const OneWayTab = () => {
  const [flightSearchData, setFlightSearchData] = useState<any>({
    origin: "",
    destination: "",
    departureDate: new Date(),
  });

  /**===================redux start========================= */
  const { isLoading } = useStoreState((state: any) => state.searchFlight);

  const { oneWaySearch } = useStoreActions(
    (actions: any) => actions.searchFlight
  );
  /**===================redux end========================= */

  // associated with server
  const handleSubmission = () => {
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
              departureDate: formatDate(
                flightSearchData.departureDate.startDate
              ),
              From: {
                value: flightSearchData.origin,
              },
              To: {
                value: flightSearchData.destination,
              },
            },
          ],
          SearchModifiersAir: {
            "@type": "SearchModifiersAir",
            CarrierPreference: [
              {
                "@type": "CarrierPreference",
                preferenceType: "Preferred",
                carriers: ["AA"],
              },
            ],
          },
        },
      },
    });
  };

  return (
    <div className="flex w-full items-center gap-5 p-5">
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

      <div className="flex w-full items-center gap-5">
        <FlightDate
          label="Depart"
          onDateChange={(date) => {
            setFlightSearchData({ ...flightSearchData, departureDate: date });
          }}
        />

        <Button></Button>
      </div>
    </div>
  );
};

export default OneWayTab;
