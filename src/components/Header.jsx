import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white text-gray-900 relative z-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex container mx-auto px-6 py-5 items-center justify-between">
        <div className="text-3xl font-extrabold tracking-tight">Logo</div>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <a href="#" className="relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li ref={servicesRef} className="relative group">
            <button className="flex items-center hover:text-orange-600 transition-colors duration-200">
              Services
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 uppercase bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <a
                href="#"
                className="block px-4 py-3 text-sm hover:text-orange-600 rounded-t-lg"
              >
                Appliance removal
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-sm hover:text-orange-600"
              >
                Furniture removal
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-sm hover:text-orange-600 rounded-b-lg"
              >
                Garden waste removal
              </a>
            </div>
          </li>
          <li>
            <a href="#" className="relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#" className="relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-6 py-5">
          <div className="text-2xl font-extrabold tracking-tight">Logo</div>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg
              className="w-7 h-7"
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
        >
          <div className="flex justify-between items-center px-6 py-5">
            <div className="text-2xl font-extrabold tracking-tight">Logo</div>
            <button onClick={toggleSidebar} className="focus:outline-none">
              <svg
                className="w-9 h-9 bg-green-500 p-1 rounded-lg"
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
          <ul className="flex flex-col space-y-3 px-6 py-6 text-lg font-medium">
            <li>
              <a
                href="#"
                className="block py-2 hover:text-orange-600 transition-colors duration-200"
                onClick={toggleSidebar}
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={toggleServices}
                className="py-2 hover:text-orange-600 w-full text-left flex items-center transition-colors duration-200"
              >
                Services
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isServicesOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <a
                    href="#"
                    className="block py-2 text-sm hover:text-orange-600 transition-colors duration-200"
                    onClick={toggleSidebar}
                  >
                    Appliance removal
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-sm hover:text-orange-600 transition-colors duration-200"
                    onClick={toggleSidebar}
                  >
                    Furniture removal
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-sm hover:text-orange-600 transition-colors duration-200"
                    onClick={toggleSidebar}
                  >
                    Garden waste removal
                  </a>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                className="block py-2 hover:text-orange-600 transition-colors duration-200"
                onClick={toggleSidebar}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 hover:text-orange-600 transition-colors duration-200"
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