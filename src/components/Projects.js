import loops from "../images/loopstudios.jpg"
import ecommerce from "../images/e-commerce-screenshot.png"
import advice from "../images/active-states.jpg"
import desktop from "../images/desktop-preview.jpg"
import shukri from "../images/shukri.jpg"
import call from "../images/call.jpg"
const Projects = () => {
    return ( 
        <section>
        <div className="  ">
            <h1 className="text-3xl text-orange-500 text-center underline ">Projects</h1>

            <div className="  mr-8 ml-8 mt-12  ">

                  <div className="lg:flex lg:justify-center gap-4  rounded-xl pb-20 md:pt-10">
                        <div className="   object-cover basis-2/5 rounded-lg p-3">
                                <img src={loops} alt="" className="    rounded-2xl hover:cursor-pointer "/>    
                        </div>
                        <div className="  rounded-2xl relative h-full  basis-2/5   p-3">
                            <h2 className="text-orange-400 prose text-2xl p-1  font-bold  hover:underline hover:cursor-pointer hover:text-orange-300">Loopstudios Landing Page</h2>
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
               
                 <div className="sm:flex sm:justify-center   rounded-xl mt-8 pb-20 pt-10">
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
                            <div className="flex ">
                                <a href="https://github.com/abdishukri-105/e-commerce-product-page-" target="_blank" className="p-2 bg-orange-500 rounded-lg mr-4 shadow-2xl hover:bg-orange-400">view code </a>
                                <a href="https://e-commerce-product-page-mu.vercel.app/" target="_blank" className="p-2 bg-orange-500 rounded-lg   shadow-2xl hover:bg-orange-400">live link </a>
                            </div>
                       </div>
                       <div className="  relative   basis-2/5 rounded-lg p-3">
                                <img src={ecommerce} alt="" className=" p-2   h-full  rounded-2xl hover:cursor-pointer "/>    
                        </div>
                 </div>

                 <div className="sm:flex sm:justify-center  rounded-xl mt-8 gap-4 pb-20 pt-10">
                        <div className="  relative  object-cover basis-2/5 rounded-lg p-3">
                                <img src={advice} alt="" className=" p-2 h-full  rounded-2xl hover:cursor-pointer "/>    
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
                            <p className="text-orange-200  p-4"> 
                                <span className="shadow-lg rounded-xl mr-3  hover:text-orange-300">#HTML</span>
                                <span className="shadow-lg rounded-xl mr-3 ">#CSS</span>
                                <span className="shadow-lg rounded-xl mr-3 ">#JS</span>
                             </p> 
                            <div className="flex ">
                                <a href="https://github.com/abdishukri-105/advice-generator-app" target="_blank" className="p-2 bg-orange-500 rounded-lg mr-4 shadow-2xl hover:bg-orange-400">view code </a>
                                <a href="https://advice-generator-app-mauve-nine.vercel.app/" target="_blank" className="p-2 bg-orange-500 rounded-lg   shadow-2xl hover:bg-orange-400">live link </a>
                            </div>
                       </div>
                 </div>

                 <div className="sm:flex sm:justify-center gap-4  mt-8 rounded-xl pb-10 pt-10">
                     
                       <div className="  rounded-2xl relative h-full  basis-2/5   p-3">
                       <h2 className="text-orange-400 prose text-2xl p-1  font-bold  hover:underline hover:cursor-pointer ">interactive credit card</h2>
                            <p className=" text-white prose "> 
                               This project was a credit card application built using React and TailwindCSS. I used states and took a mobile-first approach with Tailwind, which was a lot of fun. This project allowed me to deepen my understanding of React forms and state management. I learned a lot and I am now more confident in my ability to implement these skills in future projects. This project was also from Frontend Mentor, providing a challenging but rewarding experience.
                            </p>
                            <p className="text-orange-200  p-4"> 
                                <span className="shadow-lg rounded-xl mr-3  hover:text-orange-300">#HTML</span>
                                <span className="shadow-lg rounded-xl mr-3 ">#CSS</span>
                                <span className="shadow-lg rounded-xl mr-3 ">#JS</span>
                             </p> 
                            <div className="flex ">
                                <a href="https://github.com/abdishukri-105/interactive-card" target="_blank" className="p-2 bg-orange-500 rounded-lg mr-4 shadow-2xl hover:bg-orange-400">view code </a>
                                <a href="https://interactive-card-liard.vercel.app/" target="_blank" className="p-2 bg-orange-500 rounded-lg   shadow-2xl hover:bg-orange-400">live link </a>
                            </div>
                       </div>
                       <div className="   object-cover basis-2/5 rounded-lg p-3">
                                <img src={desktop} alt="" className=" p-2    rounded-2xl hover:cursor-pointer "/>    
                        </div>
                 </div>  
            </div>
            <div className="flex justify-center  items-center">
                <div className=" justify-center bg-gray-800 sm:w-1/3 w-2/3 p-4 sm:py-4 border border-gray-700 rounded-xl flex items-center ">
                <a href="https://github.com/abdishukri-105?tab=repositories" target="_blank" className="   sm:w-32 sm:p-y-1 p-3  bg-orange-500 rounded-xl shadow-xl text-center hover:bg-orange-600 hover:cursor-pointer ">see more </a>
                </div>
            </div>
           
            {/* <div className="flex justify-center mt-20 items-center ">
                <div class=" bg-gray-800 border flex border-gray-700 p-4 mt-20 w-3/4  rounded-xl shadow-lg">
                    <div className="rounded-lg sm:ml-12  w-40"> 
                        <img src={call} alt="telephone" className="object-cover rounded-lg  "/>
                    </div>
                    <div class="  text-white text-center">
                        <h1 class="text-3xl mb-5 font-medium">Get in Touch</h1>
                        <p class="text-lg mb-9">Looking to collaborate on a project or hire me for a gig? Let's make it happen!</p>
                        <a href="#" class="btn bg-orange-500 hover:bg-orange-600 mt-10 font-medium py-2 px-4 rounded-xl">Contact Me</a>
                    </div>
                </div>
            </div> */}

        </div>
        
    </section>
     );
}
 
export default Projects;