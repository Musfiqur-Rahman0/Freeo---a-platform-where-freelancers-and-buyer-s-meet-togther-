import Lottie from "lottie-react";
import React from "react";
import loadingAnimation from "../assets/loading.json";

const style = {
  height: 300,
};
const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Lottie animationData={loadingAnimation} style={style} />
    </div>
  );
};

export default Loading;
