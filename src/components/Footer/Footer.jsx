import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();
  
  return (
    <footer 
      className="flex sm:py-2 text-center"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(51, 51, 51, 0.9))' 
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: isDark ? '#ffffff' : '#000000'
      }}
    >
      <div className="mx-auto w-full p-1 sm:p-2">
        <div className="grid justify-center">
          <div className="grid grid-cols-2 gap-x-30 gap-y-5 sm:gap-x-40 lg:gap-50 md:grid-cols-4">
            <div>
              <h2 className="sm:mb-2 text-l font-bold uppercase" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                Company
              </h2>
              <ul style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
                <li className="sm:m-1">
                  <a href="#" className="hover:underline">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="sm:mb-2 text-l font-bold uppercase" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                Resources
              </h2>
              <ul style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
                <li className="sm:m-1">
                  <a href="#Home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="sm:mb-2 text-l font-bold uppercase" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                Support
              </h2>
              <ul style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
                <li className="sm:m-1">
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="sm:mb-2 text-l font-bold uppercase" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                Follow us
              </h2>
              <ul style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
                <li className="sm:m-1">
                  <a
                    href="https://github.com/HmNsd"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hmnsd/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 sm:mx-auto md:my-4" style={{ borderColor: isDark ? '#4b5563' : '#d1d5db' }} />
        <div className="md:flex justify-items-center md:justify-between md:px-2">
          <span className="text-sm sm:text-center sm:p-0 p-2" style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
            <span className="font-bold text-l" style={{ color: isDark ? '#ffffff' : '#000000' }}>&copy;</span>{" "}
            {new Date().getFullYear()} Himanshu Nishad Portfolio, All rights
            reserved.
          </span>
          <div className="flex space-x-10  md:justify-around md:p-0 p-1">
            <Link to="#" className="hover:text-blue-500 text-stone-50">
              <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Google" className="w-5" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="hover:text-blue-500 text-stone-50">
              <img src="https://www.svgrepo.com/show/331368/discord-v2.svg" alt="Google" className="w-5" />
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="#" className="hover:text-blue-400 text-stone-50">
              <img src="https://www.svgrepo.com/show/452123/twitter.svg" alt="Google" className="w-5" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              to="https://github.com/HmNsd?tab=overview&from=2021-12-01&to=2021-12-31"
              className="text-stone-300 hover:text-white"
            >
              <img src="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg" alt="GitHub" className="w-5 invert dark:invert-0 dark:brightness-0 dark:invert" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="#" className="hover:text-pink-500 text-stone-50">
              <img
                src="https://www.svgrepo.com/show/382718/dribbble-dribble-dribbbble.svg"
                alt="Dribbble"
                className="w-5"
              />
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
