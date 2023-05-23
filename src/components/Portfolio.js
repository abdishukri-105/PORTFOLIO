import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";

import Footer from "./Footer";
import Form from "./Form";


const Portfolio = () => {
    return ( 
        <div className=" bg-gray-100 antialiased">
            
            <Navbar  />
            {/* <hr className="gray-700 h-0 "></hr> */}
             <Hero />
             <About />
             <Projects  />
             <Form/>
           
           {/*  
          <div className="bg-gray-100"> 
           
            </div>
          
            <Footer />  */}
        </div>
     );
}
 
export default Portfolio;