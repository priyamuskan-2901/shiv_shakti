import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home.jsx";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import Enterprises from "./components/Routes/Enterprises.jsx";
import Feedmills from "./components/Routes/Feedmills.jsx";
import Omshiv from "./components/Routes/Omshiv.jsx";
import Shivanita from "./components/Routes/Shivanita.jsx";
import ShivShaktiHatcheries from "./components/Routes/ShivShaktiHatcheries.jsx";
import data from "./data/Home/Home.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className={styles.App}>
        <div className="pb-8">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-shiv-farms" element={<Omshiv />} />
          <Route path="/shiv-anita-farms" element={<Shivanita />} />
          <Route path="/shiv-shakti-enterprises" element={<Enterprises />} />
          <Route path="/shiv-shakti-feed-mills" element={<Feedmills />} />
          <Route path="/shiv-shakti-hatcheries" element={<ShivShaktiHatcheries />} />
        </Routes>
        <Contact />
        <Footer />
        <WhatsAppButton 
          phoneNumber={import.meta.env.VITE_WHATSAPP_PHONE_NUMBER} // Accessing phone number from environment variable
        />
      </div>
    </Router>
  );
}

export default App;
