import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const emailInput = (event) => {
    setEmail(event.target.value);
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordInput = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/");
  }
  const createUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password didn't match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form_container">
      <div className="form">
        <h2 className="form_title">Sign Up</h2>
        <form onSubmit={createUser} action="">
          <div className="input_group">
            <label htmlFor="">Email</label>
            <input onBlur={emailInput} type="email" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Password</label>
            <input onBlur={passwordInput} type="password" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Confirm Password</label>
            <input
              onBlur={confirmPasswordInput}
              type="password"
              name=""
              id=""
            />
          </div>
          <p>{error}</p>
          <input className="form_submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?
          <Link className="form_link" to="/login">
            Sing In
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

export default SignUp;
