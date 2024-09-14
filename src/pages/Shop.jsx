import React, { useState } from "react";
import { images } from "../constant";
import Data from "../json/data.json";
import { useNavigate } from "react-router-dom";
import { MyAppContext } from "../context";
import Swal from "sweetalert2";

export const Shop = () => {
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState(Data);
  const [categories, setCategories] = useState("All");

  const handleSearch = (text) => {
    const newTab = [...Data];
    let result = newTab.filter((ele) =>
      ele.title.toLowerCase().includes(text.toLowerCase())
    );
    if (text) {
      setSearchProduct(result);
    } else {
      setSearchProduct(Data);
    }
  };
  const CategoryChange = (category) => {
    const newTab = [...Data];
    if (category != "All") {
      const filterCategories = newTab.filter((e) => e.categories == category);
      setSearchProduct(filterCategories);
    } else {
      setSearchProduct(newTab);
    }
  };

  const { product, setProduct } = MyAppContext();

  const addToCart = (id) => {
    if (id) {
      const getProduct = Data.find((e) => e.id == id);
      product.push(getProduct);
      Swal.fire({
        title: getProduct.title,
        text: "Your Product Is Added To Cart",
        icon: "success",
      });
    }
  };
  return (
    <div className="mt-[14.5vh] w-full flex flex-col">
      <div className="relative h-[35vh] ">
        <img src={images.bg_shop} className="w-[100%] h-[100%]" alt="" />
        <h1 className="text-6xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          SHOP
        </h1>
      </div>
      <div className="flex justify-evenly gap-x-7 p-10">
        <div className="flex gap-y-5 items-start flex-col p-6">
          <div>
            <input
              type="text"
              className="px-8 py-5 border-gray-400 border-solid border-2"
              placeholder="Search..."
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </div>
          <h1 className="text-2xl font-extrabold">Categories</h1>
          <button
            className="hover:text-[#ef4444]"
            onClick={() => CategoryChange("All")}>
            All
          </button>
          <button
            className="hover:text-[#ef4444]"
            onClick={() => CategoryChange("Shirts")}>
            Shirts
          </button>
          <button
            className="hover:text-[#ef4444]"
            onClick={() => CategoryChange("Pants")}>
            Pants
          </button>
          <button
            className="hover:text-[#ef4444]"
            onClick={() => CategoryChange("Jackets")}>
            Jackets
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-y-5  w-[60%] ">
          {searchProduct.map((product, index) => (
            <div key={index} className="px-2 ">
              <div className="relative group overflow-hidden bg-white  h-[52vh] w-[17vw] hover:bg-gray-500 transition-all duration-500">
                <img
                  src={images[product.image]}
                  alt={product.title}
                  className="h-[52vh] w-[17vw] object-cover group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button
                  onClick={() => {
                    addToCart(product.id);
                  }}
                  className="absolute  top-72 translate-x-[-50%]  left-1/2 transform  -translate-y-[50%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out h-[6vh] w-[10vw] bg-black text-white rounded-full font-medium font-sans hover:bg-red-500">
                  Add to Cart
                </button>
              </div>
              <div className="font-sans text-gray-500 mt-4">
                <p
                  onClick={() => navigate(`/shop/${product.id}`)}
                  className="cursor-pointer hover:text-red-400 duration-300">
                  {product.title}
                </p>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
