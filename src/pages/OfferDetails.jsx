import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import { catagorySpecfic } from "../api";

import OrderCard from "../component/OrderCard";
import { data } from "browserslist";
import Navbar from "../component/Navbar";

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

  //   to={`/balesuk/offer?catagoryname=${encodeURIComponent(item)}`}
  return (
    <div className="w-full bg-[#abb8c340] min-h-[calc(100vh-4.8em)]">
      <div className="w-full bg-white">
        <Navbar />
      </div>
      {list
        ?.slice()
        ?.reverse()
        ?.map((item, index) => (
          //   // Wrap the entire row with a Link component
          <Link to={`/details`} key={index} state={{ data: item }}>
            <OrderCard
              title={item.product_name}
              description={item.detail}
              price={item.price_range}
            />
          </Link>
        ))}
      {list?.length == 0 && <div>no posts for now</div>}
    </div>
  );
}
