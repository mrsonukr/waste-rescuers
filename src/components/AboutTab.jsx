import React, { useState, useEffect, useRef } from "react";

const AboutTab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current); // Safely unobserve
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    // Only observe if the ref is available
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Safely unobserve in cleanup
      }
      observer.disconnect(); // Disconnect observer to prevent memory leaks
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <div
      id="about"
      ref={sectionRef}
      className="h-screen flex items-center mt-10 px-4 sm:px-6 md:px-12"
    >
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Left Content */}
        <div
          className={`w-full md:w-1/2 text-left space-y-4 transform transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="uppercase text-sm sm:text-base font-semibold text-gray-800">
            About Us
          </p>
          <p className="text-xl sm:text-2xl text-green-500 font-bold">
            Trusted Experience in Waste Removal Services
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            For more than two decades, <strong>Waste Rescuers</strong> has been
            dedicated to keeping London clean, efficient, and clutter-free.
            Specializing in reliable and eco-friendly waste removal services, we
            pride ourselves on delivering top-notch solutions tailored to homes,
            businesses, and construction sites across the city.
            <br />
            <br />
            Our team knows what it takes to handle your waste removal needs
            swiftly and responsibly. From household clearances to commercial and
            after-builders cleanups, we ensure every job is completed with
            professionalism and a commitment to sustainability.
            <br />
            <br />
            At Waste Rescuers, we’re not just removing waste—we’re creating
            cleaner, greener spaces for Londoners.{" "}
            <strong>Trust us to get the job done right!</strong>
          </p>
        </div>

        {/* Right Content */}
        <div
          className={`w-full md:w-1/2 flex items-center justify-center  transform transition-all duration-500 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-full  rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/waste-holder.webp"
              alt="JCB at work"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
