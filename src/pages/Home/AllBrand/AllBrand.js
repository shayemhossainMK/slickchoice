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
    <div className="">
      <div className="my-5">
        <h2 className="text-3xl font-semibold custom-font-three">
          Popular Brands
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-7 gap-y-12">
        {brands.map((brand) => (
          <AllBrandRow key={brand.id} brand={brand}></AllBrandRow>
        ))}
      </div>
    </div>
  );
};

export default AllBrand;
