import { useTheme } from "../../context/ThemeContext";

import { useRef } from "react";
import { useHighlight } from "../../context/Search";

export default function Footer({ searchText, setMatchCount }) {
  const { isDark } = useTheme();
  const contentRef = useRef(null);

  useHighlight(searchText, contentRef, setMatchCount);

  return (
    <footer ref={contentRef}
      className="flex sm:py-2 text-center"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(51, 51, 51, 0.9))' 
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: isDark ? '#ffffff' : '#000000'
      }}
    >
      <div className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: isDark ? '#ffffff' : '#000000' }}>
              Company
            </h3>
            <ul className="space-y-2" style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
              <li>
                <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: isDark ? '#ffffff' : '#000000' }}>
              Resources
            </h3>
            <ul className="space-y-2" style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
              <li>
                <a href="#Home" className="text-sm hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-orange-500 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: isDark ? '#ffffff' : '#000000' }}>
              Support
            </h3>
            <ul className="space-y-2" style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
              <li>
                <a href="#contact" className="text-sm hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: isDark ? '#ffffff' : '#000000' }}>
              Follow us
            </h3>
            <ul className="space-y-2" style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
              <li>
                <a
                  href="https://github.com/HmNsd"
                  className="text-sm hover:text-orange-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hmnsd/" className="text-sm hover:text-orange-500 transition-colors" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-t" style={{ borderColor: isDark ? '#4b5563' : '#d1d5db' }} />
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <p className="text-sm font-medium text-center md:text-left" style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
            <span className="font-bold" style={{ color: isDark ? '#ffffff' : '#000000' }}>&copy;</span>{" "}
            {new Date().getFullYear()} Himanshu Nishad Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:scale-110 transition-all duration-300 hover:drop-shadow-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:scale-110 transition-all duration-300 hover:drop-shadow-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a
              href="https://github.com/HmNsd"
              className="hover:scale-110 transition-all duration-300 hover:drop-shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill={isDark ? '#ffffff' : '#333333'}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/hmnsd/" className="hover:scale-110 transition-all duration-300 hover:drop-shadow-lg" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
