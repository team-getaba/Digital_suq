import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ username }) => {
  return (
    <nav className="bg-gray-800 px-[10%] py-4 flex justify-between items-center text-white">
      <div>BaleSuq</div>
      <div className="flex justify-center items-center w-3/4 gap-[10%]">
        <Link to="/dembegnapost" className="mr-10 hover:text-gray-300">
          Post
        </Link>
        <Link to="/dembegnaorders" className=" hover:text-gray-300">
          Orders
        </Link>
      </div>
      <div>
        <Link
          to="/Dembegnaaccount"
          className=" hover:text-gray-300 flex justify-center items-center gap-3"
        >
          {localStorage.getItem("username")}
          <div className="bg-red-200 h-[2em] w-[2em] rounded-full"></div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
