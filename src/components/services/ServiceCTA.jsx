import React from 'react';

const ServiceCTA = ({ 
  service, 
  onBookNow, 
  isRegional = false, 
  cityName = null 
}) => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-teal-600 py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">
          {isRegional 
            ? `Ready for ${service.title} in ${cityName}?`
            : 'Ready to Get Started?'
          }
        </h2>
        <p className="text-xl text-white opacity-90 mb-6">
          Book your {service.title.toLowerCase()} service today and experience 
          {isRegional 
            ? ` the best ${service.title.toLowerCase()} in ${cityName}.`
            : ' professional, reliable waste removal.'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookNow}
            className="bg-white text-green-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition duration-200"
          >
            Book An Appointment
          </button>
          <a
            href="tel:+447749991862"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-500 px-8 py-4 rounded-full font-semibold text-lg transition duration-200"
          >
            Call: +44 7749991862
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;