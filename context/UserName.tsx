"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>(null);

export const UserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [savedUserName, setSavedUserName] = useState("");

  return (
    <UserContext.Provider
      value={{
        savedUserName,
        setSavedUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);