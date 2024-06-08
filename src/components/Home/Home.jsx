import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import data from "../../data/Home/Home.json";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideAnimation, setSlideAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
      setSlideAnimation(false); // Reset animation
      setTimeout(() => setSlideAnimation(true), 50); // Re-enable animation after reset
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${data[currentSlide].backgroundImage})`,
  };

  return (
    <section className={styles.section}>
      <div className={styles.home} style={backgroundImageStyle}>
        <div className={styles.content}>
          <h1>{data[currentSlide].title}</h1>
          <p>{data[currentSlide].details}</p>
          <button className={styles.exploreButton}>EXPLORE NOW</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={data[currentSlide].smallImage}
            alt={data[currentSlide].title}
            className={`${styles.chickenImage} ${slideAnimation ? styles.slideIn : ""}`}
          />
        </div>
      </div>
    </section>
  );
};
