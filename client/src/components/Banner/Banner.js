import React from "react";
// import React, { Component } from "react";
// import React, { useState } from "react";
import "./Banner.css";

// export default class Banner extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Title</h1>
//       </div>
//     );
//   }
// }

function Banner() {
  return (
    <div className="App">
      <section className="slogan">
        <h1 className="bannerText">Woof you play with me?</h1>
        <button
          onClick={() => console.log("working?")}
          className="SloganButton"
        >
          Click Here
        </button>
      </section>
    </div>
  );
}

export default Banner;
