import React from "react";
import { Link } from "react-router-dom";

const OfferListTable = ({
  offerorName,
  details,
  price,
  date,
  location,
  status,
}) => {
  return (
    <div className="border-2 p-4 py-[2.5vh] mb-4 rounded-lg hover:bg-green-50 hover:cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-lg font-semibold capitalize">{offerorName}</h2>
          <p className="text-gray-500 truncate">{details}</p>
        </div>
        <div className="flex justify-between items-center gap-2 w-full ">
          <div className="flex flex-col justify-center items-start">
            <p className="text-lg font-semibold">${price}</p>
            <p className="text-gray-500">price in BIRR</p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-lg font-semibold">0</p>
            <p className="text-gray-500">messages</p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-lg font-semibold">{location}</p>
            <p className="text-gray-500">Location</p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-lg font-semibold capitalize">
              {String(Math.random() < 0.5)}
            </p>
            <p className="text-gray-500">verified</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mt-2">
        <p className="">{date.replace("T", ", ")}</p>
        <p className="text-green-600 font-bold">
          {" "}
          {status ? "status: pending" : `chat with ${offerorName}`}
        </p>
      </div>
    </div>
  );
};

export default OfferListTable;
