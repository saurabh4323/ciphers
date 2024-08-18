import React from "react";
import "./Foot.css";

const Foot = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Cipher Club of Bennett. All Rights Reserved.</p>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/cipher_bu/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/24/000000/instagram-new.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/ciphers-club/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluent/24/000000/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
