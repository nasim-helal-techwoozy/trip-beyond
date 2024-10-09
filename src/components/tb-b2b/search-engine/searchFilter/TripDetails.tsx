import { nanoid } from 'nanoid';
import React from 'react';

// Define the interface
interface TripProps {
    date: string;
    price: string;
}

// Create the array of trip data
const TripData: TripProps[] = [
    { date: "Wed, Sept 22", price: "$265" },
    { date: "Wed, Sept 23", price: "$265" },
    { date: "Wed, Sept 24", price: "$265" },
    { date: "Wed, Sept 25", price: "$265" },
    { date: "Wed, Sept 26", price: "$265" },
];

const TripDetails = () => {
    return (
        <div className="flex gap-5 justify-center text-center text-sm">
            {TripData.map((trip) => (
                <div key={nanoid()} className="flex flex-col py-6 gap-3 text-left border border-slate-300 rounded-2xl p-4">
                    <div className="text-xs text-black font-medium">{trip.date}</div>
                    <div className="text-xs text-black font-medium">{trip.price}</div>
                </div>
            ))}
        </div>
    );
};

export default TripDetails;
