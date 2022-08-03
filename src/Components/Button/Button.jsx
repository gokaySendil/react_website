import React from "react";

// Button needs onClick and title

const button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      props.title
    </button>
  );
};

export default button;
