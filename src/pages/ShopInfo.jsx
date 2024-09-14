import React from "react";
import { useParams } from "react-router-dom";
import Data from "../json/data.json";
import { images } from "../constant";
import { MyAppContext } from "../context";
import Swal from "sweetalert2";

export const ShopInfo = () => {
  const { id } = useParams();
  const getproduct = Data.find((e) => e.id == id);

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
    <div className="mt-[14.5vh] p-14 flex justify-center gap-x-8 w-full">
      <div className="w-[35vw]">
        <img src={images[getproduct.image]} alt="" />
      </div>
      <div className="flex flex-col gap-y-5 p-5 w-[40vw]">
        <h1 className="text-3xl text-gray-700">{getproduct.title}</h1>
        <h1 className="text-3xl text-gray-700">
          ${getproduct.price.toFixed(2)}
        </h1>
        <p className="text-xl text-gray-400">{getproduct.about}</p>
        <div>
          <button
            onClick={() => {
              addToCart(getproduct.id);
            }}
            className="rounded-full bg-black px-11 py-3 font-medium text-white hover:bg-[#e4553f] duration-500">
            ADD TO CART
          </button>
        </div>
        <div className="flex gap-x-[6vw]">
          <p className="text-xl text-gray-400">Brand: {getproduct.brand}</p>
          <p className="text-xl text-gray-400">
            Categories: {getproduct.categories}
          </p>
        </div>
        <h1>Description</h1>
        <p className="text-gray-400">{getproduct.description}</p>
      </div>
    </div>
  );
};
