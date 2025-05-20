import React from "react";
import Lottie from "lottie-react";
import robotAnimation from "../assets/robotAnimation.json";
import { useNavigate } from "react-router";

const style = {
  height: 500,
};

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Lottie animationData={robotAnimation} style={style} />
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-semibold">
          This is not you are looking for
        </h2>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-md text-black bg-white  border border-gray-400 cursor-pointer hover:border-none hover:bg-black  hover:text-white font-semibold transition-all duration-300"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Errorpage;
