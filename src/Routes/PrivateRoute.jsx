import React, { Children, useContext } from "react";
import { UserContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(UserContext);
  const location = useLocation();
  // console.log("user in private route", user);

  if (loader)
    return (
      <div className="flex flex-col items-center my-16">
        <p className="">Please wait for a few seconds..</p>
        <progress className="progress w-56"></progress>
      </div>
    );
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
