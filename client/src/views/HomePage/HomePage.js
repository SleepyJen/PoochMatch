import React from "react"; // , { useState }
import "./HomePage.css";

import Banner from "./components/Banner/Banner";

function HomePage(props) {
  return (
    <main className="home-page">
      <Banner auth={props.auth} />
    </main>
  );
}

export default HomePage;
