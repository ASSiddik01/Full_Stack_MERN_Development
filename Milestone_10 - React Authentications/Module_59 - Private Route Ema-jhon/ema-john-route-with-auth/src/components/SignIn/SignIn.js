import React from "react";
import "./SignIn.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="form_container">
      <div className="form">
        <h2 className="form_title">Login</h2>
        <form action="">
          <div className="input_group">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" />
          </div>
          <input className="form_submit" type="submit" value="Submit" />
        </form>
        <p>
          New to Ema-john?
          <Link className="form_link" to="/register">
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
