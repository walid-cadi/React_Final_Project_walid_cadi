import React from "react";
import { images } from "../constant";
import Data from "../json/data.json";

export const Blogs = () => {
  return (
    <div className="mt-[20vh] w-full flex flex-col">
      <div className="relative h-[35vh] ">
        <img src={images.bg_blogs} className="w-[100%] h-[100%]" alt="" />
        <h1 className="text-6xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          NEWS
        </h1>
      </div>
      <div className="px-[7vw] py-[9vh]">
        <div className="flex gap-x-6">
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-4  w-[55vw]">
              <div className="w-[100%] h-[80vh] overflow-hidden">
                <img
                  src={images.blogs1}
                  className="w-[100%] h-[100%] hover:scale-110 duration-500"
                  alt=""
                />
              </div>
              <h1 className="text-3xl cursor-pointer hover:text-[#e65540] duration-300">
                Black Friday Guide: Best Sales & Discount Codes
              </h1>
              <p className="text-gray-400">
                by fashe-theme Admin | crafts, street style | 1 Comments
              </p>
              <p className="text-gray-400 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc
                sit...
              </p>
            </div>
            <div className="flex flex-col gap-y-4  w-[55vw]">
              <div className="w-[100%] h-[80vh] overflow-hidden">
                <img
                  src={images.blogs2}
                  className="w-[100%] h-[100%] hover:scale-110 duration-500"
                  alt=""
                />
              </div>
              <h1 className="text-3xl cursor-pointer hover:text-[#e65540] duration-300">
                The White Sneakers Nearly Every Fashion Girls Own
              </h1>
              <p className="text-gray-400">
                by fashe-theme Admin | crafts, street style | 0 Comments
              </p>
              <p className="text-gray-400 text-lg">
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                pellentesque mattis augue id euismod. Inter-dum et malesuada
                fames
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 p-10">
            <h1 className="text-3xl font-extrabold">Featured Products</h1>
            {Data.map((e, i) => (
              <div className="flex gap-x-5 w-[23vw] h-[30vh]">
                <div className="w-[50%]">
                  <img
                    src={images[e.image]}
                    className="w-[100%] h-[100%]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-4 p-5">
                  <h1 className="text-lg">{e.title}</h1>
                  <p className="text-gray-400">{e.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
