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
          ? 'rgba(0, 0, 0, 0.4)' 
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(248, 249, 250, 0.6))',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}
    >
      <div className=" mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="#Home"
          className="text-2xl font-bold hover:text-orange-500"
          style={{ color: isDark ? '#ffffff' : '#1f2937' }}
        >
          HMNSD
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-6" id="mobile-menu-2">
          <ul className="flex flex-col font-medium text-xl lg:flex-row xl:space-x-8 lg:space-x-3 lg:mt-0">
            <li>
              <a
                href="#skills"
                className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 ${
                  activeSection === 'skills' ? 'text-orange-500 font-bold' : isDark ? 'text-white' : 'text-gray-800'
                }`}
                style={{ scrollBehavior: 'smooth' }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 ${
                  activeSection === 'projects' ? 'text-orange-500 font-bold' : isDark ? 'text-white' : 'text-gray-800'
                }`}
                style={{ scrollBehavior: 'smooth' }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 ${
                  activeSection === 'experience' ? 'text-orange-500 font-bold' : isDark ? 'text-white' : 'text-gray-800'
                }`}
                style={{ scrollBehavior: 'smooth' }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 ${
                  activeSection === 'contact' ? 'text-orange-500 font-bold' : isDark ? 'text-white' : 'text-gray-800'
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
          <MagnifyingGlassIcon className="w-5 h-5" style={{ color: isDark ? '#ffffff' : '#1f2937' }} />
          <input
            type="text"
            className="ml-2 outline-none p-1 w-25 bg-transparent"
            style={{
              color: isDark ? '#ffffff' : '#1f2937',
              '::placeholder': { color: isDark ? '#9ca3af' : '#6b7280' }
            }}
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
          style={{
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'}`,
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
          }}
        >
          {isDark ? <SunIcon className="w-5 h-5" style={{ color: '#ffffff' }} /> : <MoonIcon className="w-5 h-5" style={{ color: '#1f2937' }} />}
        </button>

        {/* Mobile Icons */}
        <div className="flex lg:hidden items-center space-x-4">
          {/* Theme Toggle (Mobile) */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg transition-colors"
            style={{
              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'}`,
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }}
          >
            {isDark ? <SunIcon className="w-6 h-6" style={{ color: '#ffffff' }} /> : <MoonIcon className="w-6 h-6" style={{ color: '#1f2937' }} />}
          </button>
          {/* Search Icon */}
          <button onClick={() => (setShowSearch(!showSearch))}>
            <MagnifyingGlassIcon className="w-6 h-6" style={{ color: isDark ? '#ffffff' : '#1f2937' }} onClick={()=>setIsOpen(false)} />
          </button>
          {/* Burger Menu */}
          <button onClick={() => (setIsOpen(!isOpen))}>
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" style={{ color: isDark ? '#ffffff' : '#1f2937' }} onClick={()=>(setShowSearch(false))} />
            ) : (
              <Bars3Icon className="w-6 h-6" style={{ color: isDark ? '#ffffff' : '#1f2937' }} onClick={()=>(setShowSearch(false))} />
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
            style={{
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
              color: isDark ? '#ffffff' : '#1f2937',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
            }}
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
                ? 'rgba(0, 0, 0, 0.6)' 
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(248, 249, 250, 0.7))',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }}
          >
          <ul className="flex flex-col lg:flex-row font-light lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#skills"
                className="block py-2 pr-4 pl-3 duration-200 border-b rounded-xl border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                onClick={()=>setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 pr-4 pl-3 duration-200 border-b rounded-xl border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                onClick={()=>setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 pr-4 pl-3 duration-200 border-b rounded-xl border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                onClick={()=>setIsOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pr-4 pl-3 duration-200 border-b rounded-xl border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
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
