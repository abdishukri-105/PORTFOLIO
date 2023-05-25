import React from "react";
import aboutImg from "../images/about-me-photo.jpg";
import shukri from "../images/shukri.jpg";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="mb-40">
      <h2 className="text-4xl tracking-widest font-black uppercase text-center  mb-5">
        About Me
      </h2>
       
       <p className="text-center text-lg mx-auto max-w-2xl mb-10">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
       
      <div className="flex justify-center items-center ">
        <div className="flex flex-col md:flex-row justify-between max-h-screen p-2 sm:p-8 md:p-12 lg:p-12 xl:p-12">
         
          <div className="text-black  md:ml-0 md:pt-0 md:leading-9 rounded-2xl xl:text-start md:text-start lg:text-start sm:text-start p-8 sm:p-5 md:w-1/2">
            <h1 className="font-black text-2xl mb-10 font-inherit">Get to know me!</h1>
          
           <p className="mb-3">I am a passionate <span className="font-bold">full-stack web developer </span> who thrives on continuous exploration 
            and learning. While I may not have extensive experience, I take pride in the projects 
            I have worked on and accomplished. Check out some of my work in the <span className="font-bold">Projects</span>  section. </p>  

            <p className="mb-3">Coding   holds a special place in my heart, and I find joy in the process of creating impactful
              websites and web applications. I would be delighted to connect with you on <span className="text-purple-800 underline font-bold"> <a href="https://www.linkedin.com/in/abdishukri-mohamed/" target="_blank"> LinkedIn  </a></span> , 
              where I share my journey, valuable insights, and the projects I am proud of.</p>   
              
             <p> I'm open to exciting <span className="font-bold">job  </span> opportunities that provide a platform for me to contribute, learn,
             and grow. If you have a promising opportunity that aligns with my skills and experience,
              I would be thrilled to hear from you. Please feel free to reach out and <span className="font-bold">contact  </span> me without hesitation.</p>        
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
          margin: 35px auto;
          border-radius: 2px;
        }
      `}</style>


    </section>
  );
};

export default About;
