import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <div>
      <div className="discriptionText">
        <div className="textbox1">
          As dog owners we know the importance of socializing them with other
          dogs. We also know how difficult it is to find them
          <div className="textbox2">
            the correct playmate or companion. This app will help you find that
            perfect playdate or partner for your furry friend!
          </div>
        </div>
      </div>

      <section className="banner">
        <button className="login-button" type="button">
          <Link to="/user/auth/sign-in" className="loginBtn">
            Log In
          </Link>
        </button>
        <button className="create-button" type="button">
          <Link to="/user/auth/sign-up" className="signBtn">
            Create an account
          </Link>
        </button>
      </section>
    </div>
  );
}

export default Banner;
