import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex bg-gradient-to-r from-stone-700 via-black to-stone-700 sm:py-2 text-center text-gray-300">
      <div className="mx-auto w-full p-1 sm:p-2">
        <div className="grid justify-center">
          <div className="grid grid-cols-2 gap-x-30 gap-y-5 sm:gap-x-40 lg:gap-50 md:grid-cols-4">
            <div>
              <h2 className="sm:mb-2 text-l font-bold text-stone-50 uppercase">
                Company
              </h2>
              <ul className="text-stone-300">
                <li className="sm:m-1">
                  <Link to="#" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="sm:mb-2 text-l font-bold text-stone-50 uppercase">
                Resources
              </h2>
              <ul className="text-stone-300">
                <li className="sm:m-1">
                  <Link to="/hmnsd-portfolio" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="sm:mb-2 text-l font-bold text-stone-50 uppercase">
                Support
              </h2>
              <ul className="text-stone-300">
                <li className="sm;m-1">
                  <Link to="#" className="hover:underline">
                    Submit ticket
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="sm:mb-2 text-l font-bold text-stone-50 uppercase">
                Follow us
              </h2>
              <ul className="text-stone-300">
                <li className="sm:m-1  ">
                  <Link
                    to="https://github.com/HmNsd?tab=overview&from=2021-12-01&to=2021-12-31"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto md:my-4" />
        <div className="md:flex justify-items-center md:justify-between md:px-2">
          <span className="text-sm text-stone-300 sm:text-center sm:p-0 p-2">
            <span className="text-white font-bold text-l">&copy;</span>{" "}
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
              <img src="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg" alt="Google" className="w-5 invert" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="#" className="hover:text-pink-500 text-stone-50">
              <img src="https://www.svgrepo.com/show/382718/dribbble-dribble-dribbbble.svg" alt="Google" className="w-5" />
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
