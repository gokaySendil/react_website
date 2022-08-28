import React from "react";
import "./main.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Sections/Hero/Hero";
import Story from "./Components/Sections/Story/Story";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Story />
    </div>
  );
}

export default App;
