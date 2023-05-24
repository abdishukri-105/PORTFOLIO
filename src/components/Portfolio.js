import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";

import Footer from "./Footer";
import Form from "./Form";
import { Routes,Route , Router} from "react-router-dom";


const Portfolio = () => {
    return ( 

    <Router>
      <Routes>
        <Route exact path="/" element={Hero} />
        <Route exact path="/projects" element={Projects} />
      </Routes>
    </Router>

        // <div className=" bg-gray-100 antialiased">
            
        //      <Navbar  />
        //      <Hero />
        //      <About />
        //      <Projects  />
        //      <Form/>
        //      <Footer /> 
           

        // </div>
     );
}
 
export default Portfolio;