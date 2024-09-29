"use client";
import React from "react";
import KeepModal from "../keep-react/KeepModal";
import { Button } from "keep-react";
import Logo from "../common/Logo";
import { IconHomePage } from "@/interfaces/icons";

const Header = () => {
  return (
    <header
      className={`px-10 sticky left-0 top-0 z-10 w-full bg-metal-800 flex items-center gap-3 py-4`}
    >
      <Logo isDark={false} className="mr-auto" />

      <KeepModal
        modalOver={
          <Button variant="link" className="text-white">
            Sign in
          </Button>
        }
      >
        fgfg
        {/* <UserLogin
            onOpenSignupModal={() => setIsUserSignupOpen(true)}
            onCloseLoginModal={() => setIsUserLoginOpen(false)}
          /> */}
      </KeepModal>

      <KeepModal
        modalOver={
          <Button variant="link" className="text-white">
            Sign Up
          </Button>
        }
        className="w-3/5"
      >
        fgfg
        {/* <UserSignup /> */}
      </KeepModal>

      <KeepModal
        modalOver={
          <Button color="primary" className="rounded-full">
            Agent Login
          </Button>
        }
      >
        fgfg
        {/* <AgentLogin /> */}
      </KeepModal>

      <Button className="rounded-full">
        <IconHomePage.Phone size={20} />
      </Button>
      {/* <MobileMenu /> */}
    </header>
  );
};

export default Header;
