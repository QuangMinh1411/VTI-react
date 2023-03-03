import React from "react";

export const Person = ({ id, name, clickElement }) => {
  return (
    <li onClick={clickElement}>
      {id}:{name}
    </li>
  );
};
