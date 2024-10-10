import FlightViewCard from "@/components/common/flight-search/FlightViewCard";
import Search from "@/components/tb-b2b/search-engine/Search";

const SearchPage = () => {
  return (
    <>
      <Search />
      <section className="md:grid md:grid-cols-12 gap-5">
        <div className="col-span-3 bg-red-200">aside filter</div>
        <div className="col-span-7">
          <FlightViewCard />
        </div>
        <div className="col-span-2 bg-red-200">add</div>
      </section>
    </>
  );
};

export default SearchPage;
