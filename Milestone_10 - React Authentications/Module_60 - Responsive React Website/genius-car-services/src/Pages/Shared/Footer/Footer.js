import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <p>Copyright @ {(new Date().getFullYear())}</p>
    </div>
  );
};

export default Footer;
