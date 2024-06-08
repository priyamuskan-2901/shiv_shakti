import React, { useState, useEffect } from "react";
import styles from "./WhyChooseUs.module.css";
import featureData from "../../data/WhyChooseUs/WhyChooseUs.json";

export const WhyChooseUs = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % featureData.length);
  };

  const prevFeature = () => {
    setCurrentFeature(
      (prev) => (prev - 1 + featureData.length) % featureData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextFeature, 5000);
    return () => clearInterval(interval);
  }, []);

  const feature = featureData[currentFeature];

  return (
    <section className={styles.whyChooseUs} id="companies">
      <h2 className={styles.title}>Why Choose Us?</h2>
      <div className={styles.features}>
        {featureData.map((feature, index) => (
          <div
            key={index}
            className={`${styles.feature} ${
              index === currentFeature ? styles.active : ""
            }`}
          >
            <img src={feature.src} alt={feature.alt} className={styles.image} />
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <span className={styles.arrow} onClick={prevFeature}>
          <img src="../../../assets/WhyChooseUs/Vector left.png" />
        </span>
        <span className={styles.arrow} onClick={nextFeature}>
          <img src="../../../assets/WhyChooseUs/Vector right.png" />
        </span>
      </div>
      <div className={styles.description}>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </section>
  );
};
