import React from "react";
import {
  Skeleton,
  SkeletonLine,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from "keep-react";
import { nanoid } from "nanoid";
import OneWay from "./one-way/OneWay";
import RoundTrip from "./round-trip/RoundTrip";
import MultiCity from "./multi-city/MultiCity";
import Umrah from "./Umrah/Umrah";

const tabs = ["one way", "round trip", "multi city", "umrah"];

const Flight = () => {
  return (
    <Tabs defaultActive="one-way" className="mx-auto w-full">
      <TabList>
        {tabs.map((tab) => (
          <TabItem
            key={nanoid()}
            value={tab.toLowerCase().split(" ").join("-")}
            className="capitalize"
          >
            {tab}
          </TabItem>
        ))}
      </TabList>

      <TabContent value="one-way">
        <OneWay />
      </TabContent>

      <TabContent value="round-trip">
        <RoundTrip />
      </TabContent>

      <TabContent value="multi-city">
        <MultiCity />
      </TabContent>

      <TabContent value="umrah">
        <Umrah />
      </TabContent>
    </Tabs>
  );
};

export default Flight;
