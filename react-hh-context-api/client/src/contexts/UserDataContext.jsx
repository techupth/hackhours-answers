import { createContext } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};
