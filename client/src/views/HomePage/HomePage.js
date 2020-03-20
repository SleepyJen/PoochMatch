import React from "react"; // , { useState }
import "./HomePage.css";

import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";


function HomePage({ ...rest }) {
  return (
    <main className="home-page">
      <Banner { ...rest } />
      <Description />
    </main>
  );
}

export default HomePage;
