import React from "react"; // , { useState }
import "./HomePage.css";

// import Header from "../../components/Header/Header"
import Banner from "./components/Banner/Banner";
import Preview from "./components/Preview/Preview";


function HomePage () {
  return (
    <main className="">
      {/* <Header /> */}
      <Banner />
      <Preview />
    </main>
  );
}


export default HomePage