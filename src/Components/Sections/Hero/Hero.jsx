import React from "react";
import CustomLink from "../../CustomLink/CustomLink";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="content">
        <h2>ARIFURETA SHOKUGYOU</h2>
        <h3>DE</h3>
        <h2>SEKAI SAIKYOU</h2>
        <button className="content-button">
          <a href="#story">Explore More</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
