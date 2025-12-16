import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import LoginModal from "../LoginModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150;
      
      // Check if we're at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setActiveSection('contact');
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav 
      className="border border-l-0 border-r-0 border-t-0 rounded-b-2xl shadow-md sticky top-0 z-50"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(51, 51, 51, 0.9))' 
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className=" mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="#Home"
          className="text-2xl  font-bold text-white hover:text-orange-400"
        >
          HMNSD
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-6" id="mobile-menu-2">
          <ul className="flex flex-col font-medium text-xl lg:flex-row xl:space-x-8 lg:space-x-3 lg:mt-0">
            <li>
              <a
                href="#skills"
                className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 ${
                  activeSection === 'skills' ? 'text-orange-400 font-bold' : 'text-white'
                }`}
                style={{ scrollBehavior: 'smooth' }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 ${
                  activeSection === 'projects' ? 'text-orange-400 font-bold' : 'text-white'
                }`}
                style={{ scrollBehavior: 'smooth' }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 ${
                  activeSection === 'experience' ? 'text-orange-400 font-bold' : 'text-white'
                }`}
                style={{ scrollBehavior: 'smooth' }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0 ${
                  activeSection === 'contact' ? 'text-orange-400 font-bold' : 'text-white'
                }`}
                style={{ scrollBehavior: 'smooth' }}
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
<div className="hidden lg:flex space-x-8">
        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center border-b-stone-500 border-b-1 rounded-3xl px-2">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 outline-none p-1 w-25"
          />
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden lg:flex ">
          <button
            onClick={() => setShowLoginModal(true)}
            className="text-stone-900 hover:text-white bg-stone-100 hover:bg-orange-500 focus:ring-1  focus:ring-stone-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
          >
            Log in
          </button>
          <Link
            to="#"
            className="text-white  bg-black hover:bg-orange-500 focus:ring-1 focus:ring-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Get started
          </Link>
        </div>
</div>
        {/* Theme Toggle (Desktop) */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="hidden lg:block p-2 rounded-lg hover:bg-stone-600 transition-colors"
        >
          {isDark ? <SunIcon className="w-5 h-5 text-white" /> : <MoonIcon className="w-5 h-5 text-white" />}
        </button>

        {/* Mobile Icons */}
        <div className="flex lg:hidden items-center space-x-4">
          {/* Theme Toggle (Mobile) */}
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? <SunIcon className="w-6 h-6 text-stone-50" /> : <MoonIcon className="w-6 h-6 text-stone-50" />}
          </button>
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
        
          <div 
            className="lg:hidden px-4 pb-4 space-y-3" 
            id="mobile-menu-2"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(51, 51, 51, 0.95))' 
                : 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
          <ul className="flex flex-col lg:flex-row font-light lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#skills"
                className="block py-2 pr-4 pl-3 duration-200 text-white border-b rounded-xl border-gray-100 hover:bg-stone-950 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                onClick={()=>setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 pr-4 pl-3 duration-200 text-white border-b rounded-xl border-gray-100 hover:bg-stone-950 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                onClick={()=>setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 pr-4 pl-3 duration-200 text-white border-b rounded-xl border-gray-100 hover:bg-stone-950 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                onClick={()=>setIsOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pr-4 pl-3 duration-200 text-white border-b rounded-xl border-gray-100 hover:bg-stone-950 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                onClick={()=>setIsOpen(false)}
              >
                Contact
              </a>
            </li>

          </ul>
       

          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => {setShowLoginModal(true); setIsOpen(false);}}
              className="flex-1 px-4 py-2 text-stone-900 hover:text-white bg-stone-100 hover:bg-orange-500 focus:ring-1  focus:ring-stone-100 font-medium rounded-lg text-sm text-center focus:outline-none"
            >
              Log in
            </button>
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
    <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
}
