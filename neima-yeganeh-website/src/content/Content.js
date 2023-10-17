import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Shop from "./shop/Shop";
import About from "./about/About";
import ContactMe from "./contactMe/ContactMe";
import Projects from "./projects/Projects";
import "./Content.css";

function Content() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/projects/" element={<Projects />}></Route>
        <Route path="/shop/" element={<Shop />}></Route>
        <Route path="/contactme/" element={<ContactMe />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Outlet />
    </main>
  );
}

export default Content;
