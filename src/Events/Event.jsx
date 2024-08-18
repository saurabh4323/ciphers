import React from "react";
import Header from "../Header/Header";
import "./eve.css";
import Foot from "../Footer/Foot";
const Event = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="col">
          <h1>Events Of Cipher</h1>
          <div className="card">
            <img src="eve.png"></img>
          </div>
          <div className="card">
            <img src="ev.png"></img>
          </div>
          <div className="card">
            <img src="a.png"></img>
          </div>
        </div>
      </div>
      <Foot></Foot>
    </div>
  );
};

export default Event;
