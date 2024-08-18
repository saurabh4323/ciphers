import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import Abou from "../About/Abou";

const Hero = () => {
  const constraintsRef = useRef(null);
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <>
      <div className="hemain">
        <div className="lehero">
          <h3>Welcome to </h3>
          <motion.div className="container" ref={constraintsRef}>
            <motion.div className="item" drag dragConstraints={constraintsRef}>
              <h1>Ciphers Club BU</h1>
            </motion.div>
          </motion.div>
          <p>
            Whether you're a seasoned hacker or just beginning your journey into
            the field, Cipher Club offers a space to learn, collaborate, and
            develop the skills necessary to protect our digital world.
          </p>
          <a
            href="https://www.instagram.com/cipher_bu/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-35">Follow Us</button>
          </a>
        </div>
        <div className="righthero">
          <img
            src="https://barakahit.net/html/cybercafe/assets/img/home-font.png"
            alt="Cyber Cafe"
          />
        </div>
      </div>
      <div className="abo">
        <Abou></Abou>
      </div>
    </>
  );
};

export default Hero;
