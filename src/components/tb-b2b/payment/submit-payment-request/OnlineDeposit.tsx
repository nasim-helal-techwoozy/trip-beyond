// OnlineDeposit.tsx
import { Buildings, Gear, ShieldWarning, User } from "phosphor-react";
import { Tabs, TabList, TabItem, TabContent } from "keep-react";
import { Bank } from "./online-deposit-types/Bank";
import { MFS } from "./online-deposit-types/MFS";

export const OnlineDeposit = () => {
  return (
    <Tabs defaultActive="item-1" className="mx-auto max-w-xl">
      <TabList>
        <TabItem value="item-1">
          <User size={16} />
          Bank
        </TabItem>
        <TabItem value="item-2">
          <Gear size={16} />
          MFS
        </TabItem>
        <TabItem value="item-3">
          <Buildings size={16} />
          Top-up Summary
        </TabItem>
        <TabItem value="item-4">
          <ShieldWarning size={16} />
          Deposit History
        </TabItem>
      </TabList>

      <TabContent value="item-1">
        <Bank />
      </TabContent>

      <TabContent value="item-2">
        <MFS />
      </TabContent>

      {/* Add content for item-3 and item-4 as needed */}
    </Tabs>
  );
};
