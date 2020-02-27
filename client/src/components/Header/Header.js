import React from 'react'
// , { useState } 
import './header.css'



function Header () {

  return (
    <header>
      <div className="container-wrapper">
        <div className="header-logo">
          <img src="/assets/images/favicon.png" alt="logo" className="img-logo" />
          <h1 className="title-lg">
            Pooch Match
          </h1>
        </div>
        <nav className="navbar">
          <ul className="nav-opts">
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/">
                View All
              </a>
            </li>
            <li>
              <a href="/">
                Account
              </a>
            </li>
          </ul>
        </nav>
        {/* <div className="menu-bar">
          <a href="#" className="nav-btn">
            <i className="fas fa-bars"></i>
          </a>
          <a href="#" className="exit-btn">
            <i className="fas fa-times"></i>
          </a>
        </div> */}
      </div>
    </header>
  );

}



export default Header