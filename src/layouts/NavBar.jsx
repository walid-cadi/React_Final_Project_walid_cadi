import React, { useState } from "react";
import { images } from "../constant";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MyAppContext } from "../context";

export const NavBar = () => {
  const navigate = useNavigate()
  const { product, setProduct } = MyAppContext();
  const { subtotal, setSubtotal } = MyAppContext();
  const [Cart, setCart] = useState(false);
  const toggleCart = () => {
    setCart(!Cart);
  };
  setSubtotal(product.reduce((total, item) => total + item.price, 0))

  const deleteProduct = (index) => {
    product.splice(index, 1);
    setCart(!Cart);
  };
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
          <Link to="/auth">
            <FaRegUserCircle className="w-11 h-7 text-gray-400  pe-5 border-e-2 border-gray-400" />
          </Link>
          <div className="relative">
            <HiOutlineShoppingBag
              onClick={toggleCart}
              className="w-11 h-7 text-gray-400 ps-5 cursor-pointer"
            />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {product.length}
            </span>
          </div>
        </div>
      </div>
      {/* Cart  */}
      {Cart && (
        <div className="fixed top-16 right-10 w-80  bg-white shadow-lg p-10 z-20">
          {product.length > 0 ? (
            <>
              {product.map((e, i) => (
                <div key={i} className="flex justify-between items-center py-2">
                  <img
                    src={images[e.image]}
                    alt={e.title}
                    className="w-20 h-24"
                  />
                  <div className="flex-1 pl-4">
                    <p className="hover:text-red-400 duration-500">{e.title}</p>
                    <p> ${e.price}</p>
                  </div>
                  <button
                    onClick={() => {
                      deleteProduct(i);
                    }}
                    className="text-black ">
                    x
                  </button>
                </div>
              ))}
              {/* Subtotal */}
              <div className="flex gap-3 items-center ms-32 mt-4  pt-4">
                <p className="">Subtotal:</p>
                <p className="">${subtotal.toFixed(2)}</p>
              </div>
              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <button onClick={() => {navigate("/shoppingCart")}} className="bg-black text-white px-7 py-3 rounded-full hover:bg-red-500 duration-500">
                  View Cart
                </button>
                {/* <button className="bg-black text-white px-7 py-3 rounded-full  hover:bg-red-500 duration-500">
                  Checkout
                </button> */}
              </div>
            </>
          ) : (
            <h1 className="text-lg text-gray-400">
              Your shopping cart is empty!
            </h1>
          )}
        </div>
      )}
    </nav>
  );
};
