"use client";
import { useState } from "react";
import {
  Button,
  Skeleton,
  SkeletonLine,
  StepLine,
  StepPoint,
  Steps,
  TabItem,
  TabList,
  Tabs,
} from "keep-react";
import Header from "../landing-header/Header";
import { nanoid } from "nanoid";

export const BookingProcedure = () => {
  const [active, setActive] = useState(1);
  const tabs = [
    "Flights",
    "Hotels",
    "Packages",
    "Transportation",
    "Special deals",
  ];
  return (
    <>
      <Header hasBanner={false} hasSearch={false} />
      <div className="space-y-6 w-1/2 mx-auto">
        <Tabs
          variant="default"
          defaultActive="Flights"
          className="mx-auto w-full"
        >
          <TabList>
            {tabs.map((tab) => (
              <TabItem
                key={nanoid()}
                value={tab.toLowerCase().split(" ").join("-")}
                className="capitalize text-nowrap border-custom"
              >
                {tab}
              </TabItem>
            ))}
          </TabList>
        </Tabs>

        <Steps>
          <StepPoint variant="border" completed={active >= 1}>
            <p className="flex size-5 items-center justify-center rounded-full border text-body-5 font-medium">
              1
            </p>
            <p className="text-body-4 font-medium">general info</p>
          </StepPoint>
          <StepLine completed={active >= 2} />
          <StepPoint variant="border" completed={active >= 2}>
            <p className="flex size-5 items-center justify-center rounded-full border text-body-5 font-medium">
              2
            </p>
            <p className="text-body-4 font-medium">payment details</p>
          </StepPoint>
          <StepLine completed={active >= 3} />
          <StepPoint variant="border" completed={active >= 3}>
            <p className="flex size-5 items-center justify-center rounded-full border text-body-5 font-medium">
              3
            </p>
            <p className="text-body-4 font-medium">benefits & extras</p>
          </StepPoint>
        </Steps>
        <Skeleton animation={false} className="w-full space-y-2.5">
         

        <div className="min-h-screen bg-gray-100 p-8">
      {/* Flight Details Section */}
      <div className="bg-white shadow-md p-4 mb-6 rounded-lg">
        {/* Flight Summary */}
        <div className="mb-4">
          <div className="flex justify-between items-center border-b pb-2">
            <div className="text-left">
              <p className="font-semibold">Wed, Sep 22 | Hong Kong - Kuala Lumpur</p>
              <p className="text-sm text-gray-500">HKG Hong Kong International Airport T1 → KUL Kuala Lumpur International Airport M</p>
              <p className="text-sm text-gray-500">3h 55m | 12:45 PM - 4:40 PM</p>
              <p className="text-sm text-gray-400">Biman Bangladesh Airlines - AX786 | Airbus A350 | XWB | Economy | In-flight services</p>
            </div>
            <button className="text-sm text-blue-500 border border-blue-500 px-2 py-1 rounded">Change Flight</button>
          </div>
        </div>

        {/* Return Flight Summary */}
        <div className="mb-4">
          <div className="flex justify-between items-center border-b pb-2">
            <div className="text-left">
              <p className="font-semibold">Wed, Sep 22 | Kuala Lumpur - Hong Kong</p>
              <p className="text-sm text-gray-500">KUL Kuala Lumpur International Airport M → HKG Hong Kong International Airport T1</p>
              <p className="text-sm text-gray-500">3h 55m | 12:45 PM - 4:40 PM</p>
              <p className="text-sm text-gray-400">Biman Bangladesh Airlines - AX786 | Airbus A350 | XWB | Economy | In-flight services</p>
            </div>
            <button className="text-sm text-blue-500 border border-blue-500 px-2 py-1 rounded">Change Flight</button>
          </div>
        </div>

        {/* Price Details */}
        <div className="mt-6">
          <h2 className="font-bold text-lg">Price Details</h2>
          <div className="border-b my-2"></div>
          <div className="flex justify-between py-1">
            <span>Adult</span>
            <span>$617.80</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Fare</span>
            <span>$531.70</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Taxes & Fees</span>
            <span>$86.10</span>
          </div>
          <div className="flex justify-between py-1 font-bold">
            <span>Total</span>
            <span>$627.90</span>
          </div>

          {/* Coupon Code */}
          <div className="mt-4">
            <input
              type="text"
              className="border p-2 w-3/4 rounded-l-lg"
              placeholder="Coupon Code"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Apply</button>
          </div>
        </div>
      </div>

      {/* Passenger Details Section */}
      <div className="bg-white shadow-md p-4 mb-6 rounded-lg">
        <h2 className="font-semibold text-lg mb-2">Passenger</h2>
        <div className="border-t border-gray-200 my-2"></div>

        {/* Passenger Form */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Eg. John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Middle Name</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Eg. J"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Eg. Smith"
            />
          </div>
        </div>

        {/* Other Info */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select className="mt-1 p-2 border rounded w-full">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input type="date" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nationality</label>
            <select className="mt-1 p-2 border rounded w-full">
              <option>Select</option>
              <option>USA</option>
              <option>India</option>
            </select>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add Passenger
        </button>
      </div>

      {/* Contact Details Section */}
      <div className="bg-white shadow-md p-4 mb-6 rounded-lg">
        <h2 className="font-semibold text-lg mb-2">Contact Details</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Eg. John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Eg. j@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Eg. +91 9910000000"
            />
          </div>
        </div>
        <div className="mt-2">
          <input type="checkbox" id="promo" />
          <label htmlFor="promo" className="ml-2 text-sm">
            Contact for promotions
          </label>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center bg-white p-4 shadow-md rounded-lg">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms" className="ml-2 text-sm">
          I have read and agreed to the following Tribeyond.com booking terms and conditions: Flight Booking Policies, Privacy Statement.
        </label>
      </div>

      {/* Submit */}
      <div className="mt-4 text-right">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Agree & Continue</button>
      </div>
    </div>























          <SkeletonLine className="h-4 w-9/12" />
          <SkeletonLine className="h-4 w-10/12" />
          <SkeletonLine className="h-4 w-7/12" />
        </Skeleton>
        <div className="flex items-center justify-between">
          <Button disabled={active === 1} onClick={() => setActive(active - 1)}>
            Previous
          </Button>
          <Button disabled={active === 3} onClick={() => setActive(active + 1)}>
            Next Step
          </Button>
        </div>
      </div>
    </>
  );
};
