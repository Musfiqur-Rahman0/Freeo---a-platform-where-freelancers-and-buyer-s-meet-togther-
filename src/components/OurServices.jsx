import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../assets/our_services.webp";

const OurServices = () => {
  const features = [
    {
      title: "Dedicated hiring experts",
      description:
        "Work with a dedicated account manager who understands your industry and project requirements. They’ll source top-tier freelancers ",
    },
    {
      title: "Satisfaction guarantee",
      description:
        "Your peace of mind matters. We offer a satisfaction guarantee with full or partial refunds for any work that doesn't meet your ",
    },
    {
      title: "Advanced management tools",
      description:
        "Stay in control with intuitive project dashboards, real-time communication, file sharing, task tracking, ",
    },
    {
      title: "Flexible payment models",
      description:
        "Choose a pricing structure that suits your needs—whether it’s fixed-price contracts for defined deliverables or hourly  ",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="px-3 py-5 md:px-12 md:py-10 rounded-md bg-[#e8faf4] grid md:grid-cols-2 ">
        <div className="space-y-4 md:space-y-8">
          <p className="text-xl font-semibold">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            What we offers?
          </h2>
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <FaCheckCircle size={20} color="green" />
                <div>
                  <h2 className="text-xl font-bold">{feature.title}</h2>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-black cursor-pointer text-white  font-semibold px-5 py-2 rounded-md">
            Join now
          </button>
        </div>
        <div className="flex items-center justify-center">
          <figure>
            <img src={serviceImg} alt="" className="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
