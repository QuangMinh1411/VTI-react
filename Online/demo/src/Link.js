import React from "react";

export const Link = ({ children, config }) => {
  return (
    <a {...config} target="_blank" rel="noopener" noreference>
      {children}
    </a>
  );
};
