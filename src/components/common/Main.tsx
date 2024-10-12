"use client";

import React from "react";
import Loader from "./Loader";
import { useStoreState } from "easy-peasy";
interface PropsTypes {
  children: React.ReactNode;
}
const Main: React.FC<PropsTypes> = ({ children }) => {
  const { isLoading } = useStoreState((state: any) => state?.oneWay);
  return (
    <main className="relative">
      {children}
      {isLoading && (
        <Loader className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      )}
    </main>
  );
};

export default Main;
