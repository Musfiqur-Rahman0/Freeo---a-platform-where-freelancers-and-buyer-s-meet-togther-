import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <>
      <h2>Dahboard layout</h2>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
