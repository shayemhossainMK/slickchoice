import React from "react";
import banner1 from "../../../asset/banner/banner1.jpg";
import banner2 from "../../../asset/banner/banner2.jpg";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="my-5 md:mb-16">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
