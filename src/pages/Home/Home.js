import React from "react";
import AllBrand from "./AllBrand/AllBrand";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="md:py-5 md:px-20">
      <Banner></Banner>
      <AllBrand></AllBrand>
    </div>
  );
};

export default Home;
