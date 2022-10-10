import React, { useEffect, useState } from "react";
import AllBrandRow from "./AllBrandRow";

const AllBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="pb-16">
      <div className="my-5 md:mb-10 px-5 md:px-0">
        <h2 className=" text-xl md:text-3xl font-semibold custom-font-three">
          Popular Brands
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-7 gap-y-12 px-3 md:px-0">
        {brands.map((brand) => (
          <AllBrandRow key={brand.id} brand={brand}></AllBrandRow>
        ))}
      </div>
    </div>
  );
};

export default AllBrand;
