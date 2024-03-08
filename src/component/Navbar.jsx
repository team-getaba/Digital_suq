import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ username }) => {
  return (
    <nav className="bg-gray-800 px-[10%] py-4 flex justify-between items-center text-white">
      <Link to="/dembegnapost">
        <img
          src="https://w7.pngwing.com/pngs/264/324/png-transparent-logo-shopping-shopping-logo-design-other-flag-free-logo-design-template-thumbnail.png"
          className="h-[2em]"
        />
      </Link>
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
          <img
            src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg"
            className="h-[2em] rounded-full"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
