import React, { useState, useEffect } from "react";
import data from "../../data/Home/Home.json";
import './animations.css';

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
    <section className="flex flex-col overflow-hidden h-screen">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center p-12 lg:p-20 h-full text-white bg-cover bg-center bg-no-repeat relative transition-all duration-1000 ease-in-out" style={backgroundImageStyle}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-1"></div>
        <div className="relative z-2 max-w-full lg:max-w-2/5 flex justify-center items-center overflow-hidden mb-10 lg:mb-0 lg:ml-10">
          <img
            src={data[currentSlide].smallImage}
            alt={data[currentSlide].title}
            className={`max-w-full rounded-lg transition-transform duration-1000 ease-in-out ${textAnimation ? 'slideUp' : 'slideDown'}`}
          />
        </div>
        <div className="relative z-2 max-w-full lg:max-w-1/2 text-center lg:text-left">
          <h1 className={`text-3xl lg:text-4xl mb-5 ${textAnimation ? 'slideUp' : 'slideDown'}`}>{data[currentSlide].title}</h1>
          <p className={`text-lg lg:text-xl mb-10 ${textAnimation ? 'slideUp' : 'slideDown'}`}>{data[currentSlide].details}</p>
          <button className={`bg-brown-900 text-white border-none px-6 py-4 text-lg font-medium cursor-pointer rounded-lg transition-colors duration-300 ease ${textAnimation ? 'slideUp' : 'slideDown'}`}>
            EXPLORE NOW
          </button>
        </div>
      </div>
    </section>
  );
};
