import React from "react";
import { Navigate, useLocation } from "react-router";
import useStore from "../../../hooks/useStore";

const PrivetRoute = ({ children }) => {
  const { user } = useStore();
  const location = useLocation();
  if (user.email === "bappy@gmail.com") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivetRoute;
