import React from "react"; // , { useState }
import "./Preview.css";

function Preview() {
  return (
    <section className="preview">
      {/* <h2>Preview Card</h2> */}
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
