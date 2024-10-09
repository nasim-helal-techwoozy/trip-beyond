import { Button } from "keep-react";
import CardContainer from "@/components/common/card/CardContainer";
import { IconSearchEngine } from "@/interfaces/icons";
import Filter from "./Filter";
import SearchResult from "./SearchResult";
import TripDetails from "./TripDetails";

const FlightSearchResult = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen px-5 py-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <Filter />

        <section className="w-full lg:w-3/4 space-y-4">
          <CardContainer>
            <h3 className="text-md font-semibold mb-4">Trip Details</h3>
            <TripDetails />
            <div className="flex items-end">
              <p className="text-xs mt-5">
                Prices displayed include taxes and may change based on
                availability. You can review any additional fees before check
                out. Prices are not final until you complete your purchase.
              </p>
              <div>
                <Button
                  onClick={() => {}}
                  className="bg-secondary text-xs rounded-full min-w-36 gap-8"
                >
                  <IconSearchEngine.DownArrow />
                  Sort By
                </Button>
              </div>
            </div>
          </CardContainer>
          {/* Flight Cards */}
          <SearchResult />
        </section>

        {/* Sponsor Section */}
        <aside className="w-full lg:w-1/5 bg-white p-4 shadow-lg rounded-lg space-y-4">
          <h3 className="text-lg font-semibold mb-4">Sponsor</h3>
          <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-600"></span>
          </div>
          <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Ad Space</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FlightSearchResult;
