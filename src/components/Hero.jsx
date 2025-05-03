import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger loading animation on mount
    setIsLoaded(true);

    // Image crossfade interval
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setNextImage((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 1000); // Match transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Current Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${images[currentImage]})`, zIndex: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        {/* Next Image (preloaded for crossfade) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            isFading ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${images[nextImage]})`, zIndex: 2 }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
        <div className="text-center  p-6 sm:p-8 md:p-10 w-full max-w-4xl rounded-2xl">
          <h1
            className={`text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight lg:leading-tight transform transition-all duration-700 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-orange-300">Quick Removals Fast</span> -
            Affordable Waste Removal Services
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto capitalize mb-6 transform transition-all duration-700 ease-out delay-100 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            London's best waste removal company - trusted by 500+ customers
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-700 ease-out delay-200 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="uppercase bg-green-500 py-3 px-6 rounded-full hover:bg-green-600 transition duration-200 text-sm sm:text-base">
              Book Now
            </button>
            <a
              href="tel:+917061543815"
              className="uppercase bg-orange-500 py-3 px-6 rounded-full hover:bg-orange-600 transition duration-200 text-sm sm:text-base"
            >
              Call Now For Booking
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
