import React from "react";
import NavbarTitle from "./NavbarTitle/NavbarTitle";
import NavbarLink from "./NavbarLinks/NavbarLink";
import NavButton from "./NavButton/NavButton";

function Navbar() {
  return (
    <div>
      <NavbarLink />
      <NavbarTitle />
      <NavButton />
    </div>
  );
}

export default Navbar;
