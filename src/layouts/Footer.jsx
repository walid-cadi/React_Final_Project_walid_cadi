import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0]">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 mt-[7vh]  py-10 md:grid-cols-2  xl:flex justify-around xl:px-10 ">
        <div className="max-w-sm">
          <div className="mb-6 flex h-12 items-center space-x-2">
            <span className="text-lg font-semibold">GET IN TOUCH</span>
          </div>
          <div className="text-gray-500">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4 text-lg font-semibold">
            CATEGORIES
          </div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-[#e4553f] " href="#">
                  Men
                </a>
              </li>
              <li>
                <a className="hover:text-[#e4553f] " href="#">
                  Women
                </a>
              </li>
              <li>
                <a className="hover:text-[#e4553f] " href="#">
                  Dresses
                </a>
              </li>
              <li>
                <a className="hover:text-[#e4553f] " href="#">
                  Sunglasses
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-[#e4553f]" href="#">
                  Search
                </a>
              </li>
              <li>
                <a className="hover:text-[#e4553f]" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-[#e4553f]" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-[#e4553f]" href="#">
                  Returns
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-[15vw]">
          <div className="mt-4 mb-2 font-medium xl:mb-4">HELP</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-[#e4553f]" href="#">
                  Track Order
                </a>
              </li>
              <li>
                <a className="hover:text-[#e4553f]" href="#">
                  Returns
                </a>
              </li>
              <li>
                <a className="hover:text-[#e4553f]" href="#">
                  Shipping
                </a>
              </li>
              <li>
                <a className="hover:text-[#e4553f]" href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">
            Subscribe to our Newsletter
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              <input
                type="email"
                className="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter your email"
              />
              <button className="block rounded-full bg-black px-11 py-3 font-medium text-white hover:bg-[#e4553f] duration-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f0f0f0]">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-center sm:text-left ">
          <div className="">
            Copyright © 2022 Shopify Theme Developed by MassTechnologist All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
