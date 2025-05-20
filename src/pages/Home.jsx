import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Loading from "../components/Loading";
import OurServices from "../components/OurServices";
import PromoSection from "../components/PromoSection";
import FeaturedTask from "../components/FeaturedTask";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="max-w-7xl mx-auto space-y-20 pt-10">
        <Featured />
        <FeaturedTask />
        <PromoSection />
        <OurServices />
      </div>
    </div>
  );
};

export default Home;
