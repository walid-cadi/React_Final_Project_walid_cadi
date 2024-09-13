import React from "react";
import { images } from "../constant";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

export const NavBar = () => {
  return (
    <nav className="w-full bg-white flex items-center my-1 shadow-md shadow-gray-400 justify-between px-10 py-8 fixed top-0 z-50 ">
      <img src={images.logo} className="my-1" alt="logo" />
      <div className="flex items-center gap-[25vw] ">
        <div className="hidden lg:block lg:flex items-center gap-[4vw]">
          <Link
            to="/"
            className="text-gray-600 text-lg hover:border-b-2 border-gray-600">
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-600 text-lg hover:border-b-2 border-gray-600">
            Shop
          </Link>
          <Link
            to="/blog"
            className="text-gray-600 text-lg hover:border-b-2 border-gray-600">
            Blog
          </Link>
          <Link
            to="/about"
            className="text-gray-600 text-lg hover:border-b-2 border-gray-600">
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 text-lg hover:border-b-2 border-gray-600">
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="">
            <FaRegUserCircle className="w-11 h-7 text-gray-400  pe-5 border-e-2 border-gray-400" />
          </Link>
          <HiOutlineShoppingBag className="w-11 h-7 text-gray-400 ps-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
