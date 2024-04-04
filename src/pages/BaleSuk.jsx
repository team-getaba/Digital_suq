import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { catagoryList } from "../api";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

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

  const img_banner = [
    "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
    "https://www.intelligentcio.com/apac/wp-content/uploads/sites/44/2023/09/AdobeStock_581856925-1.jpg",
    "https://www.creatopy.com/blog/wp-content/uploads/2018/05/animations-e-commerce.png",
  ];

  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count >= img_banner.length - 1 ? 0 : count + 1);
  }, 4000);

  return (
    <div className="flex flex-col items-center min-h-[100vh] bg-[#abb8c340]">
      <div className="w-full bg-white">
        <Navbar />
      </div>

      <div className="flex w-[65%] h-full justify-center py-[4vh] flex-row ">
        <div className="w-[30vw] lg:w-[20vw] bg-green-500 min-h-[100vh] mx-4"></div>

        <div className="flex  flex-wrap justify-center mx-2 items-center gap-2 w-full">
          <div className="w-full h-[30vh] relative overflow-hidden rounded-[5px]">
            {img_banner.map((item, index) => (
              <img
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                  count === index ? "opacity-100" : "opacity-0"
                }`}
                src={item}
                alt={`Banner ${index + 1}`}
              />
            ))}
            <div className="absolute bottom-4 flex justify-center w-full gap-2">
              {img_banner.map((_, index) => (
                <div
                  key={index}
                  className={`bg-green-600 w-3 h-3 opacity-60 rounded-full ${
                    count === index
                      ? "bg-green-600 opacity-100"
                      : "bg-green-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {list?.map((item, index) => (
            // Wrap the entire row with a Link component
            <Link
              to={`/balesuk/offer?catagoryname=${encodeURIComponent(item)}`}
              key={index}
              className="bg-white shadow-sm border-2 p-2 w-full md:w-[32%] hover:border-green-600  h-[30vh] flex rounded-[5px] items-center justify-center cursor-pointer flex-col"
            >
              <div className="h-full overflow-hidden">
                <img
                  src={img[index]}
                  className="h-full w-full object-cover hover:transform hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
              <div className="w-[80%] h-[35%] flex justify-start items-center text-center">
                {item}
              </div>
            </Link>
          ))}
        </div>
        {/* <div className=" opacity-[.1] w-[2.5vw] min-h-[100vh] lg:w-[12%]"></div> */}
      </div>
      <div className="w-full bg-white">
        <Footer />
      </div>
    </div>
  );
}
