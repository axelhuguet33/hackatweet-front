import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const updateToken = (token) => {
    setToken(token);
    setLoading(true);
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
  };

  useEffect(() => {
    const getUserData = async () => {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        const data = await fetch(`http://localhost:3000/users/${token}`).then(
          (r) => r.json()
        );
        setUserData(data.user);
        setLoading(false);
      }
    };
    if (loading) getUserData();
  }, [loading, token]);

  return (
    <UserContext.Provider
      value={{
        token,
        userData,
        updateToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
