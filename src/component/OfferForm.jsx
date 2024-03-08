import React, { useState } from "react";

const OfferForm = () => {
  const [userData, setUserData] = useState({
    detail: "",
    location: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("User data:", userData);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Enter Beid Details and Amount</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2"
          >
            Detail:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.detail}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-gray-700 font-bold mb-2"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={userData.location}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 font-bold mb-2"
          >
            Bied Amount:
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={userData.amount}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OfferForm;
