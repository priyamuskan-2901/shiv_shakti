import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Heading } from "./components/Heading/Heading.jsx";
import data from "./data/Home/Home.json";
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={styles.App}
    >
      <Navbar />
      <Home />
      <About />
      <WhyChooseUs />
      <Heading />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
