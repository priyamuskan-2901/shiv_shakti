import React from "react";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>About Us</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Varius tincidunt dui ut
              eget egestas lorem leo. Tempus at turpis auctor maecenas facilisi
              viverra dictum. Imperdiet sed at vulputate sed quis est. Ar sit
              felis mi semper ridiculus donec. Libero est fermentum volutpat
              consequat a commodo mauris. Tempor eleifend elit amet purus. Elit
              adipiscing blandit lacinia consectetur non eleifend.
            </p>
            <button>Read More</button>
          </div>
          <div className={styles.images}>
            <img src="../../../assets/Home/AB-01.png" alt="Image 1" />
            <img src="../../../assets/Home/AB-02.png" alt="Image 2" />
          </div>
        </div>
      </div>
    </section>
  );
};
