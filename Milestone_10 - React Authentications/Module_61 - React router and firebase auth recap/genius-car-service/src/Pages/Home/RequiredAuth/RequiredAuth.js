import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RequiredAuth = ({children}) => {
  const [user] = useAuthState(auth);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
