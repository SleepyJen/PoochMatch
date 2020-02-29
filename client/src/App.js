import React from "react";
import "./reset.css";
import "./app.css";
// import ___ from './components/___/'
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Banner from "./components/Banner/Banner.js";

// import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Banner />
    </div>
  );
}

export default App;
