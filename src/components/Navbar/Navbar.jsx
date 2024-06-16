import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li className={styles.menuitem}>
            <Link to="about">About Us</Link>
          </li>
          <li className={styles.menuitem}>
            <Link to="/companies">Companies</Link>
          </li>
          <li className={styles.menuitem}>
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
