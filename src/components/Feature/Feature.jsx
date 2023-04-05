import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="flex">
      <CheckCircleIcon className="h-6 w-6 text-purple-600 pr-2" />
      <span>{feature}</span>
    </div>
  );
};

export default Feature;
