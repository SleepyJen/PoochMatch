import React from 'react' // , { useState }
import './Logo.css'



function Logo () {

  return (
    <div className="header-logo">
      <img 
        src="/assets/images/favicon.png" 
        alt="Logo"
        className="img-logo"
      />
      <h1 className="title-lg">
        Pooch Match
      </h1>
    </div>
  );

}



export default Logo