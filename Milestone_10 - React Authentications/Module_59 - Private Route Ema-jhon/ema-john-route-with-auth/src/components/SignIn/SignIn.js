import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="form_container">
      <div className="form">
        <h2 className="form_title">Sign In</h2>
        <form action="">
          <div className="input_group">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" />
          </div>
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
