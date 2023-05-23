import React from "react";
import aboutImg from "../images/about-me-photo.jpg";
import shukri from "../images/shukri.jpg";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="">
      <h2 className="text-4xl tracking-widest uppercase text-center font-extrabold mb-5">
        About Me
      </h2>
       
       <p className="text-center text-lg mx-auto max-w-2xl mb-10">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
       
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between max-h-screen p-2 sm:p-8 md:p-12 lg:p-12 xl:p-12">
         
          <div className="text-black  md:ml- md:pt- md:leading-9 rounded-2xl xl:text-start md:text-start lg:text-start sm:text-start p-8 sm:p-5 md:w-1/2">
            <h3 className="font-extrabold text-2xl mb-5">Get to know me!</h3>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web
              Development and Programming.
            </p>
           
          </div>
          <div className="md:w-1/2">
            <Skills />
          </div>
        </div>
      </div>

      <style jsx>{`
        h2::after {
          content: "";
          display: block;
          height: 5px;
          width: 3%;
          background-color: purple;
          margin: 40px auto;
          border-radius: 2px;
        }
      `}</style>


    </section>
  );
};

export default About;
