import { Bkash, Nagad, Rocket, Upay } from "./MfsMethods";
import { Tabs, TabList, TabItem, TabContent } from "keep-react";
export const MFS = () => {
  return (
    <Tabs defaultActive="bkash">
      <TabList>
        <TabItem value="bkash">Bkash</TabItem>
        <TabItem value="nagad">Nagad</TabItem>
        <TabItem value="rocket">Rocket</TabItem>
        <TabItem value="upay">Upay</TabItem>
      </TabList>

      <TabContent value="bkash">
        <Bkash />
      </TabContent>

      <TabContent value="nagad">
        <Nagad />
      </TabContent>

      <TabContent value="rocket">
        <Rocket />
      </TabContent>

      <TabContent value="upay">
        <Upay />
      </TabContent>
    </Tabs>
  );
};
