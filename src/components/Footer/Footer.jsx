// src/components/Footer.jsx
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white font-calistoga box-border">
      <div className="flex flex-col md:flex-row justify-between py-5 px-5 md:px-10 w-full">
        <div className="flex-1 p-5 md:p-12">
          <h2 className="text-2xl font-bold text-brown-900 mb-2">SHIV SHAKTI HATCHERIES</h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima similique cumque esse quam quae hic ratione assumenda laboriosam suscipit modi fugiat voluptates, eveniet beatae voluptatem excepturi ullam fugit magni explicabo ad vel molestias velit amet? Aut modi praesentium aperiam perferendis?
          </p>
        </div>
        <div className="flex-2 p-5 md:p-12">
          <h3 className="text-xl font-semibold text-brown-900 mb-2 text-center md:text-centre">Need Help? Contact Our Team</h3>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 ml-0 md:ml-7">
              <div className="flex flex-col gap-5 mt-2">
                <div className="flex items-center gap-2 p-1">
                  <img src="/assets/Footer/Vector (3).png" className="w-6 h-6" alt="Location" />
                  <div>
                    <h4 className="text-base font-semibold text-brown-900 mb-1">Location</h4>
                    <p className="text-sm text-gray-800 m-0">
                      Lorem ipsum dolor sit amet consectetur. <br />
                      Scelerisque arcu eu velit scelerisque in.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1">
                  <img src="/assets/Footer/Vector (1).png" className="w-6 h-6" alt="Contact" />
                  <div>
                    <h4 className="text-base font-semibold text-brown-900 mb-1">Contact us</h4>
                    <p className="text-sm text-gray-800 m-0">
                    Shiv kumar singh-(+91): 9430055438 <br />
                    Chandan kumar singh-(+91):9431244623, 8709639243 <br />
                    Kundan kumar singh-(+91):7295959698, 9431264105
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 ml-0 md:ml-7">
              <div className="flex flex-col gap-5 mt-2">
                <div className="flex items-center gap-2 p-1">
                  <img src="/assets/Footer/Vector (2).png" className="w-6 h-6" alt="Partners" />
                  <div>
                    <h4 className="text-base font-semibold text-brown-900 mb-1">Business partners</h4>
                    <p className="text-sm text-gray-800 m-0">
                      Shiv kumar singh ( Managing director)
                       <br />
                      Chandan kumar singh
                      (Managing director- Sales)
                       <br />
                      Kundan kumar singh
                      (Managing director- production)
                     
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1">
                  <img src="/assets/Footer/Vector (5).png" className="w-6 h-6" alt="Mail" />
                  <div>
                    <h4 className="text-base font-semibold text-brown-900 mb-1">Mail us</h4>
                    <p className="text-sm text-gray-800 m-0">shivshakti.hatcheries@gmail.com</p>
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
