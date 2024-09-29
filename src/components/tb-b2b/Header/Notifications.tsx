import React from "react";
import {
  Avatar,
  AvatarImage,
  Button,
  Popover,
  PopoverAction,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
} from "keep-react";
import { Bell } from "phosphor-react";

const Notifications = () => {
  return (
    <Popover placement="bottom">
      <PopoverAction>
        <Bell size={20} color="#1C222B" />
      </PopoverAction>
      <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-metal-900">
        <div>
          <Avatar>
            <AvatarImage src={""} />
          </Avatar>
        </div>
        <div>
          <PopoverHeading>Keep Designer</PopoverHeading>
          <PopoverDescription>keepdesign@email.com</PopoverDescription>
        </div>
        <Button variant="outline">Follow</Button>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
