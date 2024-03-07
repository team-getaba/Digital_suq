import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { catagoryList } from "../api";

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
      <div className="w-full h-[4em] bg-white"></div>

      <div className="flex w-full h-full">
        <div className="bg-blue-400 w-[15vw] min-h-[100vh]"></div>

        <div className="flex flex-wrap m-2 mt-[2em] justify-center items-center gap-2 w-[80%]">
          <div className="w-full h-[30vh] bg-red-400 mb-[2em]"></div>

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
      </div>
    </div>
  );
}
