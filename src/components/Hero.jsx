import React from "react";
import herovideo from "../assets/92480-637690589_medium.mp4";
import { BiPlay, BiSearch } from "react-icons/bi";

const Hero = () => {
  const categories = [
    "website development",
    "architecture & interior design",
    "UGC videos",
    "video editing",
  ];

  const companies = ["Meta", "Google", "Netflix", "P&G", "PayPal", "Payoneer"];

  return (
    <div className="relative w-full ">
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent z-10"></div>
      <video
        src={herovideo}
        className="hidden md:block w-full h-[680px] z-0 object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div className="md:hidden h-[580px] w-full bg-green-500"></div>
      <div className="absolute inset-0 h-full w-full  z-10 pt-[176px] pb-8">
        <div className="max-w-7xl  h-full mx-auto flex flex-col justify-between">
          <div className="md:w-4/6 space-y-5 p-3 lg:p-0">
            <h2 className="text-white text-4xl md:text-5xl font-bold  md:max-w-[610px]">
              Our freelancers <br /> will take it from here
            </h2>
            <div className="w-[90%] relative ">
              <input
                type="text"
                placeholder="Search here"
                className="w-full bg-white text-black outline-none border-none p-3 rounded-md"
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2">
                <button className="bg-gray-800 text-white rounded-md p-2">
                  <BiSearch size={24} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {categories.map((category, i) => (
                <div
                  key={i}
                  className="cursor-pointer text-gray-700 text-xs md:text-sm md:text-white font-semibold capitalize px-4 py-2 rounded-lg bg-transparent border border-white"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 lg:p-0 text-gray-800 text-xs md:text-sm md:text-gray-300 relative">
            <span>Trusted by : </span>
            <div className="flex items-center gap-3">
              {companies.map((company, index) => (
                <p key={index}>{company}</p>
              ))}
              <div className="hidden md:block absolute right-0">
                <button className="outline  rounded-full cursor-pointer">
                  <BiPlay size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
