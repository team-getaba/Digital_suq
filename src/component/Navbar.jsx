import React from "react";

const Navbar = ({ username }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-evenly items-center text-white">
      <div className=" w-3/4">
        <a
          href="/dembegnapost"
          className="mr-10 text-white hover:text-gray-300"
        >
          Post
        </a>
        <a href="/dembegnaorders" className="text-white hover:text-gray-300">
          Orders
        </a>
      </div>
      <div>
        <span className="mr-4 text-white">{username}</span>
        user name
      </div>
    </nav>
  );
};

export default Navbar;
