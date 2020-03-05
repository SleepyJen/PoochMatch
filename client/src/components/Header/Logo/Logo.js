import React from 'react' // , { useState }
import { Link } from 'react-router-dom'
import './Logo.css'



function Logo () {

  return (
    <div className="header-logo">
      <img 
        src="/assets/images/favicon/favicon.png" 
        alt="Logo"
        className="icon"
      />
      <h1 className="title-lg">
        <Link to="/">
          Pooch Match
        </Link>
        
        {/* <a href="/"> */}
          {/* Pooch Match */}
        {/* </a> */}
      </h1>
    </div>
  );

}



export default Logo