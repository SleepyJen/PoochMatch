import React from "react"; // , { useState }
import "./Preview.css";

function Preview() {
  return (
    <section className="preview">
      <div className="card">
        <div className="left-side">
          <div className="pooch-pic">
          </div>
          <div>
            <p>Name</p>
            <p>Age</p>
          </div>
        </div>
        <div className="right-side">
          <p>Characteristics</p>
          <ul>
            <li>----</li>
            <li>----</li>
            <li>----</li>
          </ul>
          <button>View More</button>
        </div>
      </div>
      <div className="card">
        <div className="left-side">
          <div className="pooch-pic">
          </div>
          <div>
            <p>Name</p>
            <p>Age</p>
          </div>
        </div>
        <div className="right-side">
          <p>Characteristics</p>
          <ul>
            <li>----</li>
            <li>----</li>
            <li>----</li>
          </ul>
          <button>View More</button>
        </div>
      </div>
      <div className="card">
        <div>
          <div>
            <img alt="pat-dog" />
          </div>
          <div>
            <p>Name</p>
            <p>age</p>
          </div>
        </div>
        <div>
          <div>
            <p>characteristics</p>
            <ul>
              <li>----</li>
              <li>----</li>
              <li>----</li>
            </ul>
          </div>
          <button>view more</button>
        </div>
      </div>
    </section>
  );
}

export default Preview;
