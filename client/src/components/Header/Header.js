import React from 'react' // , { useState } 
import './Header.css'
import Logo from './Logo/Logo.js'
import NavBar from './NavBar/NavBar.js'



function Header (props) {

  return (
    <header>
      <div className="container-wrapper">
        <Logo />
        <NavBar 
          auth={ props.auth } 
          setAuth={ props.setAuth } 
        />
      </div>
    </header>
  );

}



export default Header