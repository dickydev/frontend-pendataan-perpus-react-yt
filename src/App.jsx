import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      <div className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <h2>Selamat Datang di Dashboard Perpustakaan</h2>
      </div>
    </React.Fragment>
  );
};

export default App;
