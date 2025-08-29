import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-stone-700 via-black to-stone-700 border border-l-0 border-r-0 border-t-0 rounded-b-2xl shadow-md sticky top-0 z-50">
      <div className=" mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/hmnsd-portfolio"
          className="text-2xl  font-bold text-white hover:text-orange-400"
        >
          HMNSD
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-6" id="mobile-menu-2">
          <ul className="flex flex-col font-medium text-xl lg:flex-row xl:space-x-8 lg:space-x-3 lg:mt-0">
            <li>
              <NavLink
                to="/hmnsd-portfolio/skills"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-bold" : "text-white"
                  } border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hmnsd-portfolio/projects"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-bold" : "text-white"
                  } border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hmnsd-portfolio/experience"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-bold" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hmnsd-portfolio/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-bold" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hmnsd-portfolio/services"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-bold" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                }
              >
                Services
              </NavLink>
            </li>
          </ul>
        </div>
<div className="hidden lg:flex space-x-8">
        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center border border-b-stone-400 rounded-lg px-2">
          <MagnifyingGlassIcon className="w-5 h-5 " />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 outline-none p-1 w-25"
          />
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden lg:flex ">
          <Link
            to="/hmnsd-portfolio/login"
            className="text-stone-900 hover:text-white bg-stone-100 hover:bg-orange-500 focus:ring-1  focus:ring-stone-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "

          >
            Log in
          </Link>
          <Link
            to="#"
            className="text-white  bg-black hover:bg-orange-500 focus:ring-1 focus:ring-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Get started
          </Link>
        </div>
</div>
        {/* Mobile Icons */}
        <div className="flex lg:hidden items-center space-x-4">
          {/* Search Icon */}
          <button onClick={() => (setShowSearch(!showSearch))}>
            <MagnifyingGlassIcon className="w-6 h-6 text-stone-50" onClick={()=>setIsOpen(false)} />
          </button>
          {/* Burger Menu */}
          <button onClick={() => (setIsOpen(!isOpen))}>
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-stone-50" onClick={()=>(setShowSearch(false))} />
            ) : (
              <Bars3Icon className="w-6 h-6 text-stone-50" onClick={()=>(setShowSearch(false))} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {showSearch && (
        <div className="lg:hidden px-4 pb-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-xl p-2 outline-none"
            onClick={()=>setIsOpen(false)}
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        
          <div className="lg:hidden px-4 pb-4 space-y-3" id="mobile-menu-2">
          <ul className="flex flex-col lg:flex-row font-light lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/hmnsd-portfolio/skills"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-extrabold" : "text-white"
                  } border-b rounded-xl border-gray-100 hover:bg-stone-950 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  
                }
                onClick={()=>setIsOpen(false)}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hmnsd-portfolio/projects"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-extrabold" : "text-white"
                  } border-b rounded-xl  border-gray-100 hover:bg-stone-950 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                }
                onClick={()=>setIsOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hmnsd-portfolio/experience"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-extrabold" : "text-white"
                  } border-b rounded-xl  border-gray-100 hover:bg-stone-950 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                }
                onClick={()=>setIsOpen(false)}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hmnsd-portfolio/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-extrabold" : "text-white"
                  } border-b rounded-xl  border-gray-100 hover:bg-stone-950 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                }
                onClick={()=>setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hmnsd-portfolio/services"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-500 font-extrabold" : "text-white"
                  } border-b rounded-xl  border-gray-100 hover:bg-stone-950 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                }
                onClick={()=>setIsOpen(false)}
              >
                Services
              </NavLink>
            </li>
          </ul>
       

          <div className="flex space-x-4 mt-4">
            <Link
              to="/hmnsd-portfolio/login"
              className="flex-1 px-4 py-2 text-stone-900 hover:text-white bg-stone-100 hover:bg-orange-500 focus:ring-1  focus:ring-stone-100 font-medium rounded-lg text-sm text-center focus:outline-none"
              onClick={()=>setIsOpen(false)}
            >
              Log in
            </Link>
            <Link
              to="#"
              className="flex-1 px-4 py-2 text-white text-center bg-black hover:bg-orange-500 focus:ring-1 focus:ring-black font-medium rounded-lg text-sm focus:outline-none"
              onClick={()=>setIsOpen(false)}
            >
              Sing Up
            </Link>
          </div>
         </div>
      )}
    </nav>
  );
}
