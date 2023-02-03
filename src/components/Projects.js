import loops from "../images/loopstudios.jpg"
import ecommerce from "../images/e-commerce-screenshot.png"
import advice from "../images/active-states.jpg"

const Projects = () => {
    return ( 
        <div className="">
            <h1 className="text-3xl text-teal-500 text-center underline ">Projects</h1>
            <div className="pl-24 pr-24 pt-12    ">
                  <div className="sm:flex sm:justify-center gap-4 shadow-2xl mb-10">
                        <div className="  relative shadow-2xl object-cover basis-2/5 rounded-lg p-3">
                                <img src={loops} alt="" className=" p-2  border  rounded-2xl hover:cursor-pointer transition duration-300 delay-100 hover:ease-in-out hover:scale-110"/>    
                        </div>
                       <div className="  rounded-2xl relative h-full  basis-2/5 pt-10  p-3">
                            <h2 className="text-teal-500 p-1  font-bold  hover:underline hover:cursor-pointer hover:text-teal-300">Loopstudios Landing Page</h2>
                            <p className=" text-white prose "> landing page of loopstudios a challenge from frontend mentor  landing page of loopstudios a challenge from frontend mentor Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum libero neque beatae ad harum. Ut doloribus quia quisquam necessitatibus..</p>
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
               
                 <div className="sm:flex sm:justify-center gap-4 mb-20">
                       
                       <div className="  rounded-2xl relative h-full  basis-2/5 pt-10  p-3">
                            <h2 className="text-teal-500 p-1  font-bold  hover:underline hover:cursor-pointer hover:text-teal-300">Loopstudios Landing Page</h2>
                            <p className=" text-white prose "> landing page of loopstudios a challenge from frontend mentor  landing page of loopstudios a challenge from frontend mentor Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum libero neque beatae ad harum. Ut doloribus quia quisquam necessitatibus..</p>
                            <p className="text-yellow-500 p-4"> 
                                <span className="shadow-lg rounded-xl  hover:text-yellow-300">#REACTJS</span>
                                <span className="shadow-lg rounded-xl ">#TAILWIND CSS</span>
                             </p> 
                            <div className="flex relative justify-between ">
                                <button className="p-2 bg-teal-500 rounded-lg absolute right-2 shadow-2xl hover:bg-teal-300">view code </button>
                                <button className="p-2 bg-teal-500 rounded-lg  absolute left-2 shadow-2xl hover:bg-teal-300">live link </button>
                            </div>
                       </div>
                       <div className="  relative shadow-2xl  basis-2/5 rounded-lg p-3">
                                <img src={ecommerce} alt="" className=" p-2 mt-16 border h-full  rounded-2xl hover:cursor-pointer transition duration-300 delay-100 hover:ease-in-out hover:scale-110"/>    
                        </div>
                 </div>

                 <div className="sm:flex sm:justify-center gap-4">
                        <div className="  relative shadow-2xl object-cover basis-2/5 rounded-lg p-3">
                                <img src={advice} alt="" className=" p-2  border  rounded-2xl hover:cursor-pointer transition duration-300 delay-100 hover:ease-in-out hover:scale-110"/>    
                        </div>
                       <div className="  rounded-2xl relative h-full  basis-2/5 pt-10  p-3">
                            <h2 className="text-teal-500 p-1  font-bold  hover:underline hover:cursor-pointer hover:text-teal-300">Loopstudios Landing Page</h2>
                            <p className=" text-white prose "> landing page of loopstudios a challenge from frontend mentor  landing page of loopstudios a challenge from frontend mentor Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum libero neque beatae ad harum. Ut doloribus quia quisquam necessitatibus..</p>
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
               
             
                
            </div>
        </div>
     );
}
 
export default Projects;