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
        auth={ props.auth } 
        setAuth={ props.setAuth }
        // props={ props }
        // { ...rest }
        path="/user/auth/sign-in" 
        component={ SignIn } 
      />
      
      <RouteAuthenticate 
        exact 
        auth={ props.auth }
        setAuth={ props.setAuth }
        // { ...rest }
        // props={ props }
        // { ...rest }
        path="/user/auth/sign-up" 
        component={ SignUp } 
      />
    </>
  );

}



export default AuthPage