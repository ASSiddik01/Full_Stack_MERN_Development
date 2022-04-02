import React from "react";
import Benifit from "../Benifit/Benifit";
import { ArrowRightIcon } from "@heroicons/react/solid";

const PricePlan = (props) => {
  const { name, price, benifits } = props.plan;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-orange-200 rounded text-2xl font-bold py-2">{name}</h2>
      <span className="text-5xl font-bold">{price} </span>
      <span className="text-xl font-bold text-gray-500">/mo</span>
      <div>
        {benifits.map((benifit) => (
          <Benifit benifit={benifit}></Benifit>
        ))}
      </div>
      <button className="bg-orange-500 py-4 font-bold text-2xl flex justify-center w-full rounded mt-6 text-white">
        Buy Now <ArrowRightIcon className="w-10 h-8"></ArrowRightIcon>{" "}
      </button>
    </div>
  );
};

export default PricePlan;
