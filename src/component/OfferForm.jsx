import React, { useState } from "react";
import { offer } from "../api";

const OfferForm = ({ formData }) => {
  const [userData, setUserData] = useState({
    detail: "",
    location: "",
    amount: "",
  });
  //   export const offer = async (poster_id, post_id, details, price, offerer_id) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  //

  // export const offer = async (poster_id, post_id, details, price, offerer_id) => {
  //   const data = {
  //     poster_id: poster_id,
  //     post_id: post_id,
  //     details: details,
  //     price: price,
  //     offerer_id: offerer_id,
  //   };

  //   const res = await axios.post(`/offer`, data);
  //   return res;
  // };

  const postId = localStorage.getItem("postid");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("//////xxxxxx////", postId);
    const res = await offer(
      formData.user_id,
      String(formData.id),
      formData.detail,
      userData.amount,
      "2",
      formData.location
    );
    console.log("User data:", res);
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
