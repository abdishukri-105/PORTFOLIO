import aboutImg from "../images/about-me-photo.jpg"

const About = () => {
    return ( 
        <div className="bg-gray-800   ">
          
            <h1 className="text-white text-3xl text-center pt-10 underline">About Me</h1>
            
            <div className="sm:flex justify-around   sm:mt-10">
            <div className="rounded-lg   mt-5 sm:ml-12 "> 
                <img src={aboutImg} alt="" className="object-cover ml-12 w-3/4 h-3/4 sm:w-full rounded-2xl "/>
            </div>
            <p className="text-gray-100 prose  h-2/3 sm:mr-16 sm:ml-16 md:pt-10 sm:leading-9 rounded-2xl    sm:text-justify p-8 sm:p-5 "  >
                I'm a full-stack software developer from Nairobi, Kenya, with a Bachelor's 
                degree in Information Technology from Jomo Kenyatta University of Agriculture and 
                Technology. Driven by my passion for technology and a desire to create 
                innovative solutions, I have 2 years of experience in web
                 development. My expertise spans across various technologies, including
                  HTML, CSS, BOOTSTRAP, TAILWINDCSS, JAVASCRIPT and REACTJS . My goal is to continue 
                  to expand my skills and contribute to projects that make a positive impact.
                   Let's work together to bring your ideas to life."
            </p>
            </div>
        </div>
     );
}
 
export default About;