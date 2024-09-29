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

const Profile = () => {
  return (
    <Popover placement="bottom">
      <PopoverAction className="!bg-transparent px-0           ">
        ffg
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

export default Profile;
