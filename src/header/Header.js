import Navbar from "./navbar/Navbar";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(""); // State to track the active tab

  useEffect(() => {
    setActiveTab(location.pathname.toLowerCase());
  }, [location.pathname]);

  return (
    <header className="header" data-testid="header">
      <Navbar activeTab={activeTab} data-testid="navbar" />
    </header>
  );
}

export default Header;
