import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32">
      <nav className="bg-main-green w-full text-white my-4 py-4 sm:rounded-s md:rounded-full">
        <div className="max-w-7xl mx-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-main-yellow text-main-green font-bold rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center font-aleo">
              R
            </div>
            <span className="text-base sm:text-lg font-semibold font-heebo">
              Riham <span className="text-main-yellow">.</span>
            </span>
          </div>

          {/* Menu Burger pour les petits écrans */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links + Bouton (Aligné à droite) */}
          <div className="hidden md:flex flex-grow justify-end items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link href="#home" scroll={false} className="hover:text-main-yellow text-main-yellow">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" scroll={false} className="hover:text-main-yellow">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" scroll={false} className="hover:text-main-yellow">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" scroll={false} className="hover:text-main-yellow">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#testimonials" scroll={false} className="hover:text-main-yellow">
                  Testimonials
                </Link>
              </li>
            </ul>
            {/* Contact Button (Décalé légèrement à droite) */}
            <div className="pl-24">
              <Link href="/contact">
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Menu déroulant pour les petits écrans */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="#home" scroll={false} className="block hover:text-main-yellow text-main-yellow">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" scroll={false} className="block hover:text-main-yellow">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" scroll={false} className="block hover:text-main-yellow">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" scroll={false} className="block hover:text-main-yellow">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#testimonials" scroll={false} className="block hover:text-main-yellow">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition w-full">
                    Contact Me
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;