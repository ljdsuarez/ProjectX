import React from "react";
import styles from "./NavbarTitle.module.css";
import NavbarAnimation from "../NavbarAnimation/NavbarAnimation";

function NavbarTitle() {
  return (
    <NavbarAnimation
      pageYOffset="100"
      before={styles.titleContainer}
      after={styles.titleContainer_scrolled}
    >
      <NavbarAnimation
        pageYOffset="100"
        before={styles.title}
        after={styles.title_scrolled}
        text="Project-X"
      />
      <NavbarAnimation
        pageYOffset="100"
        before={styles.subtitle}
        after={styles.subtitle_scrolled}
        text="Your evertyhing solutions to assistance."
      />
    </NavbarAnimation>
  );
}

export default NavbarTitle;
