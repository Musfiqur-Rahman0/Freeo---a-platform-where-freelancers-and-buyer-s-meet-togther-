import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { setUserId } from "firebase/analytics";
import { useLocation } from "react-router";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  //   const location = useLocation();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    return () => unSubscribe();
  }, [user]);

  console.log(isloading, user);
  return (
    <AuthContext.Provider
      value={{
        user,
        isloading,
        setIsLoading,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
