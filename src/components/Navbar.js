import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    zIndex: 50,
    backgroundColor: "white",
    width: "100%",
    /* Add other styles as needed */
  };

  return (
    <header>
     <nav style={navbarStyle} className="shadow-xl md:border-gray-800 md:border- md:border-t-0 md:border-r-0 md:border-l-0 bg-white">
        <div className="justify-between px-4 py-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 md:block">
              <a href="">
                <h2 className="text-xl text-black font-bold">
                  Abdishukri Mohamed
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-purple-600 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
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
              <ul className="items-center uppercase font-semibold justify-center text-black space-y-8 md:flex md:space-x-16 md:space-y-0">
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
                {/* <li className="border px-4 py-2 text-purple-600 font-bold rounded-2xl border-purple-600 border-spacing-4 ">
                                <a href="" className="text-xl">connect</a>
                            </li>  */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
