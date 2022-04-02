import React from "react";
import PricePlan from "../PricePlan/PricePlan";

const Pricing = () => {
  const pricePlans = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benifits: ["1 month free", "Not access dashboard", "1 user use"],
    },
    {
      id: 1,
      name: "Standard",
      price: 9.99,
      benifits: ["Access dashboard", "10 user use", "24/7 Support"],
    },
    {
      id: 1,
      name: "Premium",
      price: 21.99,
      benifits: ["Access dashboard", "50 user use", "24/7 Support"],
    },
  ];
  return (
    <div className="bg-orange-400 mt-8 p-4">
      <h2 className="text-4xl">Our Price Plan</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {pricePlans.map((plan) => (
          <PricePlan key={plan.id} plan={plan}></PricePlan>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
