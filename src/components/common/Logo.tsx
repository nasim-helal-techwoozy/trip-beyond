"use client";

import { images } from "@/interfaces/images";
import { cn } from "keep-react/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PropsTypes {
  isDark?: boolean;
  className?: string;
}
const Logo: React.FC<PropsTypes> = ({ isDark, className }) => {
  return (
    <Link href="/" className={cn("block", className)}>
      <Image
        width={176}
        height={32}
        src={images.logoDark}
        alt="Logo"
        priority
        className="min-w-10 hidden dark:block"
      />
      <Image
        width={176}
        height={32}
        src={images.logo}
        alt="Logo"
        priority
        className="min-w-10 dark:hidden"
      />
    </Link>
  );
};
export default Logo;
