import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const RequiredAuth = ({children}) => {
  const [user,loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
