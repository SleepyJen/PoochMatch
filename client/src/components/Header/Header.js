import React from 'react'
import './Header.css'
import Logo from './Logo/Logo.js'
import NavBar from './NavBar/NavBar.js'



function Header ({ ...rest }) {

  return (
    <header>
      <div className="container-wrapper">
        <Logo />
        <NavBar { ...rest } />
      </div>
    </header>
  );

}



export default Header