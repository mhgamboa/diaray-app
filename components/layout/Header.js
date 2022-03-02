// import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DarkModeButton from "./darkModeButton";

const Header = ({ toggleDark }) => {
  const router = useRouter();
  const [path, updatePath] = useState(router.route);

  useEffect(() => {
    if (path !== router.route) {
      setMobileMenuState("-translate-y-full");
      updatePath(router.route);
    }
  }, [router.route, path]);

  const font = "text-gray-700 hover:text-black py-5 px-3";
  const section = "flex items-center justify-between space-x-4";

  const [mobileMenuState, setMobileMenuState] = useState("-translate-y-full");
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = e => {
    if (mobileMenuState === "-translate-y-full") setMobileMenuState("");
    if (mobileMenuState !== "-translate-y-full") setMobileMenuState("-translate-y-full");
  };

  return (
    <div>
      <nav className="bg-gray-100 dark:bg-black h-16 fixed inset-x-0 z-10">
        {/* Content Width */}
        <div className="max-w-6xl mx-auto px-4">
          {/* Actual Content & Content Layout */}
          <div className="flex justify-between">
            {/* Section 1 - Logo */}
            <div className={section}>
              <Link href="/">
                <a className={font}>Journal</a>
              </Link>
            </div>
            {/* Section 2 - Login & Signup */}
            <div className={`hidden md:flex ${section}`}>
              <Link href="/login">
                <a className={font}>Login</a>
              </Link>
              <Link href="#">
                <a className="bg-yellow-400 hover:bg-yellow-300 rounded py-2 px-3 shadow transition ease-in-out duration-200">
                  Signup
                </a>
              </Link>
              {/* <DarkModeButton toggleDark={toggleDark} /> */}
            </div>
            {/* Mobile Button (Hidden on Desktop) */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-gray-100 px-2 pb-4 mt-16 flex flex-col transform duration-300 ${mobileMenuState} fixed inset-x-0`}
        ref={mobileMenuRef}
      >
        <Link href="/login">
          <a className={`${font} text-center `}>Login</a>
        </Link>
        <Link href="#">
          <a className="bg-yellow-400 hover:bg-yellow-300 text-center rounded py-2 px-3 shadow transition duration-200">
            Signup
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
