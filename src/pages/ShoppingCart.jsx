import React from "react";
import { MyAppContext } from "../context";
import { images } from "../constant";

export const ShoppingCart = () => {
  const { product, setProduct } = MyAppContext();
  const { subtotal, setSubtotal } = MyAppContext();
  return (
    <div className="mt-[14.5vh] w-full flex flex-col">
      <div className="relative h-[35vh] ">
        <img
          src={images.bg_shoppingCart}
          className="w-[100%] h-[100%]"
          alt=""
        />
        <h1 className="text-6xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          YOUR SHOPPING CART
        </h1>
      </div>
      <div classname="py-20 px-44">
        <div className="flex flex-col">
          <div className="overflow-x-auto ">
            <div className="py-2 inline-block w-full ">
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Unit Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border ">
                    {product.map((e, i) => (
                      <tr className="">
                        <td className="w-20 h-30">
                          <img
                            src={images[e.image]}
                            className="w-[100%] h-[100%]"
                            alt=""
                          />
                        </td>
                        <td>{e.title}</td>
                        <td>${e.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end px-44">
        <div className="border p-10  gap-y-5 flex flex-col">
          <div className="flex gap-x-5 items-center">
            <h1 className="text-lg m-0 ">Subtotal :</h1> ${subtotal.toFixed(2)}
          </div>
          <button className="bg-black px-20 py-5 rounded-full text-white hover:bg-[#e65540] duration-500">
            PROCEED TO CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
};
