// Bank.tsx
import { Tabs, TabList, TabItem, TabContent } from "keep-react";
import { AmericanExpress, DutchBangla, MasterCard, Visa } from "./BankMethods";

export const Bank = () => {
  return (
    <Tabs defaultActive="visa">
      <TabList>
        <TabItem value="visa">Visa</TabItem>
        <TabItem value="mastercard">MasterCard</TabItem>
        <TabItem value="amex">American Express</TabItem>
        <TabItem value="dutchbangla">Dutch Bangla Bank</TabItem>
      </TabList>

      <TabContent value="visa">
        <Visa />
      </TabContent>

      <TabContent value="mastercard">
        <MasterCard />
      </TabContent>

      <TabContent value="amex">
        <AmericanExpress />
      </TabContent>

      <TabContent value="dutchbangla">
        <DutchBangla />
      </TabContent>
    </Tabs>
  );
};
