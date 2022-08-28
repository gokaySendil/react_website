import React from "react";

const CustomLink = (Props) => {
  return (
    <li className="list-item nav-item">
      <a onClick={Props.click} href={Props.id}>
        {Props.name}
      </a>
    </li>
  );
};

export default CustomLink;
