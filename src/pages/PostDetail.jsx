import React, { useEffect, useState } from "react";
import OfferForm from "../component/OfferForm";
import OfferListTable from "../component/offerListTable";
import Navbar from "../component/Navbar";
import { useLocation } from "react-router";
import { offerList } from "../api";

const PostDetail = () => {
  const [formData, setFormData] = useState();
  const [posts, setPosts] = useState();
  const location = useLocation();
  const resdata = location.state && location.state.data;

  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");
  const r = async () => {
    const res = await offerList(resdata?.id);
    res && setPosts(res?.data);

    localStorage.setItem("postid", res);
    console.log("rssssssllklkasd", res);
  };
  // alert(`${resdata?.user_id}, ${userId}`);

  useEffect(() => {
    console.log("zzklmal res data ", resdata);
    resdata?.id && resdata?.user_id == userId && r();
    // resdata?.id && role == "Buyer" && r();
  }, [role, resdata?.id]);

  return (
    <>
      <Navbar />
      <div className="p-8 w-full flex justify-center px-[10%] lg:px-[18.5%] bg-[#abb8c340] min-h-[calc(100vh-4.8em)]">
        <div className=" w-3/4 bg-white p-4 px-8">
          <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Product Details
            </h1>
            <div className=" border border-gray-200 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-lg font-bold text-green-600">
                  <h2 className="mb-2">Product Name:</h2>
                  <h2 className="mb-2">Product Detail:</h2>
                  <h2 className="mb-2">Category:</h2>
                  <h2 className="mb-2">Delivery Location:</h2>
                  <h2 className="mb-2">Price Range:</h2>
                </div>
                <div className="text-gray-700 font-bold text-lg">
                  <p className="mb-2">{resdata?.product_name}</p>
                  <p className="mb-2">{resdata?.detail}</p>
                  <p className="mb-2">{resdata?.catagory}</p>
                  <p className="mb-2">{resdata?.location}</p>
                  <p className="mb-2">{resdata?.price_range}</p>
                </div>
              </div>
            </div>
          </div>

          {resdata?.user_id != userId ? (
            <OfferForm formData={resdata} />
          ) : (
            <div>
              <div className="font-bold text-2xl py-4">Offer Lists</div>
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
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
