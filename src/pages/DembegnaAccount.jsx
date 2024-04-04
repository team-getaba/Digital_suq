import React, { useState, useEffect } from "react";
import { userDeatil } from "../api";
import Navbar from "../component/Navbar";

const DembegnaAccount = () => {
  const [userData, setUserData] = useState({}); // State to store user data

  const fetchUserData = async () => {
    const reapons = await userDeatil();
    setUserData(reapons.data);
    console.log(reapons.data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  console.log("usedata", userData);

  const user = {
    created_at: userData?.created_at,
    disabled: userData?.disabled,
    email: userData?.email,
    firstName: userData?.firstName,
    gender: userData?.gender,
    id: userData?.id,
    lastName: userData?.lastName,
    location: userData?.location,
    others: userData?.others,
    phone: userData?.phone,
    plan: userData?.plan,
    plan_expire_date: userData?.plan_expire_date,
    role: userData?.role,
    verified: userData?.verified,
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh_-_4.8em)] bg-[#abb8c340] flex items-center flex-col">
        <div className="w-full h-[15vh] bg-green-600 relative">
          <div className="bg-green-600 h-[10em] w-[10em] rounded-full absolute bottom-[-5em] ml-[10vw]">
            <img
              src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg"
              className="h-full w-full rounded-full"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold my-[5vh]">Account Details</h1>
        {userData ? (
          <div className="w-1/3 rounded-lg">
            <div className="flex bg-white flex-col w-full justify-center py-12 sm:px-6 lg:px-8">
              <div className="flex flex-wrap w-full ">
                <div className="px-4 w-full flex flex-wrap">
                  <div className="mb-[4vh] w-1/2 ">
                    <label className="block text-sm font-medium text-gray-700">
                      First Name:
                    </label>
                    <span className="block mt-1 text-lg font-semibold text-gray-900">
                      {user.firstName}
                    </span>
                  </div>

                  <div className="mb-[4vh] w-1/2 ">
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name:
                    </label>
                    <span className="block mt-1 text-lg font-semibold text-gray-900">
                      {user.lastName}
                    </span>
                  </div>

                  <div className="mb-[4vh] w-1/2 ">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone:
                    </label>
                    <span className="block mt-1 text-lg font-semibold text-gray-900">
                      {user.phone}
                    </span>
                  </div>

                  <div className="mb-[4vh] w-1/2 ">
                    <label className="block text-sm font-medium text-gray-700">
                      Email:
                    </label>
                    <span className="block mt-1 text-lg font-semibold text-gray-900">
                      {user.email}
                    </span>
                  </div>
                  <div className="mb-[4vh] w-1/2 ">
                    <label className="block text-sm font-medium text-gray-700">
                      Role:
                    </label>
                    <span className="block mt-1 text-lg font-semibold text-gray-900">
                      {user.role}
                    </span>
                  </div>
                  <div className="mb-[4vh] w-1/2 ">
                    <label className="block text-sm font-medium text-gray-700">
                      location:
                    </label>
                    <span className="block mt-1 text-lg font-semibold text-gray-900">
                      {user.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default DembegnaAccount;
