import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navHandler = () => {
    setNavbar(!navbar);
  };

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const closeNavbar = () => {
    setNavbar(false);
    setDropdown(false);
  };

  return (
    <div className="nav-container pb-12">
      <div className="fixed left-0 top-0 w-full z-10 shadow-md bg-brown-900">
        <div className="max-w-full m-auto flex justify-between items-center px-4 py-2 text-white">
          {/* logo */}
          <a className="text-2xl font-semibold ml-2" href="/">
            SHIV SHAKTI <br />
            HATCHERIES
          </a>
          <ul className="hidden sm:flex text-white">
            <li className="pb-4 pt-4 pr-8 hover:text-white hover:underline duration-200 text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="pb-4 pt-4 pr-8 hover:text-white hover:underline duration-200 text-lg">
              <a href="#about">About Us</a>
            </li>
            <li className="nav-link pb-4 pt-4 pr-7 hover:text-white hover:underline duration-200 relative text-lg">
              <div className="flex items-center cursor-pointer" onClick={dropdownHandler}>
                Companies <FaAngleDown className="ml-1 text-white" />
              </div>
              {dropdown && (
                <div className="dropdown">
                  <ul className="leading-5">
                    <li className="dropdown-link">
                      <Link to="/om-shiv-farms" onClick={closeNavbar}>OM SHIV FARMS</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/shiv-anita-farms" onClick={closeNavbar}>SHIVANITA FARMS</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/shiv-shakti-enterprises" onClick={closeNavbar}>SHIV SHAKTI ENTERPRISES</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/shiv-shakti-feed-mills" onClick={closeNavbar}>SHIV SHAKTI FEED MILLS</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="pb-4 pt-4 pr-2 hover:text-white hover:underline duration-200 text-lg">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={navHandler} className="block sm:hidden z-10">
            {navbar ? (
              <AiOutlineClose size={20} className="text-white" />
            ) : (
              <AiOutlineMenu size={20} className="text-white" />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              navbar
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex pt-14 pl-6 w-full h-screen bg-brown-900 text-white ease-in duration-200"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex pt-14 pl-6 w-full h-screen bg-brown-900 text-white ease-in duration-200"
            }
          >
            <ul>
              <li
                onClick={navHandler}
                className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-white hover:underline"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={navHandler}
                className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-white hover:underline"
              >
                <a href="#about">About Us</a>
              </li>
              <li
                onClick={dropdownHandler}
                className="pl-0 pr-4 pt-3 pb-3 text-2xl flex hover:text-white hover:underline"
              >
                Companies <FaAngleDown className="ml-1 pt-2 text-white" />
                {dropdown && (
                  <ul className="dropdown-mobile">
                    <li className="dropdown-link" onClick={closeNavbar}>
                      <Link to="/om-shiv-farms">OM SHIV FARMS</Link>
                    </li>
                    <li className="dropdown-link" onClick={closeNavbar}>
                      <Link to="/shiv-anita-farms">SHIVANITA FARMS</Link>
                    </li>
                    <li className="dropdown-link" onClick={closeNavbar}>
                      <Link to="/shiv-shakti-enterprises">SHIV SHAKTI ENTERPRISES</Link>
                    </li>
                    <li className="dropdown-link" onClick={closeNavbar}>
                      <Link to="/shiv-shakti-feed-mills">SHIV SHAKTI FEED MILLS</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onClick={navHandler}
                className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-white hover:underline"
              >
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
