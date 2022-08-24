import React from "react";
import { NavLink } from "react-router-dom";

function Navitem({ label, to }) {
  return (
    <li>
      <NavLink to={to}>{label}</NavLink>
    </li>
  );
}

export default Navitem;
