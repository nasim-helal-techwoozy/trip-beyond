"use client";
import KeepHeading from "@/components/keep-react/KeepHeading";
import KeepInput from "@/components/keep-react/KeepInput";
import { IconAuthentication } from "@/interfaces/icons";
import { Button, ModalClose, toast } from "keep-react";
import { debounce } from "lodash";
import { useState } from "react";

export const UserSignin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = debounce(() => {
    //write server side logic in here
    toast.success("user logged in ");
  }, 300);

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-5"
    >
      <KeepHeading level="secondary" className="text-center">
        Sign In
      </KeepHeading>
      <KeepInput
        required
        type="email"
        placeholder="Enter your email"
        onChange={(data) => setUser({ ...user, email: data })}
      />
      <KeepInput
        required
        type="password"
        placeholder="Enter your password"
        onChange={(data) => setUser({ ...user, password: data })}
      />

      <div className="flex flex-col gap-3 *:flex-1 *:gap-2">
        <Button className="bg-blue-500">
          <IconAuthentication.Facebook />
          Log In with Facebook
        </Button>

        <Button color="error">
          <IconAuthentication.Google />
          Log In with Google
        </Button>
      </div>
      <ModalClose asChild>
        <Button type="submit">Login</Button>
      </ModalClose>
    </form>
  );
};
