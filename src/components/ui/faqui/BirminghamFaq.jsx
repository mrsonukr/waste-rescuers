import React, { useState, useEffect, useRef } from "react";

const faqData = [
  {
    question: "What types of waste do you remove?",
    answer:
      "We collect household waste, garden waste, office rubbish, bulky items, construction debris, and even electrical waste. If you have a specific type of waste, feel free to ask!",
  },
  {
    question: "How quickly can you collect my waste in Birmingham?",
    answer:
      "We aim to offer same-day or next-day waste collection in Birmingham, depending on availability. Booking early helps secure your preferred time slot.",
  },
  {
    question: "How much does your waste removal service cost?",
    answer:
      "Pricing depends on the volume and type of waste. You can request a free quote online or by phone. Our rates are competitive and transparent — no hidden charges.",
  },
  {
    question: "Is your waste disposal environmentally friendly?",
    answer:
      "Absolutely. We follow environmentally responsible waste disposal practices. Recyclable items are taken to licensed recycling facilities, and you'll receive documentation to confirm proper disposal.",
  },
  {
    question: "How do I book a waste removal service with Waste Rescuers?",
    answer:
      "Booking is easy. Just call us, use our quote form, or book online. Let us know what needs removing, the location, and your preferred date. We’ll handle the rest.",
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
