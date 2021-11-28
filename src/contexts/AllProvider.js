import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const SiteContext = createContext();
const AllProvider = ({ children }) => {
  const AuthContext = useFirebase();
  const AllContext = { ...AuthContext };
  return (
    <SiteContext.Provider value={AllContext}>{children}</SiteContext.Provider>
  );
};

export default AllProvider;
