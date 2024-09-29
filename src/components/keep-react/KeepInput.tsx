import { Input, Label } from "keep-react";
import { cn } from "keep-react/utils";
import React, { useState } from "react";

type KeepInputProps = React.ComponentProps<typeof Input> & {
  type?: string;
  className?: string;
  label?: string;
  value?: string;
  onChange: (e: any) => void;
};

const KeepInput: React.FC<KeepInputProps> = ({
  type = "text",
  className,
  label,
  value,
  onChange,
  ...rest
}) => {
  const [data, setData] = useState("");

  if (label) {
    return (
      <fieldset className="space-y-1">
        <Label htmlFor="name">Enter Name</Label>
        <Input
          type={type}
          {...rest}
          className={cn(
            "border border-metal-300 text-base placeholder:text-metal-300",
            className
          )}
          value={value || data}
          onChange={(e) => {
            setData(e.target.value);
            onChange(e.target.value);
          }}
        />
      </fieldset>
    );
  } else {
    return (
      <Input
        type={type}
        {...rest}
        className={cn(
          "border border-metal-300 text-base placeholder:text-metal-300",
          className
        )}
        value={data && data}
        onChange={(e) => {
          setData(e.target.value);
          onChange(e.target.value);
        }}
      />
    );
  }
};

export default KeepInput;
