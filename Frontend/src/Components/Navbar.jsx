import React from "react";
import NavbarBox from "./navComponents/NavbarBox";
import Navlink from "./navComponents/Navlink";

function Navbar() {
  return (
    <NavbarBox>

      <Navlink
        navLinkPath="/"
        navLinkTitle="Home"
      />

      <Navlink
        navLinkPath="/about"
        navLinkTitle="About"
      />

      <Navlink
        navLinkPath="/property"
        navLinkTitle="Property"
      />

    </NavbarBox>
  );
}

export default Navbar;