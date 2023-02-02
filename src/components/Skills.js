const Skills = () => {
    return ( 
        <div className="h-screen">
            <h1 className="text-teal-500 text-3xl text-center underline"> Skills</h1>
            <div className="md:flex md:justify-around  justify-center wrap mt-10 border border-gray-700 rounded-xl ml-2 mr-2 shadow-lg p-4">
                <div className="text-white p-3 md:text-9xl shadow-xl  bg-gray-800  rounded-xl  ">
                   <ion-icon name="logo-html5" className=""></ion-icon>
                   <p className="text-xl text-center"> expert</p>
                </div>
                <div  className="text-white md:text-9xl p-3 shadow-xl  bg-gray-800  rounded-xl ">
                  <ion-icon name="logo-css3"></ion-icon>
                  <p className="text-xl text-center"> expert</p>
                </div>
                <div  className="text-yellow-500 md:text-9xl p-3 shadow-xl  bg-gray-800  rounded-xl ">
                   <ion-icon name="logo-javascript" className="shadow-lg rounded-lg"></ion-icon>
                   <p className="text-xl text-center"> expert</p>
                </div>
                <div  className="text-yellow-500 md:text-9xl p-3 shadow-xl  bg-gray-800  rounded-xl ">
                   <ion-icon name="logo-javascript" className="shadow-lg rounded-lg"></ion-icon>
                   <p className="text-xl text-center"> expert</p>
                </div>
                <div  className="text-yellow-500 md:text-9xl   p-3 shadow-xl  bg-gray-800  rounded-xl ">
                   <ion-icon name="logo-javascript" className="shadow-lg rounded-lg"></ion-icon>
                   <p className="text-xl text-center"> intermediate</p>
                </div>
                <div  className="text-blue-400 md:text-9xl p-3 shadow-xl  bg-gray-800  rounded-xl">
                   <ion-icon name="logo-react"></ion-icon>
                   <p className="text-xl text-center hidden"> intermediate</p>
                </div>
                <div  className="text-blue-400 text-4xl md:text-9xl w-1/3 flex justify-center place-items-center p-3 shadow-xl  bg-gray-800  rounded-xl">
                   <ion-icon name="logo-react"></ion-icon>
                   <p className="text-xl text-center hidden"> intermediate</p>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;