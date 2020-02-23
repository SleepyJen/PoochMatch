// import * as serviceWorker from './serviceWorker'
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import ___ from "./components/___/";
import CompOne from "./components/CompOne/";
import CompTwo from "./components/CompTwo/";

function App() {
  return (
    <div className="App">
      <___ />
      <CompOne />
      <CompTwo />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
// serviceWorker.unregister();
