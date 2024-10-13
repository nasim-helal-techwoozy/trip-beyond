import FlightViewCard from "@/components/common/flight-search/FlightViewCard";
import LeftFilter from "@/components/tb-b2b/search-engine/Flight/one-way/LeftFilter";
import Sponsor from "@/components/tb-b2b/search-engine/Flight/one-way/Sponsor";
import Header from "../landing-header/Header";
import QrCodeBanner from "../landing-content/QrCodeBanner";
import Footer from "../footer/Footer";

const SearchResult = () => {
  return (
    <>
      <Header hasBanner={false} hasSearch tabTextColor={true} />
      <section className="md:grid md:grid-cols-12 gap-5 px-12">
        <div className="col-span-3">
          <LeftFilter />
        </div>
        <div className="col-span-7">
          <FlightViewCard />
        </div>
        <div className="col-span-2">
          <Sponsor />
        </div>
      </section>
      <QrCodeBanner/>
      <Footer/>
    </>
  );
};

export default SearchResult;
