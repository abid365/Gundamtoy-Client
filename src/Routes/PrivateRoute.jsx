import React, { Children, useContext } from "react";
import { UserContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) return;
  <div className="flex flex-col items-center mt-10">
    <progress className="progress w-56"></progress>
  </div>;
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
