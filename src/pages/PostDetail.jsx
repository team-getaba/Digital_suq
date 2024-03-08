import React from "react";
import OfferForm from "../component/OfferForm";
import OfferListTable from "../component/offerListTable";

const PostDetail = () => {
  const formData = {
    productName: "Example Product",
    productDetail: "This is a sample product detail.",
    category: "Electronics",
    deliveryLocation: "Jima",
    minPrice: "100",
    maxPrice: "200",
  };

  return (
    <div className="p-8 m-8 w-full flex justify-center">
      <div className=" w-3/4">
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4">Product Detail </h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-lg font-bold">
                <h2 className="text-blue-600">Product Name:</h2>
                <h2 className="text-blue-600">Product Detail:</h2>
                <h2 className="text-blue-600">Category:</h2>
                <h2 className="text-blue-600">Delivery Location:</h2>
                <h2 className="text-blue-600">Price Range:</h2>
              </div>
              <div className="text-gray-700">
                <p>{formData.productName}</p>
                <p>{formData.productDetail}</p>
                <p>{formData.category}</p>
                <p>{formData.deliveryLocation}</p>
                <p>
                  Min: {formData.minPrice}, Max: {formData.maxPrice}
                </p>
              </div>
            </div>
          </div>
        </div>

        <OfferForm />
        <OfferListTable offerorName={""} details={""} price={""} />
      </div>
    </div>
  );
};

export default PostDetail;
