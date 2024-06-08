import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>SHIV SHAKTI HATCHERIES</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Scelerisque arcu eu velit
            scelerisque in. Tellus ut sem tristique viverra arcu neque suscipit.
            Euismod mattis tortor eget interdum semper. Nec mi viverra dictum
            morbi id habitant quam semper.
          </p>
        </div>
        <div className={styles.right}>
        <h3 className={styles.contactTitle}>Need Help? Contact Our Team</h3>
        <div className={styles.columnContainer}>
          <div className={styles.contactColumn}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <img
                  src="../../../assets/Footer/Vector (3).png"
                  className={styles.icon}
                  alt="Location"
                />
                <div>
                  <h4 className={styles.contactHeading}>Location</h4>
                  <p className={styles.contactDescription}>
                    Lorem ipsum dolor sit amet consectetur. <br></br>
                    Scelerisque arcu eu velit scelerisque in.
                  </p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <img
                  src="../../../assets/Footer/Vector (1).png"
                  className={styles.icon}
                  alt="Contact"
                />
                <div>
                  <h4 className={styles.contactHeading}>Contact us</h4>
                  <p className={styles.contactDescription}>98267*****</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactColumn}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <img
                  src="../../../assets/Footer/Vector (2).png"
                  className={styles.icon}
                  alt="Partners"
                />
                <div>
                  <h4 className={styles.contactHeading}>Business partners</h4>
                  <p className={styles.contactDescription}>
                    Lorem ipsum dolor sit amet consectetur. Scelerisque arcu eu
                    velit scelerisque in.
                  </p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <img
                  src="../../../assets/Footer/Vector (5).png"
                  className={styles.icon}
                  alt="Mail"
                />
                <div>
                  <h4 className={styles.contactHeading}>mail us</h4>
                  <p className={styles.contactDescription}>
                    shivshakti.hatcheries@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2024 All Rights Reserved by Shiv shakti hatcheries
      </div>
    </footer>
  );
};