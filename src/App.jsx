import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import "./styles.scss";


function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Searchbar />
  </div>
  );
}

export default App;
