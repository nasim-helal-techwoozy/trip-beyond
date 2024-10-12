import FlightViewCard from "@/components/common/flight-search/FlightViewCard";
import LeftFilter from "@/components/tb-b2b/search-engine/Flight/one-way/LeftFilter";
import Sponsor from "@/components/tb-b2b/search-engine/Flight/one-way/Sponsor";
import Search from "@/components/tb-b2b/search-engine/Search";

const SearchPage = () => {
  return (
    <>
      <Search />
      <section className="md:grid md:grid-cols-12 gap-5">
        <div className="col-span-3"><LeftFilter/></div>
        <div className="col-span-7">
          <FlightViewCard />
        </div>
        <div className="col-span-2"><Sponsor/></div>
      </section>
    </>
  );
};

export default SearchPage;
