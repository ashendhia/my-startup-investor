// ProtectedRoute.js

import { ReactNode } from "react";
// import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  //const token = localStorage.getItem("token");
  return children;
};

export default ProtectedRoute;
