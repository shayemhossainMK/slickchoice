import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AllBrandRow = ({ brand }) => {
  const { name, img, cashbackAmount } = brand;
  return (
    <div>
      <div className="bg-white rounded-lg py-3 flex items-center justify-center shadow-md">
        <img className="w-40" src={img} alt="" />
      </div>
      <p className="mt-2 ml-1 text-primary custom-font-three">
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Up to{" "}
        {cashbackAmount}% Cashback
      </p>
    </div>
  );
};

export default AllBrandRow;
