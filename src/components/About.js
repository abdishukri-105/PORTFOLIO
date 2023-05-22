import aboutImg from "../images/about-me-photo.jpg"
import shukri from "../images/shukri.jpg"
const About = () => {
    return ( 
        <div className="h-screen   bg-gray-100  ">
          
            <div className="flex justify-between text-center max-h-screen  p-2 sm:p-8 md:p-12 lg:p-12 xl:p-12 md:pt-10">
            
            <div className="text-black prose   sm:mr-16 sm:ml-16 md:pt-10  sm:leading-9 rounded-2xl  xl:text-center md:text-center lg:text-center  sm:text-center p-8 sm:p-5 "  >
                
                A distinguished graduate of JKUAT with a BScIT degree and a software engineering 
                alumnus of Moringa School, driven by a passion for technology and coding. 
                With a keen eye for elegant design, I have worked on numerous captivating projects 
                at Moringa School. Currently pursuing AWS cloud computing studies at ALX, I'm eager 
                to collaborate and bring visionary ideas to life.
            </div>
            <div>
                skills
            </div>
            </div>
        </div>
     );
}
 
export default About;