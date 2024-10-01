"use client";
import { IconHomePage } from "@/interfaces/icons";
import { Button } from "keep-react";
import { useRouter } from "next/navigation";
import Logo from "../../common/Logo";
import KeepModal from "../../keep-react/KeepModal";
import { UserSignin } from "./UserSignin";
import UserSignup from "./UserSignup";

const Header = () => {
  const router = useRouter();
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
        <UserSignin />
      </KeepModal>

      <KeepModal
        modalOver={
          <Button variant="link" className="text-white">
            Sign Up
          </Button>
        }
        className="w-3/5"
      >
        <UserSignup />
      </KeepModal>

      <Button
        color="primary"
        className="rounded-full"
        onClick={() => router.push("/agent/signin")}
      >
        Agent Login
      </Button>

      <Button className="rounded-full">
        <IconHomePage.Phone size={20} />
      </Button>
      {/* <MobileMenu /> */}
    </header>
  );
};

export default Header;
