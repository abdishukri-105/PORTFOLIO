
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
  return (

    // <>
    // <Navbar />
    //   <Routes>
    //     <Route exact path="/" element={<Hero/>} />
    //     <Route exact path="/skills" element={ <About />} />
    //     <Route exact path="/projects" element={<Projects/>} />
    //     <Route exact path="/contact" element={ <Form/>} />
       
    //   </Routes>
    //   </>
      <div className=" bg-gray-100 antialiased">
            
             <Navbar  />
             <Hero />
             <About />
             <Projects  />
             <Form/>
             <Footer /> 
           

        </div>
     
  );
}

export default App;
