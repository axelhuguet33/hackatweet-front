import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  const updateToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    if (localStorage.getItem("token"))
      updateToken(localStorage.getItem("token"));
    else updateToken("");
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider
      value={{
        token,
        loading,
        updateToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
