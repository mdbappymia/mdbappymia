import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useGetData from "../hooks/useGetData";

export const SiteContext = createContext();
const AllProvider = ({ children }) => {
  const AuthContext = useFirebase();
  const getData = useGetData();
  const AllContext = { ...AuthContext, ...getData };
  return (
    <SiteContext.Provider value={AllContext}>{children}</SiteContext.Provider>
  );
};

export default AllProvider;
