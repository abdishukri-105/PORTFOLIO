const Skills = () => {
    return ( 
        <div className="mb-20">
            {/* <h1 className="text-teal-500 text-3xl text-center underline"> Skills</h1> */}
              <h1 className="text-white text-3xl text-center mt-8">Technologies i have worked with</h1>
            <div className="sm:grid  sm:grid-cols-4 grid gap-3 grid-cols-2  sm:gap-4   wrap mt-10 border border-gray-700 rounded-xl ml-6 mr-6 md:ml-40 md:mr-40 shadow-lg p-4">
                <div className="text-white p-3 grid justify-center text-5xl shadow-xl  bg-gray-800  rounded-xl transition ease-in-out delay-600 duration-300 hover:-translate-y-1 hover:scale-110  ">
                   <ion-icon name="logo-html5" className=""></ion-icon>
                   <p className="text-xl text-center"> expert</p>
                </div>
                <div  className="text-white grid justify-center  text-5xl p-3 shadow-xl  bg-gray-800  rounded-xl transition ease-in-out delay-600 duration-300 hover:-translate-y-1 hover:scale-110">
                  <ion-icon name="logo-css3" className="text-center"></ion-icon>
                  <p className="text-xl text-center"> expert</p>
                </div>
                <div  className="text-white grid justify-center text-5xl p-3 shadow-xl  bg-gray-800  rounded-xl transition ease-in-out delay-600 duration-300 hover:-translate-y-1 hover:scale-110">
                    <ion-icon name="logo-github"></ion-icon> 
                   <p className="text-xl text-center"> expert</p>
                </div>
                <div  className="text-yellow-500 grid justify-center text-5xl p-3 shadow-xl  bg-gray-800  rounded-xl transition ease-in-out delay-600 duration-300 hover:-translate-y-1 hover:scale-110">
                   <ion-icon name="logo-javascript" className="shadow-lg rounded-lg"></ion-icon>
                   <p className="text-xl text-center"> expert</p>
                </div>
                <div  className="text-sky-500  justify-center text-5xl grid  p-3 shadow-xl  bg-gray-800  rounded-xl transition ease-in-out delay-600 duration-300 hover:-translate-y-1 hover:scale-110 ">
                   <ion-icon name="logo-react"></ion-icon>
                   <p className="text-xl "> intermediate</p>
                </div>
                <div  className="text-yellow-500 grid justify-center text-5xl p-3 shadow-xl  bg-gray-800  rounded-xl transition ease-in-out delay-600 duration-300 hover:-translate-y-1 hover:scale-110">
                   <ion-icon name="logo-react"></ion-icon>
                   <p className="text-xl "> intermediate</p>
                </div>
                <div  className="text-yellow-500 grid justify-center text-5xl p-3 shadow-xl  bg-gray-800  rounded-xl transition ease-in-out delay-600 duration-300 hover:-translate-y-1 hover:scale-110">
                   <ion-icon name="logo-react"></ion-icon>
                   <p className="text-xl "> intermediate</p>
                </div>
                <div  className="text-yellow-500 grid justify-center text-5xl p-3 shadow-xl  bg-gray-800  rounded-xl transition ease-in-out delay-600 duration-300 hover:-translate-y-1 hover:scale-110">
                   <ion-icon name="logo-react"></ion-icon>
                   <p className="text-xl "> intermediate</p>
                </div>
               
               
            </div>
          
         </div> 
        
     );
}
 
export default Skills;