import React, { useState } from "react";
import { offer } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OfferForm = ({ formData }) => {
  const [userData, setUserData] = useState({
    detail: "",
    location: "",
    amount: "",
  });
  //   export const offer = async (poster_id, post_id, details, price, offerer_id) => {
  console.log("form data: ", formData);
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
  const userName = localStorage.getItem("username");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("//////xxxxxx////", postId);
    const res = await offer(
      formData.user_id,
      String(formData.id),
      userData.detail,
      userData.amount,
      userName,
      userData.location
    );
    console.log("User data: to push", userData);
    res?.data && toast("offer set succesfuly");
    // res?.data && alert("offer set succesfuly");
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Enter Bid Details and Amount</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2"
          >
            Detail:
          </label>
          <input
            type="text"
            id="detail"
            name="detail"
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
            Bid Amount:
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
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default OfferForm;
