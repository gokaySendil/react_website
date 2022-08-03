import React from "react";

const CustomLink = (Props) => {
  return (
    <li className="list-item nav-item">
      <a href={Props.id}>{Props.name}</a>
    </li>
  );
};

export default CustomLink;
