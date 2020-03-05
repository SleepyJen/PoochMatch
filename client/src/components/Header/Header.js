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