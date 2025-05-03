import React, { useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const ListCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const services = [
    "Waste Removal",
    "Mattress Removal",
    "Man and Van",
    "Rubbish Removal",
    "Appliance Removal",
    "Furniture Removal",
    "Garden Waste Removal",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full max-w-lg p-6 bg-green-50 shadow-[0_4px_0_0_green] rounded-xl md:p-12"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Heading and Paragraph */}
        <div
          className={`md:w-1/2 space-y-4 transform transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-semibold text-gray-800 text-center">
            Our Services
          </h3>
          <p className="text-gray-600">
            Quick Removals is a trusted waste removal company in London, offering
            fast, eco-friendly solutions for household, commercial, and
            construction waste.
          </p>
          <div>
            <a
              href="#services"
              className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              View All Services
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Service List */}
        <div className="md:w-1/2 space-y-4">
          <ul className="space-y-2">
            {services.map((item, index) => (
              <li
                key={index}
                className={`flex items-center text-gray-700 transform transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListCard;