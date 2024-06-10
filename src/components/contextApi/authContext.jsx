import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

import Cookies from "js-cookie";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [usersData, setUsersData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const token = Cookies.get("token");
  console.log(token)
  useEffect(() => {
    if (token) {
      setIsLogged(true);
      
      axios.get("/api/users/profile", {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          setUsersData(response.data.user);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        })
     
    } else {
      setIsLogged(false);
      setUsersData(null);
    }
  }, [isLogged]);

  const logout = () => {
    Cookies.remove("token");
    setIsLogged(false);
    setUsersData(null);
  };

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, usersData, loader, setLoader,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
