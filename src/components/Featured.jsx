import React from "react";
import { featuredCategories } from "../utils/data";

const Featured = () => {
  return (
    <div>
      {/* <h2 className="my-5 text-4xl font-bold">Featured Categories</h2> */}
      <div className="grid grid-cols-6 gap-5 items-center">
        {featuredCategories.map((Features, index) => {
          const Icon = Features.icon;
          return (
            <div
              key={index}
              className="p-5 rounded-lg bg-white space-y-5 border border-gray-300 shadow-md cursor-pointer"
            >
              <div>
                <Icon size={30} />
              </div>
              <p className="text-nowrap">{Features.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
