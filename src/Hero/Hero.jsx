import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import Abou from "../About/Abou";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const constraintsRef = useRef(null);

  useEffect(() => {
    // Show content after 2 seconds
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const springVariants = {
    initial: { rotate: 0, scale: 1, opacity: 1 },
    animate: {
      rotate: [0, 5, -5, 5, -5, 0],
      scale: [1, 1.1, 0.9, 1.1, 0.9, 1],
      opacity: [1, 0.8, 1],
      transition: {
        rotate: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 1, repeat: Infinity, ease: "easeInOut" },
      },
    },
  };

  const textColorVariants = {
    hidden: { color: "#03c4ff" },
    visible: {
      color: ["#03c4ff", "#ff6347", "#4caf50", "#ffeb3b"],
      transition: { duration: 4, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, type: "spring", stiffness: 300 },
    },
  };

  return (
    <>
      <div className={`black-screen ${showContent ? "hide" : ""}`}>
        <motion.div
          className="hacking-text"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            scale: [1, 1.1, 1],
            transition: { duration: 2, ease: "easeInOut" },
          }}
        >
          <h1>HACKING...</h1>
        </motion.div>
      </div>
      {showContent && (
        <div className="hemain">
          <div className="lehero">
            <motion.h3
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Welcome to
            </motion.h3>
            <motion.div
              className="container"
              ref={constraintsRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, stiffness: 300 }}
            >
              <motion.div
                className="item"
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  variants={textColorVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Ciphers Club BU
                </motion.h1>
              </motion.div>
            </motion.div>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Whether you're a seasoned hacker or just beginning your journey
              into the field, Cipher Club offers a space to learn, collaborate,
              and develop the skills necessary to protect our digital world.
            </motion.p>
            <a
              href="https://www.instagram.com/cipher_bu/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="button-35"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Follow Us
              </motion.button>
            </a>
          </div>
          <div className="righthero">
            <motion.img
              src="https://barakahit.net/html/cybercafe/assets/img/home-font.png"
              alt="Cyber Cafe"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      )}
      <div className="abo">
        <Abou />
      </div>
    </>
  );
};

export default Hero;
