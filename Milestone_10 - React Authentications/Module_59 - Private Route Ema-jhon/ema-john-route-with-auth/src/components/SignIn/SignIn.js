import React, { useState } from "react";
import "./SignIn.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailInput = (event) => {
    setEmail(event.target.value);
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  const loginUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form_container">
      <div className="form">
        <h2 className="form_title">Sign In</h2>
        <form onSubmit={loginUser} action="">
          <div className="input_group">
            <label htmlFor="">Email</label>
            <input onBlur={emailInput} type="email" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Password</label>
            <input onBlur={passwordInput} type="password" name="" id="" />
          </div>
          <p> {error?.message} </p>
          {loading && <p>Loading....</p>}
          <input className="form_submit" type="submit" value="Sign In" />
        </form>
        <p>
          New to Ema-john?
          <Link className="form_link" to="/register">
            Create New Account
          </Link>
        </p>

        <div className="line">
          <hr />
          or
          <hr />
        </div>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default SignIn;
