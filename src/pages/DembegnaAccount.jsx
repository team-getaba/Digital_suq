import React, { useState, useEffect } from "react";
import { userDeatil } from "../api";

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

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Account Details</h1>
      {userData ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              First Name:
            </label>
            <p className="text-gray-900">{userData.firstName}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Last Name:
            </label>
            <p className="text-gray-900">{userData.lastName}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone:</label>
            <p className="text-gray-900">{userData.phone}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Location:
            </label>
            <p className="text-gray-900">{userData.location}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              created at:
            </label>
            <p className="text-gray-900">{userData.created_at}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              plan expaired date:
            </label>
            <p className="text-gray-900">{userData.plan_expire_date}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">plan:</label>
            <p className="text-gray-900">{userData.plan}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              verified:
            </label>
            <p className="text-gray-900">{userData.verified ? "yes" : "no"}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DembegnaAccount;
