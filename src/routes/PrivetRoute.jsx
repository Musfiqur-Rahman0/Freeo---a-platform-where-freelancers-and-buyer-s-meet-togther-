import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { isloading, user } = use(AuthContext);

  const location = useLocation();

  if (isloading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
};

export default PrivetRoute;
