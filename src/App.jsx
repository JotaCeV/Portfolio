import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="home-container">
        <ChakraProvider>
          <Home />
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
