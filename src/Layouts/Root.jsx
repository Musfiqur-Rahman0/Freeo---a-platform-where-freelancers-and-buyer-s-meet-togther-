import React, { use, useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const Root = () => {
  const { isloading } = use(AuthContext);
  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main className="mt-16 min-h-[calc(100vh-450px)] bg-background">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Root;
