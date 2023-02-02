import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import Contact from "./Contact";

const Portfolio = () => {
    return ( 
        <div className=" bg-gray-800 antialiased">
            <Navbar />
            {/* <hr className="gray-700 h-0 "></hr> */}
            <Hero />
            <About />
            {/* <Hero />
           
            <Skills />
            <Projects />
            <Contact />
            <Footer /> */}
        </div>
     );
}
 
export default Portfolio;