"use client";
import KeepInput from "@/components/keep-react/KeepInput";
import { Button } from "keep-react";
import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // write server side logic in here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-2 *:col-span-1 *:rounded-full"
    >
      <p className="!col-span-2">Newsletter</p>
      <KeepInput
        placeholder="Your Email"
        value={email}
        onChange={(data) => setEmail(data)}
      />
      <Button type="submit">subscribe</Button>
    </form>
  );
};

export default NewsLetter;
