import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: -1,
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/session`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        const { userId, firstName, lastName, email, photo } = res.data;
        setUser({ userId, firstName, lastName, email, photo });
      })
      .catch((err) => {
        console.log("Cannot get session");
      });
  }, [user]);

  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
