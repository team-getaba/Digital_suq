import React from "react";

const OfferListTable = ({ offerorName, details, price }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <div>
        <h2 className="text-lg font-semibold">${offerorName}</h2>
        <p className="text-gray-500">${details}</p>
      </div>
      <div>
        <p className="text-lg font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default OfferListTable;
