import React from 'react';

const ServiceHero = ({ 
  title, 
  description, 
  image, 
  onBookNow, 
  isRegional = false, 
  cityName = null,
  showCallButton = true 
}) => {
  return (
    <div className="relative bg-gradient-to-br from-green-500 to-teal-600 py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl mb-6 opacity-90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookNow}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-200"
            >
              {isRegional ? `Book Now in ${cityName}` : 'Book Now'}
            </button>
            {showCallButton && (
              <a
                href="tel:+447749991862"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition duration-200 text-center"
              >
                Call: +44 7749991862
              </a>
            )}
          </div>
        </div>
        <div className="relative">
          <img
            src={image}
            alt={isRegional ? `${title} in ${cityName}` : title}
            className="rounded-xl shadow-2xl w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;