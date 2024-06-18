import React, { useState, useEffect } from "react";
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
    <section className="text-center p-5 bg-brown-900 text-white" id="companies">
      <h2 className="text-2xl mb-5">Why Choose Us?</h2>
      <div className="flex justify-center items-center mb-5">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className={`transition-opacity transition-transform duration-500 mx-2 ${index === currentFeature ? 'opacity-100 transform scale-110' : 'opacity-50'}`}
          >
            <img src={feature.src} alt={feature.alt} className="w-24 h-24" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-5">
        <span className="cursor-pointer mx-5 transition-transform duration-300 hover:transform hover:scale-110" onClick={prevFeature}>
          <img src="/assets/WhyChooseUs/Vector left.png" />
        </span>
        <span className="cursor-pointer mx-5 transition-transform duration-300 hover:transform hover:scale-110" onClick={nextFeature}>
          <img src="/assets/WhyChooseUs/Vector right.png" />
        </span>
      </div>
      <div className="text-center mt-7">
        <h3 className="text-2xl mb-5">{feature.title}</h3>
        <p className="text-xl opacity-50">{feature.description}</p>
      </div>
    </section>
  );
};
