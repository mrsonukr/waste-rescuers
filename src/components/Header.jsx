import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.webp";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-white text-gray-900 relative z-50 shadow-sm">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex container mx-auto px-6 py-3 items-center justify-between">
        <div className="w-20">
          <img src={logo} alt="Waste Rescuers Logo" width="80" height="65" loading="eager" />
        </div>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="relative group">
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <a href="/#about" className="relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="/#footer" className="relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="w-16">
            <img src={logo} alt="Waste Rescuers Logo" width="64" height="52" loading="eager" />
          </div>
          <button 
            onClick={toggleSidebar} 
            className="focus:outline-none p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isSidebarOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isSidebarOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-6 py-3 border-b">
            <div className="w-16">
              <img src={logo} alt="Waste Rescuers Logo" width="64" height="52" loading="eager" />
            </div>
            <button 
              onClick={toggleSidebar} 
              className="focus:outline-none p-1"
              aria-label="Close navigation menu"
            >
              <svg
                className="w-8 h-8 bg-green-500 p-1 rounded-lg text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col space-y-1 px-6 py-6 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="block py-3 px-2 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-3 px-2 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                onClick={toggleSidebar}
              >
                Services
              </Link>
            </li>
            <li>
              <a
                href="/#about"
                className="block py-3 px-2 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                onClick={toggleSidebar}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#footer"
                className="block py-3 px-2 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                onClick={toggleSidebar}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;