import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/order">Orders</Link>
        <Link to="/review">Reviews</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
