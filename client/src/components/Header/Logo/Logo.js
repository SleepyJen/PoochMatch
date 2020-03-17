import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";



function Logo () {
  return (
    <div className="header-logo">
      <img
        src="/assets/images/favicon/favicon.png"
        alt="Logo"
        className="icon"
      />
      <h1 className="title-lg">
        <Link to="/" className="logo-btn">
          Pooch Match
        </Link>
      </h1>
    </div>
  );
}



export default Logo;
