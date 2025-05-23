import React from "react";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full mt-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <h2 className="text-4xl font-bold text-center lg:text-start">
              Freeo
            </h2>
            <p className="py-4 md:py-8 text-sm  lg:max-w-xs text-center lg:text-left">
              Trusted in more than 100 countries & 5 million customers. Have any
              query ?
            </p>
            <a
              href="#"
              className="py-2.5 px-5 block w-fit bg-black rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
            >
              Contact us
            </a>
          </div>

          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg  font-medium mb-7">Products</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className=" ">
                  Figma to Code
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="  ">
                  Menimalistic layouts
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="  ">
                  Responsive Design
                </a>
              </li>
              <li>
                <a href="javascript:;" className="  ">
                  Components Library
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg  font-medium mb-7">Resources</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className=" ">
                  FAQs
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="  ">
                  Quick Start
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="  ">
                  Documentation
                </a>
              </li>
              <li>
                <a href="javascript:;" className="  ">
                  User Guide
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg  font-medium mb-7">Blogs</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;">News</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="  900">
                  Tips & Tricks
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="  900">
                  New Updates
                </a>
              </li>
              <li>
                <a href="javascript:;" className="  900">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--Grid--> */}
        <div className="py-7 border-t ">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm  ">
              ©<a href="#">Freeo</a> 2025, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              <a
                href="https://x.com/MusfiqurRhaman6"
                target="_blank"
                className="w-9 h-9 rounded-full  flex justify-center items-center   dark:text-white   text-black font-bold "
              >
                <FaXTwitter />
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full  flex justify-center items-center  dark:text-white   text-black font-bold"
              >
                <FaFacebookF />
              </a>
              <a
                href="www.linkedin.com/in/musfiqur-rahman-saikot-b61232360"
                target="_blank"
                className="w-9 h-9 rounded-full  flex justify-center items-center  dark:text-white   text-black font-bold "
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@musfiqurrhaman9077"
                target="_blank"
                className="w-9 h-9 rounded-full  flex justify-center items-center  dark:text-white   text-black font-bold"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
