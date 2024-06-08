import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className={styles.contact}>
        <div className={styles.header}>
          <div className={styles.icons}>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.info}>
            <h2>Get In Touch!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Scelerisque arcu eu velit
              scelerisque in. Tellus ut sem tristique viverra arcu neque
              suscipit.
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Type your name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Type your email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Type your message for us"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
