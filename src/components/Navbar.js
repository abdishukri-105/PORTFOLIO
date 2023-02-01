const Navbar = () => {
    return ( 
        <nav className="bg-black text-white p-6 sm:p-3">
        <div className="container relative  flex items-center justify-center mt-1">
          <a href="#hh"  className="  text-2xl absolute  font-bold text-red-700 sm:text-white sm:left-2 sm:text-2xl sm:uppercase">Abdishukri</a>
          <div className=" hidden  sm:flex sm:items-center">
            <a href="#hh" className="  px-4 py-2   hover:underline hover:text-red-600 ">About</a>
            <a href="#hh" className=" px-4 py-2  hover:underline hover:text-red-600">Skills</a>
            <a href="#hh" className=" px-4 py-2  hover:underline hover:text-red-600">Project</a>
            <a href="#hh" className=" px-4 py-2  hover:underline hover:text-red-600">Contact</a>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;