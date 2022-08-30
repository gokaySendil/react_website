import React from "react";
import "./main.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Sections/Hero/Hero";
import Story from "./Components/Sections/Story/Story";
import Character from "./Components/Sections/Characters/Character";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Story />
      <Character />
      <Footer />
    </div>
  );
}

export default App;
