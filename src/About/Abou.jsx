import React from "react";
import "./a.css";
const Abou = () => {
  return (
    <div className="about-page">
      <h1>Cyber Security</h1>
      <div className="about-cards">
        <div className="about-card">
          <img
            src="https://barakahit.net/html/cybercafe/assets/img/icons/services-icon-3.svg"
            alt="High Tech Gym"
          />
          <h2>Cybersecurity Solutions</h2>
          <p>
            Safeguard your digital landscape with cutting-edge security tools,
            protocols, and strategies. Protect your data with advanced
            encryption, firewalls, and multi-layered defense systems, ensuring
            resilience against ever-evolving cyber threats.
          </p>
        </div>
        <div className="about-card">
          <img
            src="https://barakahit.net/html/cybercafe/assets/img/icons/services-icon-4.svg"
            alt="Qualified Instructor"
          />
          <h2>Cybersecurity Experts</h2>
          <p>
            Enhance your cybersecurity skills through our specialized workshops
            led by industry experts. Whether you're looking to master ethical
            hacking, understand advanced threat detection, or learn about the
            latest in cybersecurity technologies.
          </p>
        </div>
        <div className="about-card">
          <img
            src="https://barakahit.net/html/cybercafe/assets/img/icons/services-icon-5.svg"
            alt="Happy Community"
          />
          <h2>Cybersecurity Community</h2>
          <p>
            Join a thriving cybersecurity community where professionals and
            enthusiasts come together to tackle modern threats. Share knowledge,
            strategies, and support in a collaborative environment, fostering
            innovation and vigilance against cyber attacks.
          </p>
        </div>
      </div>
      <div className="about-pa">
        <p>
          Welcome to the Cipher Club of Bennett, a premier platform dedicated to
          the world of cybersecurity. Our club is a hub for enthusiasts and
          professionals alike, where cutting-edge knowledge meets practical
          skills. Here, you'll discover a wealth of resources, from advanced
          workshops and seminars to collaborative projects and competitions.
        </p>
      </div>
    </div>
  );
};

export default Abou;
