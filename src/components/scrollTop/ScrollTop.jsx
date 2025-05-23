import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = () => {
  const location = useLocation();
  const { pathname } = location;

  console.log(location);
  useEffect(() => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollTop;
