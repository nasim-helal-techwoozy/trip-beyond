"use client";
import ThemeSwitcher from "@/themes/ThemeSwitcher";

import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";
import { cn } from "keep-react/utils";

const Header = ({ className }: any) => {
  return (
    <header
      className={cn(
        "sticky top-0 flex gap-2 items-center bg-white px-5 py-5 shadow-md",
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
