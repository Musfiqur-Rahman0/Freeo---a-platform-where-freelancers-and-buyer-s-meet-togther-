import React, { use, useState } from "react";
import { BiX } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { navigation } from "../utils/data";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Switch } from "./ui/switch";
import { ModeToggle } from "./Mode/ModeToggle";
import { linkWithCredential } from "firebase/auth";
import Loading from "./Loading";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { logout } = useAuth();
  const { user, isloading } = use(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes ",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Successfully loged out",
          icon: "success",
        });
        setIsHovered(false);
      }
    });
  };

  const linksWithoutUser = [
    {
      name: "Login",
      pathName: "/login",
    },
    {
      name: "Register",
      pathName: "/signup",
    },
    {
      name: "Join As a Developer",
      pathName:
        "https://github.com/Musfiqur-Rahman0/Freeo---a-platform-where-freelancers-and-buyer-s-meet-togther-.git",
    },
  ];

  const linksWithUser = [
    {
      name: "Dashboard",
      pathName: "/dashboard",
    },
    {
      name: "Coin",
      pathName: "/coin",
    },
    {
      name: "Profile",
      pathName: "/profile",
    },
    {
      name: "Join As a Developer",
      pathName:
        "https://github.com/Musfiqur-Rahman0/Freeo---a-platform-where-freelancers-and-buyer-s-meet-togther-.git",
    },
  ];

  console.log(isloading, user);

  return (
    <nav className="bg-background  fixed top-0 z-20 w-full border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-10 flex items-center sm:hidden">
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
              <Link to="/" className="text-foreground text-4xl font-bold">
                Freeo
              </Link>
            </div>
          </div>

          {/* destop nevigation menu */}
          <div className="hidden sm:ml-6 sm:block">
            {!isloading && !user ? (
              <div className="flex space-x-4">
                {linksWithoutUser.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.pathName}
                    aria-current={item.current ? "page" : undefined}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-card text-foreground font-bold border-b border-foreground"
                          : "text-foreground hover:bg-card "
                      } block  px-3 py-2  font-medium`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/*                 
                  <div
                    // onMouseEnter={() => setIsHovered(true)} //এইটা কাজ তো করতেছে বুট লগউত এ ক্লিক করা যায় নাহ কারন মাউস সরে গেলে লগউত বাটন হিদে হয়ে যায়
                    // onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsHovered(!isHovered)}
                    className=" cursor-pointer w-10 h-10 overflow-hidden rounded-full"
                  >
                    <img
                      src={user?.photoURL}
                      alt={user?.photoURL}
                      title={user?.photoURL}
                    />
                  </div> */}

                {isHovered && (
                  <div className=" text-white bg-slate-500 absolute -bottom-36 right-0 z-10 p-8 rounded-lg flex items-center justify-center gap-3 flex-col">
                    <p className="text-xl font-bold ">{user?.displayName}</p>
                    <button
                      onClick={handleLogout}
                      className=" bg-white cursor-pointer text-black px-5 py-2 rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                {linksWithUser.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.pathName}
                    aria-current={item.current ? "page" : undefined}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-card text-foreground font-bold border-b border-foreground"
                          : "text-foreground hover:bg-card "
                      } block  px-3 py-2  font-medium`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <div className="ml-3 flex items-center space-x-2">
            <ModeToggle />
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
