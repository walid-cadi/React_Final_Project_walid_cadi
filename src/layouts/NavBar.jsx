import React from "react";
import { images } from "../constant";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-evenly">
      <img src={images.logo} alt="logo" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[4vw]">
          <Link to="">Home</Link>
          <Link to="">Shop</Link>
          <Link to="">Blog</Link>
          <Link to="">About</Link>
          <Link to="">Contact</Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};
