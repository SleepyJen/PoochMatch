import React from 'react' // , { useState }
// import { Route } from 'react-router-dom';

import './AuthPage.css'

import { RouteAuthenticate } from '../../auth/Route.js';

import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";



function AuthPage (props) {

  return (
    <>
      <RouteAuthenticate 
        exact 
        // { ...props }
        auth={ props.auth } 
        setAuth={ props.setAuth }
        path="/user/auth/sign-in" 
        component={ SignIn } 
      />
      
      <RouteAuthenticate 
        exact 
        // { ...props }
        // auth={ auth }
        auth={ props.auth }
        path="/user/auth/sign-up" 
        component={ SignUp } 
      />
    </>
  );

}



export default AuthPage