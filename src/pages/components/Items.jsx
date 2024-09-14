import { Link } from "react-router-dom";
import { images } from "../../constant";

import React from "react";

export const Items = () => {
  return (
    <div className=" flex justify-center gap-5 h-[100vh]">
      {/* div1 */}
      <div className="relative flex flex-col gap-3">
        <div className="relative overflow-hidden w-[24vw] h-[70vh]">
          <img
            src={images.item1}
            className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500"
          />
          <button className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 text-black py-1 px-4 hover:bg-red-400 duration-500 font-mono text-sm">
            <Link to="/shop">DRESSES</Link>
          </button>
        </div>
        <div className="relative overflow-hidden w-[24vw] h-[40vh]">
          <img
            src={images.item2}
            className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 "
          />
          <button className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm">
            <Link to="/shop">SUNGLASSES</Link> 
          </button>
        </div>
      </div>

      {/* div2 */}
      <div className="relative flex flex-col gap-3">
        <div className="relative overflow-hidden w-[24vw] h-[40vh]">
          <img
            src={images.item3}
            className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 "
          />
          <button className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm">
            <Link to="/shop">WATCHES</Link> 
          </button>
        </div>
        <div className="relative overflow-hidden w-[24vw] h-[70vh]">
          <img
            src={images.item4}
            className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 "
          />
          <button className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm">
            <Link to="/shop">FOOTWEAR</Link> 
          </button>
        </div>
      </div>

      {/* div3 */}
      <div className="relative flex flex-col gap-3">
        <div className="relative overflow-hidden w-[24vw] h-[70vh]">
          <img
            src={images.item5}
            className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 "
          />
          <button className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm">
            <Link to="/shop">BAGS</Link>
          </button>
        </div>
        <div className="relative overflow-hidden w-[24vw] h-[40vh]">
          <img
            src={images.item6}
            className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 "
          />
          <button className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm">
            <Link to="/shop">ACCESSORIES</Link> 
          </button>
        </div>
      </div>
    </div>
  );
};
