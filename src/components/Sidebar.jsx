import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <React.Fragment>
      <div className={`sidebar ${isOpen ? "open" : "closed"} `}>
        <ul>
          <li>Dashboard</li>
          <li>Data Buku</li>
          <li>Peminjam</li>
          <li>Pengaturan</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.func.isRequired,
};

export default Sidebar;
