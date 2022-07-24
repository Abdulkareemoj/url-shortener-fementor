import React from "react";

import CTASection from "./components/CTASection";
import Features from './components/Features';
import Footer from "./components/Footer";
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
    <Features />
    <CTASection />
    <Footer />
  </div>
  );
}

export default App;
