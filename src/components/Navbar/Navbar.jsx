import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        SHIV SHAKTI <br />
        HATCHERIES
      </a>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menuItems}>
          <li className={styles.menuitem}>
            <a href="/">Home</a>
          </li>
          <li className={styles.menuitem}>
            <a href="#about">About Us</a>
          </li>
          <li className={styles.menuitem}>
            <a href="#companies">Companies</a>
          </li>
          <li className={styles.menuitem}>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
