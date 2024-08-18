import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import Header from "../Header/Header";
import Foot from "../Footer/Foot";
const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Header></Header>
      <div className="about-us-page">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Cipher Club
        </motion.h1>
        <motion.div
          className="about-us-content"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p>
            Welcome to Cipher Club, Bennett University's premier cybersecurity
            and hacking club. Our mission is to create a dynamic environment
            where students can learn, collaborate, and excel in the field of
            cybersecurity. Whether you're passionate about ethical hacking,
            cybersecurity research, or just starting your journey, Cipher Club
            is the place for you.
          </p>
          <p>
            Established with the vision to foster a community of skilled
            cybersecurity enthusiasts, we offer a variety of events, workshops,
            and hands-on experiences. Our club organizes regular cybersecurity
            competitions, workshops on ethical hacking and threat detection, and
            guest lectures by industry experts. These activities are designed to
            enhance your skills and keep you updated on the latest trends in
            cybersecurity.
          </p>
          <p>
            Our members also have access to advanced tools and resources that
            enable them to engage in practical learning and real-world
            scenarios. We believe in learning through doing, and our projects
            and challenges are tailored to simulate real-life cyber threats and
            solutions.
          </p>
          <p>
            Join us at Cipher Club to be part of a thriving community that
            values knowledge sharing, innovation, and collaboration. Together,
            we can build a safer digital world.
          </p>
        </motion.div>
        <motion.div
          className="footer"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <p>
            This website is crafted with care by Saurabh Singh, the Tech-Head of
            Cipher Club at Bennett University.
          </p>
        </motion.div>
      </div>
      <Foot></Foot>
    </>
  );
};

export default About;
