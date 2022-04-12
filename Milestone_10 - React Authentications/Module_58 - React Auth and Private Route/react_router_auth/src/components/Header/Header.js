import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "./Header.css";
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.config';
const auth = getAuth(app);

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/order">Orders</Link>
        <Link to="/review">Reviews</Link>
        <Link to="/register">Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? <button onClick={()=>signOut(auth)} >Sign Out</button> : <Link to="/login">Login</Link>}
      </nav>
    </div>
  );
};

export default Header;
