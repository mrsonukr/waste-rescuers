import React, { useState, useEffect, useRef } from "react";
const faqData = [
  {
    question: "What types of waste removal services do Waste Rescuers offer in Manchester?",
    answer:
      "We provide comprehensive waste removal in Manchester, including domestic clearances, garden waste, office clear-outs, construction debris, bulky furniture, and electrical items. We also offer tailored services for landlords, estate agents, and commercial clients.",
  },
  {
    question: "How quickly can I book a waste removal service with Waste Rescuers?",
    answer:
      "We offer same-day and next-day booking options in most areas of Manchester. For the fastest service, we recommend booking as early in the day as possible via our website or by phone.",
  },
  {
    question: "Are there any items Waste Rescuers cannot collect in Manchester?",
    answer:
      "We are able to remove most non-hazardous items. However, we do not collect hazardous waste such as asbestos, paint, solvents, or medical waste. If you’re unsure, just give us a call and we’ll guide you.",
  },
  {
    question: "How is the waste disposed of after collection by Waste Rescuers?",
    answer:
      "All waste collected is sorted and sent to licensed recycling facilities or disposal centers. We provide a waste transfer note for every job, proving legal and ethical disposal of your items.",
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
