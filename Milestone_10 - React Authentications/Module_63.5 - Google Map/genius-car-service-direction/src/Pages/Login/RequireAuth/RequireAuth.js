import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div>
        <h2 className="text-primary">Please Varify your email</h2>
        <button
          onClick={async () => {
            await sendEmailVerification();
            alert("Sent email");
          }}
          className="primary"
        >
          Send Verification
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
