const Navbar = () => {
    return ( 
        <nav className="bg-gray-900 border border-gray-800 border-t-0 border-r-0 border-l-0 shadow-md text-white p-6 sm:p-3">
        <div className="container relative  flex items-center justify-between mt-1">
          <a href="#hh"  className="  text-2xl  font-bold text-red-700 sm:text-white sm:left-2 sm:text-2xl sm:uppercase">Abdishukri</a>
          <div className=" hidden  sm:flex sm:items-center">
            <a href="#hh" className="  px-4 py-2   hover:underline ">About</a>
            <a href="#hh" className=" px-4 py-2  hover:underline ">Skills</a>
            <a href="#hh" className=" px-4 py-2  hover:underline ">Project</a>
            <a href="#hh" className=" px-4 py-2  hover:underline ">Contact</a>
            <a href="#hh" className=" px-4 py-2  bg-teal-800  rounded-md hover:bg-teal-700 ">call me</a>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;