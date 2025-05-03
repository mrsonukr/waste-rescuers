"use client";

import React, { useState, useEffect, useRef } from "react";

const faqData = [
  {
    question: "What types of waste do you remove?",
    answer:
      "We handle household, commercial, construction, garden, and electronic waste. Hazardous material removal is considered on a case-by-case basis.",
  },
  {
    question: "Are your services eco-friendly?",
    answer:
      "Yes. We recycle wherever possible and follow all regulations for safe and sustainable waste disposal.",
  },
  {
    question: "Do I need to be present during collection?",
    answer:
      "Not always. As long as access to the waste is available and you've given us instructions, we can handle everything for you.",
  },
  {
    question: "How quickly can you collect my waste?",
    answer:
      "We offer same-day or next-day service in most cases, depending on availability and location.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <div ref={sectionRef} className="mt-16 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto">
      <h2
        className={`text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 transform transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-lg overflow-hidden transform transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition font-medium flex justify-between items-center"
            >
              {item.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div
                className="px-6 pb-4 text-gray-700 text-sm leading-relaxed transition-all duration-300 ease-out transform origin-top"
                style={{
                  animation: openIndex === index ? "slideDown 300ms ease-out" : "none",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: scaleY(0);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Faq;