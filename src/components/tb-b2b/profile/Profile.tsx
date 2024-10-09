import { IconAuthentication } from "@/interfaces/icons";
import { Button } from "keep-react";
import { nanoid } from "nanoid";
import Link from "next/link";

interface PropTypes {
  label: string;
  value: string;
  // username: string;
  // fullname: string;
  // email: string;
  // phoneNumber: number;
  // company: string;
  // memberSince: string;
  // status: string;
  // createdBy: string;
}

const Data: PropTypes[] = [
  { label: "User Name:", value: "Shanto" },
  { label: "Full Name:", value: "Shanto Khan" },
  { label: "Email:", value: "shanto.khan@gmail.com" },
  { label: "Phone Number:", value: "01712345678" },
  { label: "Company:", value: "ABC" },
  { label: "Member Since:", value: "2020" },
  { label: "Status:", value: "Active" },
  { label: "Created By:", value: "Admin" },
];

const Profile = () => {
  return (
    <div className="px-12 py-12 ">
      <IconAuthentication.User size={25} />
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          User Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t bg-white border-gray-100 px-5 rounded-md">
        {Data.map((element) => (
          <dl key={nanoid()} className="divide-y divide-gray-100">
            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                {element.label}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {element.value}
              </dd>
            </div>
          </dl>
        ))}

        <Link href="/profile/update">
          <Button>Update Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
