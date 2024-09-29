import KeepSlider from "@/components/keep-react/KeepSlider";
import Deals from "@/components/root/content/Deals";
import Footer from "@/components/root/footer/Footer";
import Header from "@/components/root/Header";
import { Button, CarouselItem } from "keep-react";

export default function Home() {
  return (
    <section>
      <Header />

      <main className="px-10">
        <div className="text-center py-5">
          <p>
            Unlock the extraordinary with Trip Beyond, your passport to
            unparalleled adventures. From secluded beaches to majestic peaks,
            our expert team crafts tailor-made journeys that redefine travel.
            Immerse yourself in culture, savor unique experiences, and create
            memories that last a lifetime. Join us and journey beyond the
            ordinary with Trip Beyond.
          </p>
          <Button variant="link">Read More</Button>
        </div>

        <Deals />
      </main>

      <Footer />
    </section>
  );
}
