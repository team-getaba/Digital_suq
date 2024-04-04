import React, { useState } from "react";
import { SignUpApi } from "../api/index";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [psw, setPSW] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [role, setRole] = useState("Buyer");
  const navigate = useNavigate();
  const singupbtn = async () => {
    const res = await SignUpApi(fname, lname, phone, location, role, psw);
    console.log(res);
    res.access_token ? navigate("/login") : toast(res.detail);
  };

  const img_link = [
    "https://t3.ftcdn.net/jpg/01/48/69/92/360_F_148699287_VMpegNv56NrjCDJesXYXvDEbvwVbEK5Z.jpg",
    "https://media.istockphoto.com/id/1281338582/photo/happy-pretty-lady-about-to-enter-the-mall-for-shopping.jpg?s=612x612&w=0&k=20&c=SkwkDvF_XkOMAAX0GFIzGu2-jQWL1MkgShDCY5tokk8=",
  ];

  return (
    <div className="flex justify-center items-center h-screen flex-row">
      <ToastContainer />
      <div className="flex justify-center items-center h-screen flex-col w-full">
        <h1 className="text-4xl mb-8">DigitalSuq</h1>
        <h2 className="text-xl mb-2">Sign Up</h2>
        <form className="w-full max-w-lg p-8 ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
                onChange={(e) => setPSW(e.target.value)}
              />
              <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-phone"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-phone"
                type="tel"
                placeholder="09-102-030-40"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-location"
              >
                Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-location"
                type="text"
                placeholder="City, State"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-country"
              >
                Select Role
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-country"
                onChange={(e) => setRole(e.target.value)}
              >
                <option>Buyer</option>
                <option>Seller</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={singupbtn}
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-green-500 hover:text-green-700">
              Login
            </a>
          </p>
        </form>
      </div>
      <div className="w-full h-full bg-green-300 hidden md:block">
        <img
          src={img_link[0]}
          alt="login img"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
