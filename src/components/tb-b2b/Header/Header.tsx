"use client";
import ThemeSwitcher from "@/themes/ThemeSwitcher";

import { cn } from "keep-react/utils";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";

const Header = ({ className }: any) => {
  return (
    <header
      className={cn(
        "sticky z-10 top-0 flex gap-5 items-center bg-white px-5 py-5 shadow-md w-full",
        className
      )}
    >
      <Search />

      <ThemeSwitcher />

      <Notifications />

      <Profile />
    </header>
  );
};

export default Header;
