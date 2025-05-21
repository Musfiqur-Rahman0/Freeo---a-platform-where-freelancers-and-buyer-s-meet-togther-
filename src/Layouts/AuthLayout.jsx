import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AuthLayout = () => {
  const { isloading } = use(AuthContext);
  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main className="mt-16 min-h-[calc(100vh-450px)] flex items-center justify-center">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AuthLayout;
