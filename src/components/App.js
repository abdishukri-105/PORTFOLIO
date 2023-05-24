import React, { useRef } from 'react';
import '../App.css';
import Portfolio from './Portfolio';
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";

import Footer from "./Footer";
import Form from "./Form";
import { Routes,Route , Router} from "react-router-dom";

function App() {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const formRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (


    <div className="bg-gray-100 antialiased">
      <Navbar scrollToRef={scrollToRef} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Form ref={formRef} />
      <Footer />
    </div>


      // <div className=" bg-gray-100 antialiased">
            
      //        <Navbar  />
      //        <Hero />
      //        <About />
      //        <Projects  />
      //        <Form/>
      //        <Footer /> 
           

      //   </div>
     
  );
}

export default App;
