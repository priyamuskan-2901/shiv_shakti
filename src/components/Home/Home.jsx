import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import data from "../../data/Home/Home.json";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textAnimation, setTextAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextAnimation(false); // Trigger slide down animation
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % data.length);
        setTextAnimation(true); // Trigger slide up animation after slide change
      }, 1000); // Match the animation duration

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
          <h1 className={textAnimation ? styles.slideUp : styles.slideDown}>{data[currentSlide].title}</h1>
          <p className={textAnimation ? styles.slideUp : styles.slideDown}>{data[currentSlide].details}</p>
          <button className={`${styles.exploreButton} ${textAnimation ? styles.slideUp : styles.slideDown}`}>EXPLORE NOW</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={data[currentSlide].smallImage}
            alt={data[currentSlide].title}
            className={`${styles.chickenImage} ${textAnimation ? styles.slideIn : styles.slideDown}`}
          />
        </div>
      </div>
    </section>
  );
};
