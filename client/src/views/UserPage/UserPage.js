import React from 'react' // , { useState }
import { Route } from 'react-router-dom';
import './UserPage.css'

// import ___ from './components/___/___.js'
import NavSettings from './components/NavSettings/NavSettings.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import DogProfile from './components/DogProfile/DogProfile.js'
import UserProfile from './components/UserProfile/UserProfile.js'
import UserSettings from './components/UserSettings/UserSettings.js'




function UserPage () {

  return (
    <main className="component">
      <h2>User Page</h2>
      <div>
        <i className="fas fa-user-alt"></i>
        {/* <i className="fas fa-user"></i> */}
        {/* <i className="fas fa-user-circle"></i> */}
        {/* <i className="fas fa-user-astronaut"></i> */}
      </div>

      <NavSettings />
      
      <br />

      <Route exact path="/user" component={ Dashboard } />
      <Route exact path="/user/dashboard" component={ Dashboard } />
      <Route exact path="/user/user-profile" component={ UserProfile } />
      <Route exact path="/user/dog-profile" component={ DogProfile } />
      <Route exact path="/user/user-settings" component={ UserSettings } />
    </main>
  );

}



export default UserPage