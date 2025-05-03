import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaTrashAlt, FaAward } from "react-icons/fa";

const Customer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: <FaUsers className="text-green-600 text-4xl" />,
      value: "2,240+",
      label: "Satisfied Customers",
    },
    {
      icon: <FaTrashAlt className="text-yellow-600 text-4xl" />,
      value: "3,600+",
      label: "Waste Removed & Disposed Off Tonnes",
    },
    {
      icon: <FaAward className="text-blue-600 text-4xl" />,
      value: "99.9%",
      label: "Jobs Success Rate",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current); // Stop observing once visible
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect(); // Prevent memory leaks
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-12 bg-red-100 mt-12">
      <div
        className={`max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center transform transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow hover:shadow-lg  transform transition-all duration-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
