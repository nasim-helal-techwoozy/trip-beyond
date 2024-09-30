"use client";
import { images } from "@/interfaces/images";
import { Button } from "keep-react";
import Image from "next/image";

const Exclusive = () => {
    return (
        <div className="w-full max-w-5xl mx-auto mt-16 mb-8">
            <h3 className="text-center font-normal text-lg sm:text-xl mb-6">
                Find Exclusives From Our Partners
            </h3>
            <div className="grid gap-4 lg:grid-cols-3 p-5 rounded-3xl">
                {/* First banner image */}
                <div className="h-64 relative bg-gray-200 lg:col-span-2 rounded-3xl overflow-hidden">
                    <Image
                        src={images.exclusive1}
                        alt="Exclusive 1"
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>

                {/* Second banner image */}
                <div className="h-64 relative bg-gray-200 rounded-3xl overflow-hidden">
                    <Image
                        src={images.exclusive2}
                        alt="Exclusive 2"
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>

                {/* Banner descriptions */}
                <div className="lg:col-span-2 p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-normal mb-2">
                                Last minute Summer Trip
                            </h3>
                            <p className="text-sm">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <Button>{`Let's Go`}</Button>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-normal mb-2">
                                Flying from Delhi-London?
                            </h3>
                            <p className="text-sm">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        <Button>Book Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;
