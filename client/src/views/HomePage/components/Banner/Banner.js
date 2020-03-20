import React , { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";



function Banner (props) {

  useEffect( () => { 
    console.log('Banner Check:' , props) 
  } , [ props ])

  return (
    <section className="banner-section">
      <h3 className="cta-caption">
        Woof you come & play with me?
      </h3>
      <div className="cta-btns">
        { 
          ( props.auth )
          ? (
            <Link 
              to={ `/user${ props.query }` } 
              className="user-btn cta-link"
            >User
            </Link>
          )
          : (
            <>
              <Link 
                to="/user/auth/sign-in" 
                className="login-btn cta-link"
              >Log In
              </Link>

              <Link 
                to="/user/auth/sign-up" 
                className="reg-btn cta-link"
              >Create an Account
              </Link>
            </>
          )
        }
      </div>
    </section>
  );
}



export default Banner;