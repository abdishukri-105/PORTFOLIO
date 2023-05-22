import React from "react";
// import herImage from "../images/hero.jpg"
import herImage2 from "../images/hero2.jpg";
import shukri from "../images/shukri.jpg";
import shukri2 from "../images/shukri2.jpg";
import shukri3 from "../images/mf-avatar.svg";
import bg from "../images/bg.jpg";
import Contact from "./Contact";

const Hero = () => {
  
  return (
    <div className="bg-gray-100 h-screen flex">
      <div className="flex-shrink-0 w-1/8 mt-40 hidden lg:block">
        <Contact />
      </div>
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="text-black w-full p-5 mb-7">
          <h1 className="font-sans tracking-widest font-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
            HEY, I'M Abdishukri Mohamed
          </h1>
          <p className="lg:ml-44 text-center prose sm:text-xl ">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <button className="bg-purple-800 shadow-lg px-10 py-3 rounded-md text-lg font-bold text-white uppercase tracking-widest">Projects</button>
        {/* <div className="flex justify-center items-center">
          <img
            src={shukri3}
            alt=""
            className="h-40 w-40 md:h-48 md:w-48 rounded-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
