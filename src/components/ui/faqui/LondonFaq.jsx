import React, { useState, useEffect, useRef } from "react";

const faqData = [
  {
    question: "What types of waste do you remove in London?",
    answer:
      "We remove a wide range of waste types including household rubbish, garden waste, office clearance, construction debris, bulky items, and electronic waste. We also consider hazardous waste removal on request.",
  },
  {
    question: "How quickly can you provide waste removal in London?",
    answer:
      "We offer same-day and next-day waste removal services across most areas of London, subject to availability. For urgent jobs, we recommend booking as early as possible.",
  },
  {
    question:
      "How do I book a waste removal service in London with Waste Rescuers?",
    answer:
      "Booking is simple. You can call us directly, fill out the quote form on our website, or use our online booking system. Just provide the waste details, location, and preferred date — we'll handle the rest.",
  },
  {
    question:
      "Do you offer waste removal services for commercial properties in London?",
    answer:
      "Yes, we provide tailored waste removal solutions for offices, retail stores, landlords, estate agents, construction sites, and other commercial premises across London.",
  },
  {
    question: "What areas in London do you cover?",
    answer:
      "We cover all Greater London boroughs including Central London, North, South, East, and West London. Whether you're in a residential area or a busy commercial zone, we've got you covered.",
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
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1,
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
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mt-16 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto"
    >
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition font-medium flex justify-between items-center"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="pr-4">{item.question}</span>
              <span className="text-xl flex-shrink-0" aria-hidden="true">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="px-6 pb-4 text-gray-700 text-sm leading-relaxed transition-all duration-300 ease-out transform origin-top animate-slideDown"
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
        .animate-slideDown {
          animation: slideDown 300ms ease-out;
        }
      `}</style>
    </div>
  );
};

export default Faq;
