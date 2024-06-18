import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/shiv-shakti-hatcheries');
  };

  return (
    <div id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto lg:max-w-7xl text-center">
        <div className="">
          <span className="text-6xl mb-5 font-bold sm:text-6xl text-brown-900 justify-center">About Us</span>
        </div>
        <div>
          <p className="text-base sm:text-lg">Hello Muskan, I am the about us section. How are you? Someone told you are the best and so cute of all time.</p>
        </div>

        <div className="flex justify-center mt-8">
          {/* Use Link component for internal navigation */}
          <Link to="/shiv-shakti-hatcheries" className="py-2 px-4 bg-[#49170E] text-white rounded shadow-md hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#49170E]">
            Read More
          </Link>

          {/* Alternatively, if you prefer a button click handler */}
          {/* <button onClick={handleReadMoreClick} className="py-2 px-4 bg-[#49170E] text-white rounded shadow-md hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#49170E]">
            Read More
          </button> */}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <img
            src="/assets/Home/AB-01.png"
            alt="Image 1"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg border-4 border-brown"
          />
          <img
            src="/assets/Home/AB-02.png"
            alt="Image 2"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg border-4 border-brown"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
