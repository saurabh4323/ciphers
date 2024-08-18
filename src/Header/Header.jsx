import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h4>CIPHERS</h4>
        <img src="https://media.licdn.com/dms/image/v2/C4E0BAQHKx402smQVLA/company-logo_200_200/company-logo_200_200/0/1640075429447?e=1731542400&v=beta&t=hoSqOgLasXZQ6C4pWx9C57eH1yOfxPfxfhRy_vGlE3s"></img>
      </div>
      <div className="rig">
        <Link to={"/home"}>
          <h4>Home</h4>
        </Link>
        <Link to={"/team"}>
          <h4>Team</h4>
        </Link>
        <Link to={"/event"}>
          <h4>Events</h4>
        </Link>

        <Link to={"/about"}>
          <h4>About us</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
