import React from "react";
import styles from './Solutions.module.css'
import SolutionsContainer from "./SolutionsContainer/SolutionsContainer";

function Solutions() {
  return (
    <SolutionsContainer>
      <div className={styles.title}>SOLUTIONS</div>
      <div className={styles.description}>
        Nullam non nisi est sit amet facilisis. Sed faucibus turpis in eu mi
        bibendum neque egestas congue. Duis at consectetur lorem donec massa
        sapien. Ultrices mi tempus imperdiet nulla malesuada. Nisi lacus sed
        viverra tellus in hac habitasse platea. Proin sed libero enim sed
        faucibus. Nec tincidunt praesent semper feugiat nibh sed. Pellentesque
        id nibh tortor id aliquet lectus proin. Viverra suspendisse potenti
        nullam ac. Tellus in hac habitasse platea dictumst. Diam ut venenatis
        tellus in metus vulputate eu scelerisque. Et tortor consequat id porta
        nibh venenatis cras sed felis.
      </div>
    </SolutionsContainer>
  );
}

export default Solutions;
