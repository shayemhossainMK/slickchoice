import {
  faAngleDown,
  faHome,
  faMagnifyingGlass,
  faSackDollar,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../asset/Slick-Choice-Logo.png";
import SubNavbar from "./SubNavbar";
import "./Navbar.css";
import Home from "../../pages/Home/Home";

const Navbar = () => {
  return (
    <div>
      <SubNavbar></SubNavbar>
      <div class="navbar bg-base-100 md:px-20 shadow-md md:py-5">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a class=" text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div class="navbar-center -ml-80 hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <div className="flex  items-center gap-1">
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faHome}
                ></FontAwesomeIcon>
                <a>Home</a>
              </div>
            </li>
            <li>
              <div className="flex  items-center gap-1">
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faStore}
                ></FontAwesomeIcon>
                <a>Store</a>
              </div>
            </li>
            <li>
              <div className="flex  items-center gap-2">
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faSackDollar}
                ></FontAwesomeIcon>
                <a>Cashback</a>
              </div>
            </li>
            <li tabIndex={0}>
              <div className="flex items-center gap-2">
                <a>More</a>
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </div>
              <ul className="p-2 bg-white shadow-md z-20">
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Popular Brands</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="navbar-end gap-2 md:gap-3">
          <a class="btn btn-primary btn-outline rounded-none px-5">Sign In</a>
          <a class="btn btn-primary rounded-none px-5 text-neutral">Sign Up</a>
          <div className="hidden md:block">
            <div className="flex gap-1 items-center ">
              <input
                type="text"
                placeholder="Search "
                className="input  input-bordered focus:outline-none md:w-[270px] rounded-none"
              />
              <p className="btn btn-primary rounded-none ">
                <FontAwesomeIcon
                  className="text-neutral text-xl"
                  icon={faMagnifyingGlass}
                ></FontAwesomeIcon>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Home></Home>
    </div>
  );
};

export default Navbar;
