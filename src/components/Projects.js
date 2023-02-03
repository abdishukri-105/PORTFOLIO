import loops from "../images/loopstudios.jpg"
import ecommerce from "../images/e-commerce-screenshot.png"
import advice from "../images/active-states.jpg"
import desktop from "../images/desktop-preview.jpg"

const Projects = () => {
    return ( 
        <div className="  ">
            <h1 className="text-3xl text-teal-500 text-center underline ">Projects</h1>

            <div className="sm:pl-24 sm:pr-24 sm:pt-12  ">

                  <div className="sm:flex sm:justify-center gap-4  bg-gray-800 rounded-xl pb-20 pt-10">
                        <div className="   object-cover basis-2/5 rounded-lg p-3">
                                <img src={loops} alt="" className="    rounded-2xl hover:cursor-pointer transition duration-300 delay-100 hover:ease-in-out hover:scale-110"/>    
                        </div>
                        <div className="  rounded-2xl relative h-full  basis-2/5   p-3">
                            <h2 className="text-orange-400 prose text-2xl p-1  font-bold  hover:underline hover:cursor-pointer hover:text-teal-300">Loopstudios Landing Page</h2>
                            <p className=" text-white prose ">
                            I built the landing page for Loopstudios using the powerful 
                            combination of TailwindCSS and ReactJS. I was able to improve 
                            my front-end skills by utilizing Tailwind's grid and flex box 
                            system, as well as utilizing various React components. The project 
                            was a challenge from Frontend Mentor, but I learned a lot and loved 
                            the design outcome. This project allowed me to expand my knowledge
                             in these technologies and I am confident in my abilities to apply
                              these skills to future projects.
                                
                             </p>
                            <p className="text-orange-200 p-4"> 
                                <span className="shadow-lg rounded-xl mr-2 hover:text-orange-300">#REACTJS</span>
                                <span className="shadow-lg rounded-xl hover:text-orange-300 ">#TAILWIND CSS</span>
                             </p> 
                            <div className="flex ">
                                <a href="https://github.com/abdishukri-105/loopstudios-landing-page" className="p-2  bg-orange-500 rounded-lg mr-4 shadow-2xl hover:bg-orange-400" target="_blank"> view code </a>
                                <a href="https://loopstudios-landing-page-ivory.vercel.app/" target="_blank" className="p-2 bg-orange-500 rounded-lg   shadow-2xl hover:bg-orange-400">live link </a>
                            </div>
                        </div>
                 </div>
               
                 <div className="sm:flex sm:justify-center  bg-gray-800 rounded-xl mt-8 pb-20 pt-10">
                       <div className="  rounded-2xl relative h-full basis-2/5 p-3">
                       <h2 className="text-orange-400 prose text-2xl p-1  font-bold  hover:underline hover:cursor-pointer ">e-commerce product page</h2>
                            <p className=" text-white prose "> 
                            an e-commerce page i built with just HTML, CSS, and JavaScript.
                             The project included key functionalities such as adding items to
                              the cart and implementing modals, allowing me to sharpen my JavaScript
                               skills.  This project allowed me to solidify my understanding
                                 of JavaScript and gave me the confidence to continue learning and growing 
                                 as a developer.
                            </p>
                            <p className="text-orange-200  p-4"> 
                                <span className="shadow-lg rounded-xl mr-3  hover:text-orange-300">#HTML</span>
                                <span className="shadow-lg rounded-xl mr-3 ">#CSS</span>
                                <span className="shadow-lg rounded-xl mr-3 ">#JS</span>
                             </p> 
                            <div className="flex relative justify-between ">
                                <a href="" target="_blank" className="p-2 bg-orange-500 rounded-lg absolute right-2 shadow-2xl hover:bg-orange-400">view code </a>
                                <a href="" target="_blank" className="p-2 bg-orange-500 rounded-lg  absolute left-2 shadow-2xl hover:bg-orange-400">live link </a>
                            </div>
                       </div>
                       <div className="  relative   basis-2/5 rounded-lg p-3">
                                <img src={ecommerce} alt="" className=" p-2   h-full  rounded-2xl hover:cursor-pointer transition duration-300 delay-100 hover:ease-in-out hover:scale-110"/>    
                        </div>
                 </div>

                 <div className="sm:flex sm:justify-center bg-gray-800 rounded-xl mt-8 gap-4 pb-20 pt-10">
                        <div className="  relative  object-cover basis-2/5 rounded-lg p-3">
                                <img src={advice} alt="" className=" p-2 h-full  rounded-2xl hover:cursor-pointer transition duration-300 delay-100 hover:ease-in-out hover:scale-110"/>    
                        </div>
                       <div className="  rounded-2xl relative h-full  basis-2/5   p-3">
                       <h2 className="text-orange-400 prose text-2xl p-1  font-bold  hover:underline hover:cursor-pointer ">Advice generator app</h2>
                            <p className=" text-white prose ">
                               
                               This project 
                               allowed me to practice CRUD operations in 
                               JavaScript while using HTML and CSS to build 
                               the front-end. I took a mobile-first approach
                                for the first time as a developer, which was 
                                a fun challenge. This project was a great opportunity
                                 for me to improve my skills and deepen my understanding 
                                 of how to use JavaScript to interact with APIs. I'm proud
                                of the end result and I am confident that I can continue 
                                to build more complex applications in the future."
                            </p>
                            <p className="text-yellow-500 p-4"> 
                                <span className="shadow-lg rounded-xl  hover:text-yellow-300">#REACTJS</span>
                                <span className="shadow-lg rounded-xl ">#TAILWIND CSS</span>
                             </p> 
                            <div className="flex relative justify-between ">
                                <button className="p-2 bg-teal-500 rounded-lg absolute right-2 shadow-2xl hover:bg-teal-300">view code </button>
                                <button className="p-2 bg-teal-500 rounded-lg  absolute left-2 shadow-2xl hover:bg-teal-300">live link </button>
                            </div>
                       </div>
                 </div>

                 <div className="sm:flex sm:justify-center gap-4 bg-gray-800 mt-8 rounded-xl pb-20 pt-10">
                     
                       <div className="  rounded-2xl relative h-full  basis-2/5   p-3">
                            <h2 className="text-teal-500 p-1  font-bold  hover:underline hover:cursor-pointer hover:text-teal-300">Loopstudios Landing Page</h2>
                            <p className=" text-white prose "> 
                               This project was a credit card application built using React and TailwindCSS. I used states and took a mobile-first approach with Tailwind, which was a lot of fun. This project allowed me to deepen my understanding of React forms and state management. I learned a lot and I am now more confident in my ability to implement these skills in future projects. This project was also from Frontend Mentor, providing a challenging but rewarding experience.
                            </p>
                            <p className="text-yellow-500 p-4"> 
                                <span className="shadow-lg rounded-xl  hover:text-yellow-300">#REACTJS</span>
                                <span className="shadow-lg rounded-xl ">#TAILWIND CSS</span>
                             </p> 
                            <div className="flex relative justify-between ">
                                <button className="p-2 bg-teal-500 rounded-lg absolute right-2 shadow-2xl hover:bg-teal-300">view code </button>
                                <button className="p-2 bg-teal-500 rounded-lg  absolute left-2 shadow-2xl hover:bg-teal-300">live link </button>
                            </div>
                       </div>
                       <div className="   object-cover basis-2/5 rounded-lg p-3">
                                <img src={desktop} alt="" className=" p-2    rounded-2xl hover:cursor-pointer transition duration-300 delay-100 hover:ease-in-out hover:scale-110"/>    
                        </div>
                 </div>

                 <h1 className=" text-6xl p-2 bg-teal-500 rounded-xl w-1/3 text-center flex justify-center m-5">see more</h1>

         

          
               
             
                
            </div>
        </div>
     );
}
 
export default Projects;