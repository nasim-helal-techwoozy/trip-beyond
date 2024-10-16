"use client";
import Search from "@/components/tb-b2b/search-engine/Search";
import { IconHomePage } from "@/interfaces/icons";
import { Button } from "keep-react";
import { useRouter } from "next/navigation";
import Logo from "../../common/Logo";
import KeepModal from "../../keep-react/KeepModal";
import { UserSignin } from "./UserSignin";
import UserSignup from "./UserSignup";
import { cn } from "keep-react/utils";

interface PropTypes{
  hasSearch?:boolean;
  hasBanner?:boolean;
  tabTextColor?:boolean;
}


const Header:React.FC<PropTypes> = ({tabTextColor,hasBanner=true,hasSearch=true}) => {
  const router = useRouter();
  return (
    <div className={cn("flex flex-col gap-6", {
      "seBanner":hasBanner
    })}>
      <header
        className={cn(`px-10 sticky left-0 top-0 z-10 w-full flex items-center gap-3 py-4`,{
          "bg-secondary-main":!hasBanner
        })}
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

        <button className="bg-primary-main size-8 text-secondary-main flex items-center justify-center rounded-full">
          <IconHomePage.Phone size={20} />
        </button>

        {/* <MobileMenu /> */}
      </header>
      {hasSearch &&  <Search tabTextColor={tabTextColor}/>}
     
    </div>
  );
};

export default Header;
