// Visa.tsx
export const Visa = () => {
  return (
    <div className="space-y-2 p-4 border">
      <h2 className="text-lg font-semibold">Visa</h2>
      <div>
        <label>Card Number</label>
        <input
          type="text"
          placeholder="Enter Card Number"
          className="w-full p-2 border"
        />
      </div>
      <div>
        <label>Expiration Date</label>
        <input type="text" placeholder="MM/YY" className="w-full p-2 border" />
      </div>
      <div>
        <label>CVV</label>
        <input
          type="text"
          placeholder="Enter CVV"
          className="w-full p-2 border"
        />
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2">
        Submit
      </button>
    </div>
  );
};

// MasterCard.tsx
export const MasterCard = () => {
  return (
    <div className="space-y-2 p-4 border">
      <h2 className="text-lg font-semibold">MasterCard</h2>
      <div>
        <label>Card Number</label>
        <input
          type="text"
          placeholder="Enter Card Number"
          className="w-full p-2 border"
        />
      </div>
      <div>
        <label>Expiration Date</label>
        <input type="text" placeholder="MM/YY" className="w-full p-2 border" />
      </div>
      <div>
        <label>CVV</label>
        <input
          type="text"
          placeholder="Enter CVV"
          className="w-full p-2 border"
        />
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2">
        Submit
      </button>
    </div>
  );
};
// OnlineDeposit.tsx
import { Buildings, Gear, ShieldWarning, User } from "phosphor-react";
import { Tabs, TabList, TabItem, TabContent } from "keep-react";
import { Bank } from "./Bank";
import { MFS } from "./MFS";

// AmericanExpress.tsx
export const AmericanExpress = () => {
  return (
    <div className="space-y-2 p-4 border">
      <h2 className="text-lg font-semibold">Visa</h2>
      <div>
        <label>Card Number</label>
        <input
          type="text"
          placeholder="Enter Card Number"
          className="w-full p-2 border"
        />
      </div>
      <div>
        <label>Expiration Date</label>
        <input type="text" placeholder="MM/YY" className="w-full p-2 border" />
      </div>
      <div>
        <label>CVV</label>
        <input
          type="text"
          placeholder="Enter CVV"
          className="w-full p-2 border"
        />
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2">
        Submit
      </button>
    </div>
  );
};

// DutchBangla.tsx
export const DutchBangla = () => {
  return (
    <div className="space-y-2 p-4 border">
      <h2 className="text-lg font-semibold">Visa</h2>
      <div>
        <label>Card Number</label>
        <input
          type="text"
          placeholder="Enter Card Number"
          className="w-full p-2 border"
        />
      </div>
      <div>
        <label>Expiration Date</label>
        <input type="text" placeholder="MM/YY" className="w-full p-2 border" />
      </div>
      <div>
        <label>CVV</label>
        <input
          type="text"
          placeholder="Enter CVV"
          className="w-full p-2 border"
        />
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2">
        Submit
      </button>
    </div>
  );
};
