import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { navigation } from "../utils/data";
import { NavLink } from "react-router";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-white fixed top-0 z-20 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <div
              onClick={handleToggle}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset cursor-pointer"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiBars3
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <BiX
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </div>
          </div>

          <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h2 className="text-4xl font-bold">Freeo</h2>
            </div>
          </div>

          {/* destop nevigation menu */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.pathName}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-gray-50 text-black font-bold"
                        : "text-black hover:bg-gray-50 "
                    } block rounded-md px-3 py-2 text-base font-medium`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full font-bold p-1 text-gray-700   focus:ring-offset-2   cursor-pointer outline"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BsBell aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </div>
      {/* mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <NavLink
                onClick={() => setIsMobileMenuOpen(false)}
                key={item.name}
                to={item.pathName}
                aria-current={item.current ? "page" : undefined}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-gray-900 text-white"
                      : " hover:bg-gray-700 hover:text-white"
                  } block rounded-md px-3 py-2 text-base font-medium`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
