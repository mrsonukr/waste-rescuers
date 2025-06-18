import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SolutionCard = ({ icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Create slug from title
  const createSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = cardRef.current;
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

  const slug = createSlug(title);

  return (
    <Link to={`/services/${slug}`} aria-label={`Learn more about ${title} service`}>
      <article
        ref={cardRef}
        className={`w-full mx-auto rounded-xl p-4 sm:p-6 border-b-4 border-green-300 bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_15px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex flex-col items-center text-center space-y-3">
          {/* Icon */}
          <img 
            className="w-12 h-12" 
            src={icon} 
            alt={`${title} service icon`}
            width="48"
            height="48"
            loading="lazy"
          />

          {/* Title */}
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600">{description}</p>

          {/* Learn More Link */}
          <div className="mt-2">
            <span className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors duration-200">
              Learn More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default SolutionCard;