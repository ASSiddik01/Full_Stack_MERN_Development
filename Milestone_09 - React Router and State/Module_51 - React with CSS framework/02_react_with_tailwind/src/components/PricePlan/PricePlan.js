import React from "react";

const PricePlan = (props) => {
  const { name, price } = props.plan;
  return (
    <div className="bg-white p-4 rounded-lg">
          <h2 className="bg-orange-200 rounded text-2xl font-bold py-2">{name}</h2>
          <span className="text-5xl font-bold">{price} </span>
          <span className="text-xl font-bold text-gray-500">/mo</span>
    </div>
  );
};

export default PricePlan;
