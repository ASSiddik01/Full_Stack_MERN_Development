import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./Login.css";
import app from '../../firebase.config';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const googleSingIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
    })
  }
  return (
    <div>
      <h3>Please Login</h3>
      <div style={{ margin: "20px" }}>
        <button onClick={googleSingIn}>Google Sign In</button>
      </div>
      <form action="">
        <input type="email" name="" id="" placeholder="Your email" />
        <br />
        <input type="password" name="" id="" placeholder="Your password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
