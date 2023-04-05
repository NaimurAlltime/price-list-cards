import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-sky-300 mt-4 rounded-md  py-5 flex flex-col">
      <h3 className="text-center">
        <span className="text-4xl text-purple-400 font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl font-bold text-yellow-200">/mon</span>
      </h3>
      <h4 className="text-2xl font-bold text-center">{price.name}</h4>
      <div className="ml-6">
        <p className="text-xl font-medium mt-2 text-white underline mb-2">
          Features:
        </p>
        {price.features.map((feature, idx) => (
          <Feature key={idx} feature={feature}>
            {" "}
          </Feature>
        ))}
      </div>
      <button className="w-2/4 ml-4 hover:bg-green-700 bg-green-500 py-1 px-2 text-xl font-medium rounded-md text-white mt-auto">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
