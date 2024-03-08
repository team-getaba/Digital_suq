import React from "react";
import OrderCard from "../component/OrderCard";
import Navbar from "../component/Navbar";

export const DembegnaOrder = () => {
  return (
    <>
      <Navbar />
      <OrderCard
        title="Product Title"
        description="Product description goes here."
        price="$99.99"
      />
      <OrderCard
        title="Product Title"
        description="Product description goes here."
        price="$99.99"
      />
    </>
  );
};
