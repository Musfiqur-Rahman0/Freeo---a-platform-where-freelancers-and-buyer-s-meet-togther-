import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
