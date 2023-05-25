import React, { useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import Portfolio from './Portfolio';
import About from './About';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import Footer from './Footer';
import Form from './Form';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const formRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (

      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Navbar
          scrollToRef={scrollToRef}
          heroRef={heroRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          formRef={formRef}
          toggleDarkMode={toggleDarkMode}
        />
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Form ref={formRef} />
        <Footer />
      </div>

  );
}

export default App;
