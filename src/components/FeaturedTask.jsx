import React from "react";

const FeaturedTask = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <p className=" text-gray-600 border-l border-red-500 pl-2">
          Freeo jobs
        </p>
        <h2 className="text-5xl font-bold">Most Recent jobs</h2>
      </div>
      <div className="w-full ">
        <div className="border-b mb-5 border-gray-200 grid grid-cols-8 items-center">
          <div className="px-3 py-2 col-span-4">
            <p>Emily</p>
            <h4 className="text-xl font-semibold">
              Put metadata on the webpage with proper keyword to rank up
            </h4>
          </div>
          <div className="px-3 py-2">Website ranking</div>
          <div className="px-3 py-2">200Taka</div>
          <div className="px-3 py-2">Time remaing : 2days</div>
          <div className="px-3 py-2 flex  justify-end  ">
            <button className="bg-black text-white  rounded-md px-4 py-2">
              {" "}
              Bid Now
            </button>
          </div>
        </div>
        <div className="border-b mb-5 border-gray-200 grid grid-cols-8 items-center">
          <div className="px-3 py-2 col-span-4">
            <p>Emily</p>
            <h4 className="text-xl font-semibold">
              Put metadata on the webpage with proper keyword to rank up
            </h4>
          </div>
          <div className="px-3 py-2">Website ranking</div>
          <div className="px-3 py-2">200Taka</div>
          <div className="px-3 py-2">Time remaing : 2days</div>
          <div className="px-3 py-2 flex  justify-end  ">
            <button className="bg-black text-white  rounded-md px-4 py-2">
              {" "}
              Bid Now
            </button>
          </div>
        </div>
        <div className="border-b mb-5 border-gray-200 grid grid-cols-8 items-center">
          <div className="px-3 py-2 col-span-4">
            <p>Emily</p>
            <h4 className="text-xl font-semibold">
              Put metadata on the webpage with proper keyword to rank up
            </h4>
          </div>
          <div className="px-3 py-2">Website ranking</div>
          <div className="px-3 py-2">200Taka</div>
          <div className="px-3 py-2">Time remaing : 2days</div>
          <div className="px-3 py-2 flex  justify-end  ">
            <button className="bg-black text-white  rounded-md px-4 py-2">
              {" "}
              Bid Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTask;
