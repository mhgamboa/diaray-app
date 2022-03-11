import { useState, useRef } from "react";
import Link from "next/link";
import DarkModeButton from "./darkModeButton";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = ({ toggleDark, dark }) => {
  const { data: session, status } = useSession();

  const [mobileMenuState, setMobileMenuState] = useState("-translate-y-full");
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = e => {
    e.preventDefault;
    mobileMenuState === "" ? setMobileMenuState("-translate-y-full") : setMobileMenuState("");
  };

  const font = "text-gray-700 dark:text-white hover:text-black py-5 px-3 md:text-xl";
  const section = "flex items-center justify-between space-x-5";
  return (
    <header>
      <nav className="bg-gray-100 dark:bg-black h-16 fixed inset-x-0 z-10">
        {/* Content Width */}
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-4">
          {/* Actual Content & Content Layout */}
          <div className="flex justify-between">
            {/* Section 1 - Logo */}
            <div className={section}>
              <Link href="/">
                <a className={font} onClick={e => setMobileMenuState("-translate-y-full")}>
                  Journal App
                </a>
              </Link>
            </div>
            {/* Section 2 - Login, Signup, & Dark Mode */}
            <div className={`hidden md:flex ${section}`}>
              {session && status === "authenticated" && (
                <Link href="/home">
                  <a className={font}>Home</a>
                </Link>
              )}
              {session && status === "authenticated" ? (
                <Link href="/api/auth/signout">
                  <a
                    className={font}
                    onClick={e => {
                      e.preventDefault;
                      signIn();
                    }}
                  >
                    Logout
                  </a>
                </Link>
              ) : (
                status === "unauthenticated" && (
                  <a
                    className={`${font} cursor-pointer`}
                    onClick={e => {
                      e.preventDefault;
                      signIn();
                    }}
                  >
                    Login
                  </a>
                )
              )}
              {status === "unauthenticated" && (
                <Link href="/api/auth/signin">
                  <a
                    className="bg-yellow-400 hover:bg-yellow-300 md:text-lg rounded py-2 px-3 shadow transition ease-in-out duration-200"
                    onClick={e => {
                      e.preventDefault();
                      signIn();
                    }}
                  >
                    Signup
                  </a>
                </Link>
              )}
              <DarkModeButton toggleDark={toggleDark} dark={dark} />
            </div>
            {/* Mobile Button (Hidden on Desktop) */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 dark:text-gray-50"
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
      <div
        className={`md:hidden bg-gray-100 dark:bg-black px-2 pb-4 mt-16 flex flex-col transform duration-300 ${mobileMenuState} fixed inset-x-0`}
        ref={mobileMenuRef}
      >
        <a
          className={`${font} text-center`}
          onClick={e => {
            e.preventDefault;
            signIn();
            toggleMobileMenu(e);
          }}
        >
          Login
        </a>
        <a
          className="bg-yellow-400 hover:bg-yellow-300 text-center rounded py-2 px-3 shadow transition duration-200"
          onClick={e => {
            e.preventDefault;
            signIn();
            toggleMobileMenu(e);
          }}
        >
          Signup
        </a>
        <div className="flex justify-end pt-4 pr-3">
          <DarkModeButton toggleDark={toggleDark} dark={dark} />
        </div>
      </div>
    </header>
  );
};

export default Header;
