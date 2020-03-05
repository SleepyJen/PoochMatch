import React from "react"; // , { useState }
import "./HomePage.css";

import Banner from "../../components/Banner/Banner";
import Preview from "../../components/Preview/Preview";



function HomePage () {
  return (
    <main className="">
      <h2>HOME PAGE</h2>
      <Banner />
      <Preview />
    </main>
  );
}



export default HomePage