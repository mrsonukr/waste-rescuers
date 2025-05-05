import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.webp";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const desktopServicesRef = useRef(null);

  const services = [
    { slug: "waste-removal", title: "Waste Removal" },
    { slug: "mattress-removal", title: "Mattress Removal" },
    { slug: "man-and-van", title: "Man and Van" },
    { slug: "rubbish-removal", title: "Rubbish Removal" },
    { slug: "garden-waste-removal", title: "Garden Waste Removal" },
    { slug: "furniture-removal", title: "Furniture Removal" },
  ];

  const toggleSidebar = () => {
    console.log("toggleSidebar called, isSidebarOpen:", isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
    if (isMobileServicesOpen) {
      console.log("Closing mobile services dropdown");
      setIsMobileServicesOpen(false);
    }
  };

  const toggleDesktopServices = () => {
    console.log("toggleDesktopServices called, isDesktopServicesOpen:", isDesktopServicesOpen);
    setIsDesktopServicesOpen(!isDesktopServicesOpen);
  };

  const toggleMobileServices = (event) => {
    event.stopPropagation();
    event.preventDefault(); // Added to rule out default behavior interference
    console.log("toggleMobileServices called, current isMobileServicesOpen:", isMobileServicesOpen);
    setIsMobileServicesOpen((prev) => {
      const newState = !prev;
      console.log("Setting isMobileServicesOpen to:", newState);
      return newState;
    });
  };

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(event.target)) {
        console.log("Click outside desktop services, closing dropdown");
        setIsDesktopServicesOpen(false);
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
      <nav className="hidden md:flex container mx-auto px-6 py-3 items-center justify-between">
        <div className="w-20">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li ref={desktopServicesRef} className="relative group">
            <button
              onClick={toggleDesktopServices}
              className="flex items-center hover:text-orange-600 transition-colors duration-200"
            >
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
            <div
              className={`absolute top-full left-0 mt-2 w-48 uppercase bg-white shadow-xl rounded-lg transition-all duration-300 z-10 ${
                isDesktopServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`block px-4 py-3 text-sm hover:text-orange-600 ${
                    index === 0 ? "rounded-t-lg" : index === services.length - 1 ? "rounded-b-lg" : ""
                  }`}
                  onClick={() => setIsDesktopServicesOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
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
          <div className="w-20">
            <img src={logo} alt="Logo" />
          </div>
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
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-6 py-3">
            <div className="w-20">
              <img src={logo} alt="Logo" />
            </div>
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
              <Link
                to="/"
                className="block py-2 hover:text-orange-600 transition-colors duration-200"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={toggleMobileServices}
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
                    d={isMobileServicesOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block py-2 text-sm hover:text-orange-600 transition-colors duration-200"
                      onClick={toggleSidebar}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a
                href="/#about"
                className="block py-2 hover:text-orange-600 transition-colors duration-200"
                onClick={toggleSidebar}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#footer"
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