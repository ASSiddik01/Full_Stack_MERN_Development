import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./Login.css";
import app from '../../firebase.config';
const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle,user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h3>Please Login</h3>
      <div style={{ margin: "20px" }}>
        <button onClick={()=> signInWithGoogle()}>Google Sign In</button>
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
