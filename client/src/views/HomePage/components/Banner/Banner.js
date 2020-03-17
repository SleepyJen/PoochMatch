import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (

    <div className="container">
      <div className="row justify-content-center descriptionText ">
        <div className="col-sm-10  ">
          As dog owners we know the importance of socializing them with other
          dogs.
          We also know how difficult it is to find them
          the correct playmate or companion. This app will help you find that
          perfect playdate or partner for your furry friend!
          <h1> Woof you play with me?</h1>
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
    </div >
  );
}

export default Banner;
