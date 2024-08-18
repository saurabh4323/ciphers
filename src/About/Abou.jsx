import React from "react";
import { motion } from "framer-motion";
import "./a.css";

const Abou = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 300 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="about-page">
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      >
        Cyber Security
      </motion.h1>
      <div className="about-cards">
        <motion.div
          className="about-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <img src="one.svg" alt="Cybersecurity Solutions" />
          <h2>Cybersecurity Solutions</h2>
          <p>
            Safeguard your digital landscape with cutting-edge security tools,
            protocols, and strategies. Protect your data with advanced
            encryption, firewalls, and multi-layered defense systems, ensuring
            resilience against ever-evolving cyber threats.
          </p>
        </motion.div>
        <motion.div
          className="about-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <img src="sec.svg" alt="Cybersecurity Experts" />
          <h2>Cybersecurity Experts</h2>
          <p>
            Enhance your cybersecurity skills through our specialized workshops
            led by industry experts. Whether you're looking to master ethical
            hacking, understand advanced threat detection, or learn about the
            latest in cybersecurity technologies.
          </p>
        </motion.div>
        <motion.div
          className="about-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <img src="three.svg" alt="Cybersecurity Community" />
          <h2>Cybersecurity Community</h2>
          <p>
            Join a thriving cybersecurity community where professionals and
            enthusiasts come together to tackle modern threats. Share knowledge,
            strategies, and support in a collaborative environment, fostering
            innovation and vigilance against cyber attacks.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="about-pa"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      >
        <p>
          Welcome to the Cipher Club of Bennett, a premier platform dedicated to
          the world of cybersecurity. Our club is a hub for enthusiasts and
          professionals alike, where cutting-edge knowledge meets practical
          skills. Here, you'll discover a wealth of resources, from advanced
          workshops and seminars to collaborative projects and competitions.
        </p>
      </motion.div>
    </div>
  );
};

export default Abou;
