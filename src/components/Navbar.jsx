import { searchImg } from "../utils";
import { navLists } from "../constants";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    if (window.innerWidth < 1024) {
      setShowMenu(!showMenu);
    } else {
      setShowMenu(false);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      ".nav-bar-anim",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <header className="w-full py-5 sm:px-10 md:px-32 lg:px-44 flex justify-between items-center">
      <nav className="flex w-full px-6 sm:px-0">
        <div className="w-20 h-10 flex flex-col font-extrabold text-sm justify-center nav-bar-anim">
          <span>Atelier</span>
          <span>Jukić</span>
        </div>
        <div className="flex flex-1 justify-center max-sm:hidden nav-bar-anim">
          {navLists.map((nav, i) => (
            <Link
              to={nav.link}
              key={i}
              className="mx-10 group pb-1 cursor-pointer relative overflow-hidden"
            >
              <span className="text-lg text-gray group-hover:text-white transition-all duration-300">
                {nav.name}
              </span>
              <span className=" absolute bottom-0 -left-[100%] group-hover:left-0 w-full h-[2px] rounded-md bg-primary transition-all duration-300"></span>
            </Link>
          ))}
        </div>
        <ul className="flex items-baseline pr-6 md:pr-0 gap-8 max-sm:justify-end max-sm:flex-1 nav-bar-anim">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100063561963303&locale=hr_HR"
              target="blank"
            >
              <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition hover:scale-110 hover:text-primary"
              >
                <path
                  d="M8.0733 3.29509H9.88498V0.139742C9.57242 0.0967442 8.49748 0 7.2456 0C4.6335 0 2.84415 1.643 2.84415 4.66274V7.44186H-0.0383301V10.9693H2.84415V19.845H6.37821V10.9701H9.1441L9.58317 7.44269H6.37738V5.01251C6.37821 3.99297 6.65273 3.29509 8.0733 3.29509Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/atelierjukic/" target="blank">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="transition hover:scale-110 hover:text-primary"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.75995 0H16.0099C19.8063 0 22.8849 3.07862 22.8849 6.875V15.125C22.8849 18.9214 19.8063 22 16.0099 22H7.75995C3.96357 22 0.884949 18.9214 0.884949 15.125V6.875C0.884949 3.07862 3.96357 0 7.75995 0ZM16.0099 19.9375C18.6637 19.9375 20.8224 17.7787 20.8224 15.125V6.875C20.8224 4.22125 18.6637 2.0625 16.0099 2.0625H7.75995C5.1062 2.0625 2.94745 4.22125 2.94745 6.875V15.125C2.94745 17.7787 5.1062 19.9375 7.75995 19.9375H16.0099Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.38495 11C6.38495 7.96263 8.84757 5.5 11.8849 5.5C14.9223 5.5 17.3849 7.96263 17.3849 11C17.3849 14.0374 14.9223 16.5 11.8849 16.5C8.84757 16.5 6.38495 14.0374 6.38495 11ZM8.44745 11C8.44745 12.8948 9.9902 14.4375 11.8849 14.4375C13.7797 14.4375 15.3224 12.8948 15.3224 11C15.3224 9.10388 13.7797 7.5625 11.8849 7.5625C9.9902 7.5625 8.44745 9.10388 8.44745 11Z"
                  fill="currentColor"
                />
                <circle
                  cx="17.7975"
                  cy="5.08737"
                  r="0.732875"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
        </ul>
        {/* Mobile menu bar */}
        <div className="flex lg:hidden flex-col">
          <div className="w-8" onClick={toggleMenu}>
            <div
              className="w-8 h-6 flex flex-col justify-between z-50 nav-bar-anim"
              onClick={toggleMenu}
            >
              <span
                className={`w-8 h-1 rounded transition-all bg-white duration-500 ${
                  showMenu ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-8 h-1 rounded transition-all bg-white duration-500 ${
                  showMenu ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-8 h-1 rounded transition-all bg-white duration-500 ${
                  showMenu ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`h-screen w-screen flex flex-col fixed z-50 bg-zinc right-0 left-0 transition-all duration-500 ease-in-out pt-14
              ${
                showMenu
                  ? "bottom-0 top-0 opacity-100"
                  : "bottom-[100vh] -top-[100vh] opacity-0"
              }`}
          >
            <div className="w-full flex flex-row justify-between px-4 pb-10">
              <div
                className="w-10 h-8 flex flex-col justify-between z-50 ml-auto"
                onClick={toggleMenu}
              >
                <span
                  className={`w-10 h-1 rounded transition-all bg-white duration-500 ${
                    showMenu ? "rotate-45 origin-left" : ""
                  }`}
                ></span>
                <span
                  className={`w-10 h-1 rounded transition-all bg-white duration-500 ${
                    showMenu ? "-rotate-45 origin-left" : ""
                  }`}
                ></span>
              </div>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center gap-10 pb-10">
              {navLists.map((nav, i) => (
                <Link
                  to={nav.link}
                  onClick={toggleMenu}
                  key={i}
                  className="group cursor-pointer relative overflow-hidden"
                >
                  <span className="text-2xl text-gray-200  group-hover:text-white transition-all duration-300">
                    {nav.name}
                  </span>
                  <span className=" absolute bottom-0 -left-[100%] group-hover:left-0 w-full h-[2px] rounded-md bg-primary transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* End of mobile menu bar */}
      </nav>
    </header>
  );
};

export default Navbar;
