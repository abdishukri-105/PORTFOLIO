import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  
const [navbar, setNavbar] = useState(false);

  const navbarClasses = `fixed top-0 z-50 w-full ${
    darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-black"
  }`;

  return (
    <header>
      <nav className={`${navbarClasses} shadow-xl md:border-gray-800 md:border- md:border-t-0 md:border-r-0 md:border-l-0`}>
        <div className="justify-between px-4 py-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 md:block">
              <a href="">
                <h3 className="text-xl dark:text-white text-black font-bold">
                  Abdishukri Mohamed
                </h3>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-purple-600 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                   <FontAwesomeIcon icon={faBars} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center uppercase font-semibold justify-center text-black dark:text-white space-y-8 md:flex md:space-x-16 md:space-y-0">
                <li className="hover:text-purple-500">
                  <a href="">Home</a>
                </li>
                <li className="hover:text-purple-500">
                  <a href="">About</a>
                </li>
                <li className="hover:text-purple-500">
                  <a href="">project</a>
                </li>
                <li className="hover:text-purple-500">
                  <a href="">contact</a>
                </li>
                <li onClick={toggleDarkMode} className="hover:text-purple-">
                  {darkMode ? (
                    <FontAwesomeIcon icon={faMoon} className="w-6 h-6" />
                  ) : (
                    <FontAwesomeIcon icon={faSun} className="w-6 h-6" />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
