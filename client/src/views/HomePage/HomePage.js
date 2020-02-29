import React from "react"; // , { useState }
import "./HomePage.css";

import Banner from "../../components/Banner/Banner";
import Preview from "../../components/Preview/Preview";

export default function HomePage() {
  return (
    <main className="App">
      <h2>HOME PAGE</h2>
      <Banner />
      <Preview />
    </main>
  );
}
