import React, { useState } from "react";
import Navbar from "../component/Navbar";

const DembegnaPost = () => {
  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted!");
  };

  return (
    <>
      <Navbar />
      <div className="p-10 m-8  ">
        <form
          onSubmit={handleSubmit}
          className="bg-sky-600 max-w-2xl mx-auto p-8 "
        >
          <div className="mb-4">
            <label
              htmlFor="productName"
              className=" text-white block font-bold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="chama, suri"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="productDetail"
              className=" text-white block font-bold mb-2"
            >
              Product Detail
            </label>
            <textarea
              id="productDetail"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="explain indetail what you want including add as much as detail as you want "
              rows="4"
              value={productDetail}
              onChange={(e) => setProductDetail(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className=" text-white block font-bold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
            <label htmlFor="brand" className=" text-white block font-bold mb-2">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nike"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="deliveryLocation"
              className=" text-white block font-bold mb-2"
            >
              Delivery Location
            </label>
            <input
              type="text"
              id="deliveryLocation"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Jima"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className=" text-white block font-bold mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="priceRange"
              className=" text-white block font-bold mb-2"
            >
              Price Range
            </label>
            <div className="flex">
              <div className="mr-2">
                <label
                  htmlFor="priceRangeMin"
                  className=" text-white block font-bold mb-2"
                >
                  Min Range
                </label>
                <input
                  type="text"
                  id="priceRangeMin"
                  className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter max price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default DembegnaPost;
