import React from "react";
import { AnimatedLink } from "./AnimatedLink";
export const NavItem = (props) => {
  return (
    <div>
      <AnimatedLink target={props.target} text={props.text} />
    </div>
  );
};
