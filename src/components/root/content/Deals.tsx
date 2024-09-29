import KeepSlider from "@/components/keep-react/KeepSlider";
import { images } from "@/interfaces/images";
import { Button, CarouselItem } from "keep-react";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";

export const dealsData = [
  {
    id: 1,
    title: "10% off",
    description: "with KLM",
    image: images.deal1,
  },
  {
    id: 2,
    title: "Next pocket friendly Trip?",
    description: "Malaysia invites you",
    image: images.deal2,
  },
  {
    id: 3,
    title: "5 star stays",
    description: "are now more affordable",
    image: images.deal3,
  },
  {
    id: 4,
    title: "Deal 4",
    description: "Discount on car rentals for a week.",
    image: images.deal1,
  },
  {
    id: 5,
    title: "Deal 5",
    description: "Exclusive deals on special events tickets.",
    image: images.deal1,
  },
];

const Deals = () => {
  return (
    <KeepSlider>
      {dealsData.map((deal) => (
        <CarouselItem key={nanoid()} className="relative px-4">
          <div className="h-[250px] sm:h-[200px] overflow-hidden rounded-3xl">
            <Image
              src={deal.image}
              alt={deal.title}
              layout="fill"
              className="object-cover"
            />
            <div className="absolute space-y-3 pl-10 top-1/2 -translate-y-1/2 text-white">
              <h3>{deal.title}</h3>
              <p>{deal.description}</p>
              <Button>Book Now</Button>
            </div>
          </div>
        </CarouselItem>
      ))}
    </KeepSlider>
  );
};

export default Deals;
