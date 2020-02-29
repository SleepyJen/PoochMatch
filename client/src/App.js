import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import "./reset.css";
import "./App.css";

// import ___ from './components/___/'
import Header from "./components/Header/Header.js";

// import ___ from "./views/___/___.js";
import HomePage from "./views/HomePage/HomePage.js";
import MainPage from "./views/MainPage/MainPage.js";
// import LandingPage from './views/LandingPage/LandingPage.js'
import SignUpPage from "./views/SignUpPage/SignUpPage.js";
import SignInPage from "./views/SignInPage/SignInPage.js";

// import axios from 'axios';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/main">
            <MainPage />
          </Route>
{/* 
          <Route exact path="/landing">
            <LandingPage />
          </Route>
*/}
          <Route exact path="/sign-in">
            <SignInPage />
          </Route>

          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
