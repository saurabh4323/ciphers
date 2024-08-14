import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hemain">
      <div className="lehero">
        <h3>Welcome to </h3>
        <h1>Ciphers Club BU</h1>
        <p>
          Whether you're a seasoned hacker or just beginning your journey into
          the field, Cipher Club offers a space to learn, collaborate, and
          develop the skills necessary to protect our digital world.
        </p>
        <a href="https://www.instagram.com/cipher_bu/?hl=en" target="-blank">
          <button className="button-35">Follow Us</button>
        </a>
      </div>
      <div className="righthero">
        <img src="https://barakahit.net/html/cybercafe/assets/img/home-font.png"></img>
      </div>
    </div>
  );
};

export default Hero;
