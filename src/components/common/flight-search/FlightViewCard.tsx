"use client";

import { convertDuration } from "@/utils/convertDuration";
import { toReadableDate } from "@/utils/toReadableDate";
import { useStoreState } from "easy-peasy";
import {
  Avatar,
  AvatarImage,
  Button,
  Popover,
  PopoverAction,
  PopoverContent,
} from "keep-react";
import { nanoid } from "nanoid";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FlightViewCard = () => {
  const { response } = useStoreState((state: any) => state.oneWay);

  const ReferenceList = response?.CatalogProductOfferingsResponse.ReferenceList;
  const refFlights = ReferenceList?.[0].Flight;

  const CatalogProductOffering =
    response?.CatalogProductOfferingsResponse.CatalogProductOfferings
      .CatalogProductOffering;

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg font-semibold mb-2">Trip Details</h1>
        <div className="flex items-center gap-5 overflow-x-auto">
          {[1, 2, 3, 4, 5, 6, 7].map(() => {
            return (
              <div
                key={nanoid()}
                className="size-28 flex flex-col items-center justify-center space-y-2 border border-gray-400 rounded-2xl"
              >
                <p className="text-sm text-gray-500"> wed, Sept 22</p>
                <h2 className="text-gray-500">$265</h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center">
        <p className="text-sm text-gray-400">
          Prices displayed include taxes and may change based on availability.
          You can review any additional fees before check out. Prices are not
          final until you complete your purchase.
        </p>

        <Popover>
          <PopoverAction
            color="secondary"
            width={300}
            style={{
              borderRadius: "100vw",
              width: "220px",
            }}
          >
            Sort by <MdOutlineKeyboardArrowDown size={25} />
          </PopoverAction>
          <PopoverContent className="z-20 rounded-xl shadow-2xl flex flex-col overflow-hidden bg-white">
            <h1 className="text-black font-bold text-sm px-4 py-2">Price</h1>
            <button className="text-left text-sm hover:bg-selection duration-300 px-4 py-1">
              High to Low
            </button>
            <button className="text-left text-sm hover:bg-selection duration-300 px-4 py-1">
              Low to Hight
            </button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="w-full h-[1px] bg-gray-300"></div>
      {CatalogProductOffering?.map((item: any) => {
        return item?.ProductBrandOptions?.map((option: any) => {
          const flightRefs = option.flightRefs;
          const ProductBrandOffering = option.ProductBrandOffering;

          return flightRefs.map((ref: any) => {
            const targetFlight = refFlights.find(
              (targetFlight: any) => targetFlight.id === ref
            );

            return ProductBrandOffering.map((offer: any) => {
              const price = offer.Price;

              return (
                <OneWayCard
                  key={nanoid()}
                  flight={targetFlight}
                  price={price}
                />
              );
            });
          });
        });
      })}
      {/* {refFlights?.map((flight: any) => {
        return <OneWayCard key={nanoid()} flight={flight} />;
      })} */}
    </div>
  );
};

export default FlightViewCard;

interface OneWayCardTypes {
  flight: any;
  price: any;
}
const OneWayCard: React.FC<OneWayCardTypes> = ({ flight, price }) => {
  return (
    <div className="grid grid-cols-5 border border-gray-300 p-3 rounded-2xl *:flex *:flex-col *:justify-center">
      <div className="col-span-1">
        <Avatar>
          <AvatarImage />
        </Avatar>
        <p className="text-[10px]">Biman Bangladesh Airlines</p>
        <p className="text-[10px]">Flight no. {flight.number}</p>
      </div>

      <div className="col-span-1">
        <h2 className="font-bold text-xs">{flight.Departure.location}</h2>
        <p className="text-[11px] text-gray-400">{flight.Departure.time}</p>
        <p className="text-[11px]">{toReadableDate(flight.Departure.date)}</p>
      </div>
      <div className="col-span-1">
        <h2 className="font-bold text-xs">{flight.Arrival.location}</h2>
        <p className="text-[11px] text-gray-400">{flight.Arrival.time}</p>
        <p className="text-[11px]">{toReadableDate(flight.Arrival.date)}</p>
      </div>
      <div className="col-span-1">
        <p className="text-[11px] text-gray-400">
          {convertDuration(flight.duration)}
        </p>
        <h2 className="font-bold text-xs">one stop</h2>
        <p className="text-[11px]">
          Seats Left: <span className="text-primary-main">9</span>
        </p>
      </div>
      <div className="col-span-1 items-center">
        <h2 className="font-bold text-xs mb-1">{`${price.CurrencyCode.value}-${price.TotalPrice}`}</h2>
        <Button className="text-black rounded-full">Book Now</Button>
        <p className="text-[10px] text-gray-400">Refundable</p>
      </div>
    </div>
  );
};
