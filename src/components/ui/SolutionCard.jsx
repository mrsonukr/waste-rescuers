import React, { useState, useEffect, useRef } from "react";

const SolutionCard = ({ icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {};
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full  mx-auto rounded-xl p-4 sm:p-6 border-b-4 border-green-300 bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transform transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        {/* Icon */}
        <img className="w-12 h-12" src={icon} alt={title} />

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
