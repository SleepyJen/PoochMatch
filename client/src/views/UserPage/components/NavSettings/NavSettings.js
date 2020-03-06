import React from 'react' // , { useState }
import { Link } from 'react-router-dom'
import './NavSettings.css'



function NavSettings () {

  return (
    <div className="component">
      <h2>User Settings Page</h2>
      <nav>
        <ul>
          <li>
            <Link to={`/user/${ 'dashboard' }` }>
              DashBoard
            </Link>
          </li>
          <li>
            <Link to={`/user/${ 'account' }` }>
              Account
            </Link>
          </li>
          <li>
            <Link to={`/user/${ 'user-profile' }` }>
              User Profile
            </Link>
          </li>
          <li>
            <Link to={`/user/${ 'dog-profile' }` }>
              Dog Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );

}



export default NavSettings