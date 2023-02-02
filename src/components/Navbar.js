const Navbar = () => {
    return ( 
     <header>
      <nav className=" py-4  md:py-3 px-4   bg-gray-900 border border-gray-800 border-t-0 border-r-0 border-l-0 shadow-md text-white ">
        <div className="container relative  flex flex-wrap items-center justify-between mt-1">
          <a href="#hh"  className=" ml-3 text-2xl  font-bold  text-teal-500  sm:left-2 sm:text-2xl sm:uppercase">Abdishukri</a>
          <ul className=" hidden text-base sm:flex sm:items-center">
            <li>
              <a href="#hh" className=" py-2 block md:p-2   hover:underline ">About</a>
            </li>
            <a href="#hh" className=" px-4 py-2  hover:underline ">Skills</a>
            <a href="#hh" className=" px-4 py-2  hover:underline ">Project</a>
            <a href="#hh" className=" px-4 py-2  hover:underline ">Contact</a>
            <a href="#hh" className=" px-4 py-2  bg-teal-800  rounded-md hover:bg-teal-700 ">call me</a>
            <a href="#hh" className=" px-4 py-2  hover:underline "></a>
          </ul>
          <h2 class="h-6 w-6 mr-8 cursor-pointer sm:hidden block">menu </h2>
        </div>
      </nav>
    </header>   
     );
}
 
export default Navbar;