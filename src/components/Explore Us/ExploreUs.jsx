import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ExploreUs.module.css";
import data from "../../data/ExploreUs/ExploreUs.json";

export const ExploreUs = () => {
  const { title } = useParams();
  const currentData = data.find((item) => item.title === title);

  if (!currentData) {
    return <div>Contact information not found.</div>;
  }

  return (
    <div className={styles.ExploreUs}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{currentData.description}</p>
        </div>
        <div className={styles.right}>
          <h3 className={styles.contactTitle}>Need Help? Contact Our Team</h3>
          <div className={styles.columnContainer}>
            <div className={styles.contactColumn}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <img
                    src="/assets/Footer/Vector (3).png"
                    className={styles.icon}
                    alt="Location"
                  />
                  <div>
                    <h4 className={styles.contactHeading}>Location</h4>
                    <p className={styles.contactDescription}>
                      {currentData.location}
                    </p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <img
                    src="/assets/Footer/Vector (1).png"
                    className={styles.icon}
                    alt="Contact"
                  />
                  <div>
                    <h4 className={styles.contactHeading}>Contact us</h4>
                    <p className={styles.contactDescription}>
                      {currentData.contactUs}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contactColumn}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <img
                    src="/assets/Footer/Vector (2).png"
                    className={styles.icon}
                    alt="Partners"
                  />
                  <div>
                    <h4 className={styles.contactHeading}>Business partners</h4>
                    <p className={styles.contactDescription}>
                      {currentData.businessPartners}
                    </p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <img
                    src="/assets/Footer/Vector (5).png"
                    className={styles.icon}
                    alt="Mail"
                  />
                  <div>
                    <h4 className={styles.contactHeading}>Mail us</h4>
                    <p className={styles.contactDescription}>
                      {currentData.mailUs}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreUs;
