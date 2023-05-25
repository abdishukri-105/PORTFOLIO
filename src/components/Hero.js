import React from "react";
import herImage2 from "../images/hero2.jpg";
import shukri from "../images/shukri.jpg";
import shukri2 from "../images/shukri2.jpg";
import shukri3 from "../images/mf-avatar.svg";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen flex lg:mb-40 ">
      <div className="flex-shrink-0 w-1/8 mt-64 hidden lg:block">
        <Contact />
      </div>
      <div className="flex flex-col justify-center items-center flex-grow mt-10 lg:mt-40">
        <div className="text-black  w-full p-5 mb-7">
          <h1 className="font-sans tracking-widest font-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
            <strong style={{ fontWeight: "bolder" }}>HEY, I'M Abdishukri Mohamed</strong>
          </h1>
          <p className="lg:ml-44 text-center prose sm:text-xl">
            A Full Stack Developer experienced in React and Rails. BScIT graduate and Moringa School alumni, currently studying AWS Cloud.
          </p>
        </div>
        <Link
          to="/projects"
          className="bg-purple-800 shadow-lg px-10 py-3 rounded-md text-lg font-bold text-white uppercase tracking-widest"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Hero;
