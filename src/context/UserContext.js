import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) setToken(localStorage.getItem("token"));
    else setToken("");
  }, []);

  const updateToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        updateToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
