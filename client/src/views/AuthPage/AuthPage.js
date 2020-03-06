import React from 'react' // , { useState }
import { Route } from 'react-router-dom';
import './AuthPage.css'
import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";



function AuthPage () {

  return (
    <>
      <Route exact path="/user/auth/sign-in" component={ SignIn } />
      <Route exact path="/user/auth/sign-up" component={ SignUp } />
    </>
  );

}



export default AuthPage