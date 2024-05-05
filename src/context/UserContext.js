import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
  console.log("UserContextProvider render");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const updateUser = (token) => {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
    setLoading(true);
  };

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const data = await fetch(
          `https://hackatweet-back-theta.vercel.app/users/${token}`
        ).then((r) => r.json());
        setUserData(data.user);
      } else {
        setUserData(null);
      }
      setLoading(false);
    };
    if (loading) getUserData();
  }, [loading]);

  return (
    <UserContext.Provider
      value={{
        userData,
        updateUser,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
