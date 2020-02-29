import React from 'react' // , { useState }
import { Link } from 'react-router-dom'
import './NavBar.css'



function NavBar () {

  return (
    <nav className="navbar">
      <ul className="nav-opts">
        <li>
          <Link 
            className="anchor" 
            to="/"
          >Home
          </Link>
        </li>
        <li>
          <Link 
            className="anchor" 
            to="/main"
          >Main
          </Link>
        </li>
{/* 
        <li>
          <Link 
            className="anchor" 
            to="/landing"
          >Landing
          </Link>
        </li>
*/}
        <li>
          <Link 
            className="anchor" 
            to="/sign-in"
          >Sign-In
          </Link>
        </li>
        <li>
          <Link 
            className="anchor" 
            to="/sign-up"
          >Sign-Up
          </Link>
        </li>
      </ul>
    </nav>
  );

}



export default NavBar