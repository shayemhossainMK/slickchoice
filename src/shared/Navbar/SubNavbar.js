import { faFire, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.css";

const SubNavbar = () => {
  return (
    <div className="bg-primary text-center sticky top-0 z-50">
      <p className="py-2 md:py-3 text-gray-100 text-xs md:text-lg">
        <FontAwesomeIcon
          className="text-neutral mr-2"
          icon={faRocket}
        ></FontAwesomeIcon>
        We will launch on 2nd November, 2022
      </p>
    </div>
  );
};

export default SubNavbar;
