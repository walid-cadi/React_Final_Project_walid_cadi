import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[14.5vh] p-20 flex gap-x-8">
      <div className="p-7 border-gray-400 border-2 w-[40vw]">
        <h1 className="text-4xl">New Customer</h1>
        <p className="text-lg font-bold text-gray-500">Register Account</p>
        <p className="text-gray-400">
          By creating an account you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </p>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="px-8 py-3 bg-[#292929] text-white mt-3">
          CONTINUE
        </button>
      </div>
      <div className="flex flex-col gap-y-1 p-7 border-gray-400 border-2 w-[40vw]">
        <h1 className="text-4xl">Returning Customer</h1>
        <p className="text-lg font-bold text-gray-500">
          I am a returning customer
        </p>
        <form action="" className="flex flex-col gap-y-3">
          <label htmlFor="">Email</label>
          <input
            className="border-gray-400 border-2 px-3 py-2"
            type="email"
            placeholder="Email"
          />
          <label htmlFor="">Password</label>
          <input
            className="border-gray-400 border-2 px-3 py-2"
            type="email"
            placeholder="Password"
          />
        </form>
        <div className="flex items-center gap-1">
          <button className="px-8 py-3 bg-[#292929] text-white mt-3">
            SIGN IN
          </button>
          <p>
            {" "}
            or{" "}
            <span
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer hover:text-[#e65540]">
              Return to Store
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
