import React, { useState } from "react";
import mainLogo from "../../images/main.png";
import CustomLink from "../CustomLink/CustomLink";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    console.log("Clicked");
    setClick(false);
  };
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo-container">
          <a href="/">
            <img className="img-responsive" src={mainLogo} alt="logo.png" />
          </a>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#eef0ef" }} />
          ) : (
            <FaBars size={30} style={{ color: "#eef0ef" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <CustomLink click={closeMobileMenu} name="Home " id="/"></CustomLink>
          <CustomLink
            click={closeMobileMenu}
            name="Story"
            id="#story"
          ></CustomLink>
          <CustomLink
            click={closeMobileMenu}
            name="Characters"
            id="#characters"
          ></CustomLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
