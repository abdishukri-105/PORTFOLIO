import { useState } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return ( 
     <header>
        <nav className="w-full bg-gray-800 md:border-gray-600 md:border-b-2 md:border-t-0 md:border-r-0 md:border-l-0">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-3 md:block">
                        <a href="">
                            <h2 className="text-2xl text-teal-500 italic font-bold">AM</h2>
                        </a>
                        <div className="md:hidden">
                            <button className="p-2 text-teal-500 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}     >
                                {navbar ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"  viewBox="0 0 20 20"  fill="currentColor" >
                                        <path fillRule="evenodd"  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"  clipRule="evenodd"  />
                                    </svg>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"  fill="none"  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}  >
                                        <path   strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"  />
                                    </svg>
                                  )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                      navbar ? "block" : "hidden"}`} >
                        <ul className="items-center justify-center text-white space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                            <li className="hover:text-teal-500  hover:underline">
                                <a href="">Home</a>
                            </li>
                            <li className="hover:text-teal-500 hover:underline ">
                                <a href="">About</a>
                            </li>
                            <li className="hover:text-teal-500 hover:underline">
                                <a href="">skills</a>
                            </li>
                            <li className=" hover:text-teal-500 hover:underline ">
                                <a href="">project</a>
                            </li>
                            <li className="hover:text-teal-500 hover:underline ">
                                <a href="">contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>   
     );
}
 
export default Navbar;