import React from "react";

const OrderCard = ({ title, description, price }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-xl">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
          <p className="mt-4 text-right">
            <span className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
