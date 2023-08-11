import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Content from "./content/Content";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="app-container">
        <Header />
        <Content />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
