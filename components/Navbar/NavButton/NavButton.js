import React from "react";
import styles from "./NavButton.module.css";
import NavbarAnimation from "../NavbarAnimation/NavbarAnimation";
import Image from "next/image";

function NavButton() {
  return (
    <NavbarAnimation
      pageYOffset="450"
      before={styles.container}
      after={styles.container_scrolled}
    >
      <NavbarAnimation
        pageYOffset="450"
        before={styles.button}
        after={styles.button_scrolled}
      >
        <NavbarAnimation
          pageYOffset="450"
          before={styles.buttonText}
          after={styles.buttonText_scrolled}
          text="Book Now"
        />
        <NavbarAnimation
          pageYOffset="450"
          before={styles.buttonImage}
          after={styles.buttonImage_scrolled}
        >
          <Image src="/booknow.png" width={30} height={30} />
        </NavbarAnimation>
      </NavbarAnimation>
    </NavbarAnimation>
  );
}

export default NavButton;
