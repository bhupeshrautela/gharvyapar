import React from "react";
import { NavLink } from "react-router-dom";

function Navlink({ navLinkTitle, navLinkPath }) {
  return (
    <NavLink
      to={navLinkPath || "/"}
      className={({ isActive }) => `
        px-3
        py-1.5
        rounded-md
        text-sm
        font-semibold
        capitalize
        transition-all
        duration-200

        ${
          isActive
            ? "bg-black text-white"
            : "text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      {navLinkTitle || "Default"}
    </NavLink>
  );
}

export default Navlink;