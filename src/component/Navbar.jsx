import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Portal } from "@chakra-ui/react";

const Navbar = ({ username }) => {
  return (
    <nav className="border-2 px-[10%] lg:px-[18.5%] py-4 flex justify-between items-center">
      <Link to="/balesuk">
        {/* <img
          src="https://www.solutions4ecommerce.com/wp-content/uploads/2018/01/ECommerce_Illustration_.png"
          className="h-[2em]"
        /> */}{" "}
        <div className="text-nowrap text-green-600 font-bold text-[25px]">
          IZE SUQ
        </div>
      </Link>
      <div className="flex justify-center items-center w-3/4 gap-[5%] ">
        <Link
          to="/balesuk"
          className="mr-10 hover:text-gray-500 flex justify-end items-center w-full"
        >
          Categories
        </Link>
        <Link
          to="/dembegnaorders"
          className=" hover:text-gray-500 w-full flex justify-center items-center"
        >
          Orders
        </Link>
        <Link
          to="/mybids"
          className="mr-10 hover:text-gray-500 w-full flex justify-start items-center"
        >
          My Offers
        </Link>
      </div>
      <div className="flex justify-center items-center gap-3">
        {/* <Link to="/subscribe" className="mr-10 hover:text-gray-300">
          subscribe
        </Link> */}
        <Link
          to="/dembegnapost"
          className="py-2 px-4 text-nowrap rounded-[25px] hover:text-gray-300 text-white bg-green-600"
        >
          <span className="font-bold">+</span> Post Now
        </Link>

        <Menu>
          <MenuButton>
            <img
              src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg"
              className="h-[2em] rounded-full"
            />
          </MenuButton>
          <Portal>
            <MenuList className="bg-white px-4 h-[7vh] border-2 rounded-sm flex justify-around items-center flex-col">
              <MenuItem>
                <Link
                  to="/Dembegnaaccount"
                  className=" hover:text-green-700 flex justify-center items-center"
                >
                  account
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/login"
                  className=" hover:text-green-700 flex justify-center items-center"
                >
                  logout
                </Link>
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
