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