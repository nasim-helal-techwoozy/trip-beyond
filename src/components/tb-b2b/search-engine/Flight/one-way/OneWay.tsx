import FlightSearch from "@/components/common/flight-search/FlightSearch";
import FlightSearchResult from "../../searchFilter/FlightSearchResult";

const OneWay = () => {
  return (
    <>
      <FlightSearch hasSubmitButton />
      <FlightSearchResult />
    </>
  );
};

export default OneWay;
