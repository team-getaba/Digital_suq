import React, { useState } from "react";
import { subScribe } from "../api";

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Bronze",
      postLimit: 2,
      priceRange: "Up to 1000 BRR",
      teamSupport: true,
    },
    {
      name: "Silver",
      postLimit: 10,
      priceRange: "Up to 10,000 BRR",
      teamSupport: true,
    },
    {
      name: "Gold",
      postLimit: "Unlimited",
      priceRange: "Unlimited",
      teamSupport: true,
    },
  ];

  const handlePlanSelect = async (index) => {
    setSelectedPlan(plans[index]);
    const res = await subScribe();
    console.log(res);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Subscription Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-[40vh]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg cursor-pointer ${
              selectedPlan === plan
                ? "border-blue-500"
                : "border-gray-300 hover:border-blue-500"
            }`}
            onClick={() => handlePlanSelect(index)}
          >
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-600">Post Limit: {plan.postLimit}</p>
            <p className="text-gray-600">Price Range: {plan.priceRange}</p>
            <p className="text-gray-600">
              Team Support: {plan.teamSupport ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Selected Plan: {selectedPlan.name}
          </h2>
          <p className="text-gray-600">Post Limit: {selectedPlan.postLimit}</p>
          <p className="text-gray-600">
            Price Range: {selectedPlan.priceRange}
          </p>
          <p className="text-gray-600">
            Team Support: {selectedPlan.teamSupport ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlan;
