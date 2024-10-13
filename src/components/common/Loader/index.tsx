import { cn } from "keep-react/utils";
import React from "react";

interface PropsTypes {
  className?: string;
}

const Loader: React.FC<PropsTypes> = ({ className }) => {
  return (
    <div
      className={cn(
        "object-cover z-50 shadow-lg rounded-md overflow-hidden",
        className
      )}
    >
      <video className="h-fit w-fit" autoPlay loop muted playsInline>
        <source src="/loader.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loader;
