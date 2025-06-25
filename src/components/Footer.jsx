import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";
import logo from "/assets/logo.webp";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <footer
      id="footer"
      ref={sectionRef}
      itemscope="itemscope"
      itemType="https://schema.org/WPFooter"
      className={`bg-[#001508] pt-10 pb-4 px-2 sm:pt-16 sm:pb-5 sm:px-3 md:pt-24 md:pb-5 md:px-3 transform transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-[1170px] mx-auto flex flex-wrap gap-4 md:gap-0 justify-between">
        {/* Column 1: Logo and Contact */}
        <div
          className={`w-full sm:w-[28.482%] px-2 text-center sm:text-left transform transition-all duration-500 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src={logo}
            alt="Quick Removals Logo"
            width={70}
            height={57}
            className="mb-2 mx-auto sm:mx-0 max-w-[70px] sm:max-w-[90px]"
          />
          <p className="text-white text-xs sm:text-sm mt-1">
            We Cover all London
          </p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start justify-center sm:justify-start">
              <FaMapMarkerAlt className="text-green-400 mr-2 mt-1" size={16} />
              <span className="text-white text-xs sm:text-sm">
                12 Audley Gardens, IG3 9LB, Seven Kings, Ilford, Essex, UK
              </span>
            </li>
            <li className="flex items-start justify-center sm:justify-start">
              <FaPhoneAlt className="text-green-400 mr-2 mt-1" size={16} />
              <a
                href="tel:+447749991862"
                className="text-white text-xs sm:text-sm"
              >
                +44-7749991862
              </a>
            </li>
            <li className="flex items-start justify-center sm:justify-start">
              <FaWhatsapp className="text-green-400 mr-2 mt-1" size={16} />
              <span className="text-white text-xs sm:text-sm">
                +44-7749991862
              </span>
            </li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div
          className={`w-full sm:w-[19.554%] lg:w-[14%] px-2 mt-4 sm:mt-0 text-center sm:text-left transform transition-all duration-500 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h4 className="text-white text-base sm:text-lg font-semibold">
            Quick Links
          </h4>
          <div className="w-[30%] h-[2px] bg-green-400 my-2 mx-auto sm:mx-0"></div>
          <ul>
            <li>
              <Link
                to="/privacy-policy"
                className="text-white text-xs sm:text-sm hover:text-green-400"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div
          className={`w-full sm:w-[25.113%] lg:w-[18%] px-2 mt-4 sm:mt-0 text-center sm:text-left transform transition-all duration-500 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h4 className="text-white text-base sm:text-lg font-semibold">
            Services
          </h4>
          <div className="w-[30%] h-[2px] bg-green-400 my-2 mx-auto sm:mx-0"></div>
          <ul className="space-y-1">
            {[
              { name: "Waste Removal", slug: "waste-removal" },
              { name: "Mattress Removal", slug: "mattress-removal" },
              { name: "Man and Van", slug: "man-and-van" },
              { name: "Rubbish Removal", slug: "rubbish-removal" },
              { name: "Appliance Removal", slug: "appliance-removal" },
              { name: "Furniture Removal", slug: "furniture-removal" },
              { name: "Garden Waste Removal", slug: "garden-waste-removal" },
            ].map((service, idx) => (
              <li key={idx}>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-white text-xs sm:text-sm hover:text-green-400"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Work Hours */}
        <div
          className={`w-full sm:w-[26.851%] sm:pr-0 mt-4 sm:mt-0 text-center sm:text-left transform transition-all duration-500 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h4 className="text-white text-base sm:text-lg font-semibold">
            Work Hours
          </h4>
          <div className="w-[30%] h-[2px] bg-green-400 my-2 mx-auto sm:mx-0"></div>
          <ul>
            <li className="flex items-start justify-center sm:justify-start">
              <FaClock className="text-green-400 mr-2 mt-1" size={14} />
              <span className="text-white text-xs sm:text-sm">
                9 AM - 5 PM, Monday - Saturday
              </span>
            </li>
          </ul>
          <p className="text-white text-xs sm:text-sm mt-2">
            <strong>Quick , Fast & Affordable</strong>
          </p>
          <a
            href="/#book"
            className="inline-block mt-2 bg-green-400 text-white text-xs sm:text-sm font-semibold py-3 sm:py-4 px-6 sm:px-8 border-b-4 border-[#1E1E1E] hover:bg-orange-500 hover:border-green-400 transition"
          >
            Make Appointment
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`max-w-[1170px] mx-auto mt-8 sm:mt-10 md:mt-16 pt-4 sm:pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between text-center transform transition-all duration-500 ease-out delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-white text-xs sm:text-sm">Waste Rescuers.</p>
        <p className="text-white text-xs sm:text-sm mt-2 sm:mt-0">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;