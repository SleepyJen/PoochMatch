import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <button className="create-button">
        <Link to="/user/auth/sign-up">Sign-Up</Link>
      </button>
      <button className="login-button">
        <Link to="/user/auth/sign-in">Login to Account</Link>
      </button>
    </section>
  );
}

export default Banner;
