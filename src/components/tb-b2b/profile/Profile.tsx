import { Button } from "keep-react";

const Profile = () => {
  return (
    <div className="flex flex-col px-5 py-2">
      <h1 className="bg-red-400 ">Profile</h1>
      <div>
        <p>User Name:</p>
        <p>Full Name</p>
        <p>Email:</p>
        <p>Phone Number:</p>
        <p>Company Name:</p>
        <p>Members Since:</p>
        <p>Status:</p>
        <p>Created By:</p>
      </div>
      <Button>Update</Button>
    </div>
  );
};

export default Profile;
