import React from "react";
import PropTypes from "prop-types";

const Header = (props) => (
  <div className="site-header">
    <div className="container">
      <a href="index.html" className="branding">
        <img src="images/logo.png" alt="" className="logo" />
        <div className="logo-type">
          <h1 className="site-title">{props.appName}</h1>
          <small className="site-description">{props.tagLine}</small>
        </div>
      </a>
    </div>
  </div>
);

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired
};

export default Header;