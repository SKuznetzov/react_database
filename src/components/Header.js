import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to="/upload">
            <div className="upload" />
          </Link>
          <img className="personal" src="https://i.imgur.com/QwZod6m.png" alt="222"/>
        </div>
      </div>
    </div>
  );
};
export default Header;
