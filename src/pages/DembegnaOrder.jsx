import React, { useEffect, useState } from "react";
import OrderCard from "../component/OrderCard";
import Navbar from "../component/Navbar";

import { myPosts } from "../api";
import { Link } from "react-router-dom";

export const DembegnaOrder = () => {
  const [posts, setPosts] = useState();
  const r = async () => {
    const res = await myPosts();
    setPosts(res.data);
    console.log(res);
  };

  useEffect(() => {
    r();
  }, []);

  return (
    <div className="bg-[#abb8c340] min-h-[100vh]">
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="flex justify-center items-center w-full gap-4 py-3">
        <div className=" flex flex-col gap-4 py-3 w-[85%] lg:w-1/3">
          {posts
            ?.slice()
            ?.reverse()
            ?.map((item, index) => (
              <Link to="/details" state={{ data: item }} key={index}>
                <OrderCard
                  title={item.product_name}
                  description={item.detail}
                  price={item.price_range}
                />
              </Link>
            ))}
        </div>
      </div>
      {/* <OrderCard
        title="Product Title"
        description="Product description goes here."
        price="$99.99"
      />
      <OrderCard
        title="Product Title"
        description="Product description goes here."
        price="$99.99"
      /> */}
      {posts?.length == 0 && (
        <div className="text-nowrap h-full bg-red">
          You have no orders Please Post
          <Link to="/dembegnapost" className="text-blue-600 p-1">
            here
          </Link>
        </div>
      )}
    </div>
  );
};
