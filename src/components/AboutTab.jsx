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
      id="about"
      ref={sectionRef}
      className="flex items-center mt-10 px-4 sm:px-6 md:px-12"
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
            Your Trusted Partner in Cleaning and Waste Removal
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Welcome to <strong>Waste Rescuers</strong>, your trusted partner for
            professional house and garden cleaning and waste removal across the UK.
            We understand how overwhelming clutter, garden waste, or post-renovation
            debris can be—and we're here to make your life easier with fast,
            friendly, and reliable service.
            <br /><br />
            Founded with a passion for helping people reclaim their spaces, Waste
            Rescuers is built on the belief that a clean environment leads to a
            clearer mind. Whether you need a full house clearance, garden tidy-up,
            or just a few bulky items removed, our expert team handles every job
            with care, efficiency, and a commitment to sustainability.
            <br /><br />
            <strong>What We Do:</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                <strong>House Clearances:</strong> From attic to cellar, we remove
                unwanted items, furniture, and rubbish, leaving your home spotless.
              </li>
              <li>
                <strong>Garden Clean-ups:</strong> We clear green waste, old tools,
                sheds, and general garden debris to restore your outdoor space.
              </li>
              <li>
                <strong>Eco-Friendly Disposal:</strong> We prioritise recycling and
                proper waste management to reduce landfill impact.
              </li>
              <li>
                <strong>One-Off or Regular Services:</strong> Tailored to suit your
                schedule and needs.
              </li>
            </ul>
            <br />
            <strong>Why Choose Us?</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Fully licensed and insured waste carriers</li>
              <li>Experienced, polite, and uniformed staff</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Quick response times and flexible bookings</li>
            </ul>
            <br />
            At Waste Rescuers, we don’t just remove waste—we rescue spaces and give
            them back their purpose. Our mission is to make rubbish removal easy,
            responsible, and hassle-free for every customer we serve.
            <br /><br />
            <span className="text-sm text-gray-600 italic">
              Waste Rescuers is an Upper Tier Carrier registered with the Environment
              Agency (CBDU571009), Company Number: 16260822
            </span>
          </p>
        </div>

        {/* Right Content */}
        <div
          className={`w-full md:w-1/2 flex items-center justify-center transform transition-all duration-500 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/sofa-holder.webp"
              alt="Waste removal in progress"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
