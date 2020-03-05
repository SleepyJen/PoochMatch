// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react' // , { useState }
import { Route } from 'react-router-dom';
import './UserPage.css'

// import ___ from './components/___/___.js'
import NavSettings from './components/NavSettings/NavSettings.js'
// import DogProfile from './components/DogProfile/DogProfile.js'
// import UserProfile from './components/UserProfile/UserProfile.js';

import TestComp from './components/TestComp/TestComp.js'


function UserPage () {

  return (
    <div className="component">
      <h2>User Page</h2>
      <div>
        <i className="fas fa-user-alt"></i>
        {/* <i className="fas fa-user"></i> */}
        {/* <i className="fas fa-user-circle"></i> */}
        {/* <i className="fas fa-user-astronaut"></i> */}
      </div>

      <NavSettings />
      
      <br />

      <Route exact path="/user/:settings">
        <TestComp />
      </Route>
      {/* <span>SUB PAGE</span> */}
    </div>
  );

}



export default UserPage