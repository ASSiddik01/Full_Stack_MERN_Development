import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubloading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorElement;

  if (googleError || githubError) {
    errorElement = (
      <p className="text-danger">
        Error: {googleError?.message} {githubError?.message}
      </p>
    );
  }

  if (googleLoading || githubloading) {
    return <Loading></Loading>;
  }

  if (googleUser || githubUser) {
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
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-50 d-block mx-auto my-2"
        >
          <img width={30} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
