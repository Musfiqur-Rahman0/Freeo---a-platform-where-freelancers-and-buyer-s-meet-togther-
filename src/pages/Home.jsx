import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="max-w-7xl mx-auto space-y-20 pt-10">
        <Featured />
      </div>
    </div>
  );
};

export default Home;
