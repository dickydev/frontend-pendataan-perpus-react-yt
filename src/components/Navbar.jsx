import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
        <h1>Dashboard Perpus</h1>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
