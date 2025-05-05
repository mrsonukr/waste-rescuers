import React, { useState, useEffect, useRef } from "react";

const ContactCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      },
      {
        threshold: 0.1,
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
      className="w-full max-w-lg p-6 bg-green-500 shadow-[0_4px_0_0_black] rounded-xl md:p-12"
    >
      <div className="space-y-4 text-white">
        <h3
          className={`text-3xl font-semibold text-center transform transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Book An Appointment
        </h3>
        <p
          className={`text-center transform transition-all duration-500 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          "Transform your space today—book your appointment now! 🗓️ Enjoy fast,
          professional service that's tailored to you. No hassle, just one
          simple click!" Would you like a more formal tone or a playful style?
        </p>
        <div
          className={`space-y-4 transform transition-all duration-500 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Email */}
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>

            <a href="mailto:wasterescuers@gmail.com">wasterescuers@gmail.com</a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:+447749991862">+44 77499 91862</a>
          </div>
        </div>
        <div
          className={`text-center transform transition-all duration-500 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="tel:+917061543815"
            className="inline-flex items-center text-white border sm:border-white px-4 py-2 rounded-full hover:bg-white hover:text-green-500 transition-colors duration-200"
          >
            Call to Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
