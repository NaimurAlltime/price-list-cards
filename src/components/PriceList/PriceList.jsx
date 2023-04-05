import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data.priceOptions));
  }, []);

  return (
    <div className="mx-14 mt-4">
      <h1 className="text-5xl bg-purple-300 font-medium py-3 text-center text-purple-800">
        Awesome Affordable Price List
      </h1>
      <div className="grid md:grid-cols-3 gap-3">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
