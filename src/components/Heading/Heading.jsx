import React from "react";
import styles from "./Heading.module.css";
import backgroundImage from "../../../assets/Heading/CHICKS.jpeg";

export const Heading = () => {
  return (
    <section
      className={styles.headingSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>HEADING</h2>
          <h3 className={styles.subheading}>Lorem ipsum dolor sit</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Netus pellentesque cursus
            non pharetra neque. Augue pellentesque est quam blandit. Tellus
            vulputate est morbi in. Neque nunc vestibulum orci bibendum. Enim
            sollicitudin risus feugiat nibh. At quis quis tincidunt cum sapien
            et. Semper sit leo orci nibh venenatis. Adipiscing velit dictumst
            mauris accumsan consectetur eget fusce pellentesque.
          </p>
        </div>
      </div>
    </section>
  );
};
