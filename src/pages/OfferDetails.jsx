import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import { catagorySpecfic } from "../api";

export default function OfferDetails() {
  const location = useLocation();
  const [list, setList] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const categoryName = queryParams.get("catagoryname");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await catagorySpecfic(categoryName);
        console.log("resss", res.data);
        res.data && setList(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-gray-100 min-h-[100vh]">
      <div className="w-full h-[4em] bg-white mb-[2em]"></div>
      <div className="flex flex-col w-full justify-center items-center md:w-[40em]">
        {list?.map((item, index) => (
          // Wrap the entire row with a Link component
          <Link
            to={`/balesuk/offer?catagoryname=${encodeURIComponent(item)}`}
            key={index}
            className="bg-blue-100 hover:bg-blue-300 p-2 w-full h-[10em] flex rounded-[5px] items-center justify-center cursor-pointer mb-2"
          >
            <div className="w-[80%] text-center">{item.catagory}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
