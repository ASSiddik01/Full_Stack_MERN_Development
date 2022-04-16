import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/");
  }
  return (
    <div className="">
      <div className="d-flex text-primary">
        <hr style={{ width: "50%" }} />
        <p>or</p>
        <hr style={{ width: "50%" }} />
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50 d-block mx-auto my-2"
        >
          <img width={30} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-primary w-50 d-block mx-auto my-2">
          <img width={30} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button className="btn btn-primary w-50 d-block mx-auto my-2">
          <img width={30} src={github} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
