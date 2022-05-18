import React from "react";
import NavbarTitle from "./NavbarTitle/NavbarTitle";
import NavbarLink from "./NavbarLinks/NavbarLink";
import NavButton from "./NavButton/NavButton";
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
      <NavbarLink />
      <NavbarTitle />
      <NavButton />
    </div>
  );
}

export default Navbar;
