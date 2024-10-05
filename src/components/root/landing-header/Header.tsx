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
      className={`px-10 sticky left-0 top-0 z-10 w-full bg-secondary-main flex items-center gap-3 py-4`}
    >
      <Logo className="mr-auto" />

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
        className="rounded-full text-black py-0"
        onClick={() => router.push("/agent/signin")}
      >
        Agent Login
      </Button>

      <div className="bg-primary-main size-8 text-secondary-main flex items-center justify-center rounded-full">
        <IconHomePage.Phone size={20} />
      </div>

      {/* <MobileMenu /> */}
    </header>
  );
};

export default Header;
