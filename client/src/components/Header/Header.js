import React from 'react' // , { useState } 
import './Header.css'
import Logo from './Logo/Logo.js'
import NavBar from './NavBar/NavBar.js'



function Header () {

  return (
    <header>
      <div className="container-wrapper">
        <Logo />
        <NavBar />
      </div>
    </header>
  );

}



export default Header



/* 
        <div className="menu-bar">
          <a href="#" className="nav-btn">
            <i className="fas fa-bars"></i>
          </a>
          <a href="#" className="exit-btn">
            <i className="fas fa-times"></i>
          </a>
        </div> 
*/
