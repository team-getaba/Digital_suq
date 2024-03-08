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
    <>
      <Navbar />
      {posts?.map((item, index) => (
        <Link to={"/details"} key={index}>
          <OrderCard
            title={item.product_name}
            description={item.detail}
            price={item.price_range}
          />
        </Link>
      ))}
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
    </>
  );
};
