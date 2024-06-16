import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <Link to="/about">About Us</Link>
          </li>
          <li
            className={`${styles.menuitem} ${styles.dropdown}`}
            onClick={toggleDropdown}
          >
            <span>
              <Link to="/companies">Companies</Link>
              <span
                className={`${styles.dropdownArrow} ${
                  isDropdownOpen ? styles.open : ""
                }`}
              >
                ▼
              </span>
            </span>
            <ul
              className={`${styles.dropdownMenu} ${
                isDropdownOpen ? styles.show : ""
              }`}
            >
              <li className={styles.dropdownItem}>
                <Link to="/explore/OM SHIV FARMS">Om Shiv Farms</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link to="/explore/SHIV ANITA FARMS">Shiv Anita Farms</Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link to="/explore/SHIV SHAKTI ENTERPRISES">
                  Shiv Shakti Enterprises
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link to="/explore/SHIV SHAKTI FEED MILS">
                  Shiv Shakti Feed Mils
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.menuitem}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
