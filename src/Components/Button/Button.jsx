import React from "react";
import CustomLink from "../CustomLink/CustomLink";

// Button needs onClick and title

const button = (props) => {
  return <button className={props.className} onClick={props.onClick}></button>;
};

export default button;
