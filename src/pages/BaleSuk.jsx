import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { catagoryList } from "../api";
import Navbar from "../component/Navbar";

export default function BaleSuk() {
  const [list, setList] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await catagoryList();
        console.log("resss", res.data);
        res.data && setList(res.data.cat);
        res.data && setImg(res.data.img);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full items-center bg-gray-100 min-h-[100vh]">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex w-full h-full">
        <div className="bg-blue-400 opacity-[.1] w-[15vw] min-h-[100vh]"></div>

        <div className="flex flex-wrap m-2 mt-[2em] justify-center items-center gap-2 w-[80%]">
          <div className="w-full h-[30vh]  mb-[8em]">
            {" "}
            <img
              className="w-full"
              src={
                "data:image/png;base64,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"
              }
            />
          </div>

          {list?.map((item, index) => (
            // Wrap the entire row with a Link component
            <Link
              to={`/balesuk/offer?catagoryname=${encodeURIComponent(item)}`}
              key={index}
              className="bg-blue-50 hover:shadow-lg p-2 w-full md:w-[28%]  h-[30vh] flex rounded-[5px] items-center justify-center cursor-pointer mb-2 flex-col gap-2"
            >
              <img src={img[index]} className="h-[80%]" />
              <div className="w-[80%] text-center">{item}</div>
            </Link>
          ))}
        </div>
        <div className="bg-blue-900 opacity-[.2] w-[15vw] min-h-[100vh]"></div>
      </div>
    </div>
  );
}
