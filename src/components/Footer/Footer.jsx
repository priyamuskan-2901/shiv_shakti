// src/components/Footer.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import data from "../../data/Footer/Footer.json";

export const Footer = () => {
  const location = useLocation();
  const currentRouteData = data[location.pathname.substring(1)] || data["shiv-shakti-hatcheries"];
  return (
    <footer className="bg-gray-100 bg-opacity-100 font-calistoga box-border">
      <div className="flex flex-col md:flex-row justify-between py-5 px-5 md:px-10 w-full">
        <div className="flex-1 p-5 md:p-12">
          <h2 className="text-2xl font-bold text-brown-900 mb-2">{currentRouteData.heading}</h2>
          <p className="text-gray-800 mb-4">
            {currentRouteData.detail}
          </p>
        </div>
        <div className="flex-2 p-5 md:p-12">
          <h3 className="text-xl font-semibold text-brown-900 mb-2 text-center md:text-centre">Need Help? Contact Our Team</h3>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 ml-0 md:ml-7">
              <div className="flex flex-col gap-12 mt-2">
                <div className="flex gap-2 p-1">
                  <img src="/assets/Footer/Vector (3).png" className="w-6 h-6" alt="Location" />
                  <div>
                    <h4 className="text-base font-semibold text-brown-900 mb-1">Location</h4>
                    <p className="text-sm text-gray-800 m-0">
                      {currentRouteData.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-1">
                  <img src="/assets/Footer/Vector (5).png" className="w-6 h-6" alt="Mail" />
                  <div>
                    <h4 className="text-base font-semibold text-brown-900 mb-1">Mail us</h4>
                    <p className="text-sm text-gray-800 m-0">Shivshaktihatcheries@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 ml-0 md:ml-7">
              <div className="flex flex-col gap-5 mt-2">
                <div className="flex gap-2 p-1">
                  <img src="/assets/Footer/Vector (2).png" className="w-6 h-6" alt="Partners" />
                  <div>
                    <h4 className="text-base font-semibold text-brown-900 mb-1">Business partners</h4>
                    <p className="text-sm text-gray-800 m-0">
                      Shiv Kumar Singh (Managing Director)<br />
                      Contact: +91 9430055438<br />
                      <br />
                      Chandan Kumar Singh (Managing Director - Sales)<br />
                      Contact: +91 9431244623, +91 8709639243<br />
                      <br />
                      Kundan Kumar Singh (Managing Director - Production)<br />
                      Contact: +91 7295959698, +91 9431264105
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-brown-900 text-white py-2 text-sm">
        Copyright © 2024 All Rights Reserved by Shiv Shakti Hatcheries
      </div>
    </footer>
  );
};

export default Footer;
