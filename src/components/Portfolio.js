import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";


const Portfolio = () => {
    return ( 
        <div className="  antialiased">
            
            <Navbar  />
            {/* <hr className="gray-700 h-0 "></hr> */}
             <Hero />
            
             <About />
            <div className="bg-gray-100"> 
              <Projects  />
            </div>
           
           
           {/*  
             <Skills />
          
            <Footer />  */}
        </div>
     );
}
 
export default Portfolio;