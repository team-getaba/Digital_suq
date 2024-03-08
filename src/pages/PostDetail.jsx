import React, { useEffect, useState } from "react";
import OfferForm from "../component/OfferForm";
import OfferListTable from "../component/offerListTable";
import Navbar from "../component/Navbar";
import { useLocation } from "react-router";
import { totalOffers } from "../api";

const PostDetail = () => {
  const [formData, setFormData] = useState();
  const [posts, setPosts] = useState();
  const location = useLocation();
  const resdata = location.state && location.state.data;

  const role = localStorage.getItem("role");
  const r = async () => {
    const res = await totalOffers(resdata?.id);

    // setPosts(res?.data);
    console.log("//////zzzzzzzz///////////", resdata);
    localStorage.setItem("postid", resdata?.id);
  };

  useEffect(() => {
    console.log("mmmmmmmmmmm", resdata);
    resdata?.id && role == "Seller" && r();
  }, [role, resdata?.id]);

  return (
    <>
      <Navbar />
      <div className="p-8 m-8 w-full flex justify-center">
        <div className=" w-3/4 ">
          <div className="container mx-auto m-8">
            <h1 className="text-2xl font-bold mb-4">Product Detail </h1>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-lg font-bold">
                  <h2 className="text-blue-600">Product Name:</h2>
                  <h2 className="text-blue-600">Product Detail:</h2>
                  <h2 className="text-blue-600">Category:</h2>
                  <h2 className="text-blue-600">Delivery Location:</h2>
                  <h2 className="text-blue-600">Price Range:</h2>
                </div>
                <div className="text-gray-700">
                  <p>{resdata?.product_name}</p>
                  <p>{resdata?.detail}</p>
                  <p>{resdata?.catagory}</p>
                  <p>{resdata?.location}</p>
                  <p>{resdata?.price_range}</p>
                </div>
              </div>
            </div>
          </div>
          {role == "Seller" ? (
            <OfferForm formData={resdata} />
          ) : (
            posts?.map((item, index) => (
              <OfferListTable
                key={index}
                offerorName={item.offerer_name}
                details={item.details}
                price={item.price}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
