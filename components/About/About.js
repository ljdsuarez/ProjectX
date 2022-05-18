import React from "react";
import AboutContainer from "./AboutContainer/AboutContainer";
import styles from "./About.module.css";

function About() {
  return (
    <AboutContainer>
      <div className={styles.title}>ABOUT</div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo
        viverra maecenas. Placerat in egestas erat imperdiet sed. Porttitor eget
        dolor morbi non arcu risus. Orci eu lobortis elementum nibh tellus
        molestie. Id volutpat lacus laoreet non curabitur gravida arcu ac
        tortor. Sed augue lacus viverra vitae congue eu. Egestas congue quisque
        egestas diam in. Felis donec et odio pellentesque diam volutpat. Dictum
        non consectetur a erat nam at lectus urna duis. Habitant morbi tristique
        senectus et netus et. Magna sit amet purus gravida quis. Venenatis a
        condimentum vitae sapien pellentesque habitant. Nunc mi ipsum faucibus
        vitae aliquet nec ullamcorper sit amet. Mi bibendum neque egestas
        congue.
      </div>
    </AboutContainer>
  );
}

export default About;
