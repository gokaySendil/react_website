import React from "react";
import "./main.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Sections/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section id="home" className="home-section"></section>
      <section id="story" className="story-section"></section>
      <section id="characters" className="characters-section"></section>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
