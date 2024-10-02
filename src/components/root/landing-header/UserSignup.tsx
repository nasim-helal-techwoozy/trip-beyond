"use client";
import Logo from "@/components/common/Logo";
import KeepInput from "@/components/keep-react/KeepInput";
import { IconAuthentication } from "@/interfaces/icons";
import { Button, ModalClose, toast } from "keep-react";
import { debounce } from "lodash";
import { useState } from "react";

const UserSignup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = debounce(() => {
    if (user.password !== user.rePassword) {
      toast.warning("Password is not matched");
    }
    toast.success("user signup done !!");
    // write server side logic in here
  }, 300);

  return (
    <>
      <Logo className="mb-5 flex items-center justify-center" />
      <div className="flex  items-center justify-center gap-5 overflow-hidden">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-3"
        >
          <p className="text-body-3 font-semibold capitalize">User register</p>

          <div className="flex gap-3">
            <KeepInput
              placeholder="Enter first name"
              value={user.firstName}
              onChange={(data) => setUser({ ...user, firstName: data })}
              required
            />
            <KeepInput
              placeholder="Enter last name"
              value={user.lastName}
              name="lastName"
              onChange={(data) => setUser({ ...user, lastName: data })}
            />
          </div>

          <KeepInput
            placeholder="Enter your email"
            type="email"
            onChange={(data) => setUser({ ...user, email: data })}
            required
          />

          <KeepInput
            placeholder="Enter password"
            type="password"
            onChange={(data) => setUser({ ...user, password: data })}
          />

          <KeepInput
            placeholder="Retype your password"
            type="password"
            onChange={(data) => setUser({ ...user, rePassword: data })}
            required
          />
          <ModalClose asChild>
            <Button className="w-full" type="submit">
              Register
            </Button>
          </ModalClose>
        </form>

        <div>Or</div>

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
      </div>
    </>
  );
};

export default UserSignup;
