"use client";
import React from "react";
import Slider from "react-slick";
import { nanoid } from "nanoid";
import Image from "next/image";
import { Button } from "keep-react";
import { images } from "@/interfaces/images";
const DestinationData = [
  {
    id: 1,
    title: "Dhaka",
    image: images.package1,
  },
  {
    id: 2,
    title: "Agra",
    image: images.package2,
  },
  {
    id: 3,
    title: "5 star stays",
    description: "are now more affordable",
    image: images.package3,
  },
  {
    id: 4,
    title: "London",
    image: images.package4,
  },
  {
    id: 5,
    title: "Paris",
    image: images.package1,
  },
];

function Destination() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024, // Tablets and larger devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 mb-8">
      <h3 className="text-center font-normal text-lg sm:text-xl mb-6">
        Favourite Destination Packages
      </h3>
      <Slider {...settings}>
        {DestinationData.map((deal) => (
          <div key={nanoid()} className="px-2">
            <div className="relative h-64 sm:h-48 rounded-2xl overflow-hidden">
              <Image
                src={deal.image}
                alt={deal.title}
                layout="fill"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 text-white p-4 flex flex-col justify-center rounded-3xl">
                <h3 className="text-lg font-normal">{deal.title}</h3>
                <div>
                  <Button className="mt-2 w-28 text-black">Book Now</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Destination;
