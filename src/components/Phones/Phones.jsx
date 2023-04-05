import React, { useEffect, useState } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default Phones;
