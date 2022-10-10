import React from "react";
import AllBrand from "./AllBrand/AllBrand";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="md:max-w-[1480px] mx-auto">
      <div className="md:py-5 md:px-20">
        <Banner></Banner>
        <AllBrand></AllBrand>
      </div>
    </div>
  );
};

export default Home;
