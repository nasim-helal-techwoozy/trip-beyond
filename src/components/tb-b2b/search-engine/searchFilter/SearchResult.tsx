import { Button } from "keep-react";
import { IconSearchEngine } from "@/interfaces/icons";
import { useStoreState } from "easy-peasy";
import { nanoid } from "nanoid";
import React from "react";

interface PropsTypes {
  icon: React.ReactNode;
  airlines: string;
  flightNo: string;
  from: string;
  to: string;
  departTime: string;
  returnTime: string;
  departDate: string;
  returnDate: string;
  travelTime: string;
  stop: string;
  seats: string;
  price: string;
  refund: boolean;
}

const FilterResult: PropsTypes[] = [
  {
    icon: (
      <IconSearchEngine.Flight
        size={20}
        className="rounded-full bg-red p-1 text-white"
      />
    ),
    airlines: "Biman Bangladesh Airlines",
    flightNo: "786",
    from: "Dhaka (DAC)",
    to: "Delhi (DEL)",
    departTime: "10:20",
    returnTime: "3:30",
    departDate: "Wednesday, 15 Sep 21",
    returnDate: "Wednesday, 15 Sep 21",
    travelTime: "10hrs 55mins",
    stop: "One Stop",
    seats: "9",
    price: "$600",
    refund: true,
  },
  {
    icon: (
      <IconSearchEngine.Flight
        size={20}
        className="rounded-full bg-red p-1 text-white"
      />
    ),
    airlines: "Biman Bangladesh Airlines",
    flightNo: "786",
    from: "Dhaka (DAC)",
    to: "Delhi (DEL)",
    departTime: "10:20",
    returnTime: "3:30",
    departDate: "Wednesday, 15 Sep 21",
    returnDate: "Wednesday, 15 Sep 21",
    travelTime: "10hrs 55mins",
    stop: "One Stop",
    seats: "9",
    price: "$600",
    refund: true,
  },
  {
    icon: (
      <IconSearchEngine.Flight
        size={20}
        className="rounded-full bg-red p-1 text-white"
      />
    ),
    airlines: "Biman Bangladesh Airlines",
    flightNo: "786",
    from: "Dhaka (DAC)",
    to: "Delhi (DEL)",
    departTime: "10:20",
    returnTime: "3:30",
    departDate: "Wednesday, 15 Sep 21",
    returnDate: "Wednesday, 15 Sep 21",
    travelTime: "10hrs 55mins",
    stop: "One Stop",
    seats: "9",
    price: "$600",
    refund: true,
  },
];

const SearchResult = () => {
  const { isLoading, error, response } = useStoreState(
    (state: any) => state.searchFlight
  );
  console.log('isLoading',isLoading)
  console.log('error',error)

  const flights =
    response?.CatalogProductOfferingsResponse?.ReferenceList?.at(0)?.Flight;
  console.log(flights);
  return (
    <div className="flex flex-col gap-3">
      {flights
        ? flights?.map((item: any) => (
            <div
              key={nanoid()}
              className="space-y-4 rounded-3xl border border-slate-300  bg-white p-5 shadow-lg"
            >
              <div className="flex items-center justify-between gap-2">
                <SectionContainer>
                  <span>{"icon"}</span>
                  <span>{"Biman Bangladesh Airlines"}</span>
                  <span>{item?.distance}</span>
                </SectionContainer>

                <SectionContainer>
                  <span>{item?.Departure?.location}</span>
                  <span>{item?.Departure?.time}</span>
                  <span>{item?.Departure?.date}</span>
                </SectionContainer>

                <SectionContainer>
                  <span>{item?.Arrival?.location}</span>
                  <span>{item?.Arrival?.time}</span>
                  <span>{item?.Arrival?.date}</span>
                </SectionContainer>

                <SectionContainer>
                  <span>{"travelTime"}</span>
                  <span>{"stop"}</span>
                  <span>Seats Left :1</span>
                </SectionContainer>

                <div className="flex flex-col gap-2">
                  <div className="text-center text-xs font-semibold">
                    {"price"}
                  </div>
                  <Button
                    onClick={() => {}}
                    className="whitespace-nowrap rounded-full px-6 py-2 text-center text-xs font-semibold text-black"
                  >
                    Book Now
                  </Button>

                  <p className="text-center text-xs font-medium">
                    {"Non-refundable"}
                  </p>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default SearchResult;

interface SectionTypes {
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionTypes> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 text-[10px] font-medium text-black">
      {children}
    </div>
  );
};
