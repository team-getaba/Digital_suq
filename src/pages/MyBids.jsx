import React, { useEffect, useState } from "react";
import OfferForm from "../component/OfferForm";
import OfferListTable from "../component/offerListTable";
import Navbar from "../component/Navbar";
import { useLocation, Link } from "react-router";
import { myOffers } from "../api";

const MyBids = () => {
  const [posts, setPosts] = useState();

  const r = async () => {
    const res = await myOffers();
    res && setPosts(res?.data);
  };
  useEffect(() => {
    r();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-8 w-full flex justify-center px-[10%] lg:px-[18.5%] bg-[#abb8c340] min-h-[calc(100vh-4.8em)]">
        <div className=" w-3/4 bg-white p-4 px-8">
          <div>
            <div className="font-bold text-2xl py-4">My Offers List</div>
            {posts
              ?.slice()
              ?.reverse()
              ?.map((item, index) => (
                <OfferListTable
                  key={index}
                  offerorName={item.offerer_name}
                  details={item.details}
                  price={item.price}
                  date={item.date}
                  location={item.location}
                  status={"pending"}
                />
              ))}
          </div>
        </div>

        {!posts && (
          <div className="text-nowrap h-full bg-red">
            You have no Offers set Yet Please redirect to
            <Link to="/balesuk" className="text-blue-600 p-1">
              here
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBids;
