import Footer from "@/components/root/footer/Footer";
import Header from "@/components/root/Header";
import { Button } from "keep-react";

export default function Home() {
  return (
    <section>
      <Header />

      <main>
        <div className="text-center">
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
      </main>

      <Footer />
    </section>
  );
}
