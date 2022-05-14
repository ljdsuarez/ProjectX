import React from "react";
import styles from "./NavbarLink.module.css";
import NavbarAnimation from "../NavbarAnimation/NavbarAnimation";

function NavbarLink() {
  return (
    <NavbarAnimation
      pageYOffset="0"
      before={styles.container}
      after={styles.container_scrolled}
    >
      <NavbarAnimation
        pageYOffset="0"
        before={styles.navlink}
        after={styles.navlink_scrolled}
        text="Solutions"
      />
      <NavbarAnimation
        pageYOffset="0"
        before={styles.navlink}
        after={styles.navlink_scrolled}
        text="Blogs"
      />
      <NavbarAnimation
        pageYOffset="0"
        before={styles.navlink}
        after={styles.navlink_scrolled}
        text="About"
      />
      <NavbarAnimation
        pageYOffset="0"
        before={styles.navlink}
        after={styles.navlink_scrolled}
        text="Contacts"
      />
    </NavbarAnimation>
  );
}

export default NavbarLink;
