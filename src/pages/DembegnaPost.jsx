import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { postProduct } from "../api";

const DembegnaPost = () => {
  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postProduct(
      productDetail,
      category,
      deliveryLocation,
      productName,
      `${minPrice} ${maxPrice}`,
      ""
    );

    console.log(response);
    console.log("Form submitted!");
  };

  return (
    <>
      <Navbar />
      <div className="p-10 ">
        <form onSubmit={handleSubmit} className="  max-w-2xl mx-auto p-8 m-8">
          <div className="mb-4 ">
            <label htmlFor="productName" className="  block font-bold mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="chama, suri"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productDetail" className="  block font-bold mb-2">
              Product Detail
            </label>
            <textarea
              id="productDetail"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="explain indetail what you want including add as much as detail as you want "
              rows="4"
              value={productDetail}
              onChange={(e) => setProductDetail(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="  block font-bold mb-2">
              Category
            </label>
            <select
              id="category"
              className="appearance-none border border-gray-800 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="deliveryLocation"
              className="  block font-bold mb-2"
            >
              Delivery Location
            </label>
            <input
              type="text"
              id="deliveryLocation"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Jima"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="priceRange" className="  block font-bold mb-2">
              Price Range
            </label>
            <div className="flex">
              <div className="mr-2">
                <label
                  htmlFor="priceRangeMin"
                  className="  block font-bold mb-2"
                >
                  Min Range
                </label>
                <input
                  type="text"
                  id="priceRangeMin"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Enter min price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="priceRangeMax" className="block font-bold mb-2">
                  Max Range
                </label>
                <input
                  type="text"
                  id="priceRangeMax"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Enter max price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default DembegnaPost;
