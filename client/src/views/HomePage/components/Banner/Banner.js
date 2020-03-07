import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <h2 className="banner-text">Woof you play with me?</h2>
      <h2 className="banner-adoption">Interested in adopting?</h2>
      <button onClick={() => console.log("working?")} className="banner-button">
        <h2>View dogs...</h2>
      </button>
    </section>
  );
}

export default Banner;
