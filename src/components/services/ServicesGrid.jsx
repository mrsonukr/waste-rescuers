import React from 'react';
import SolutionCard from '../ui/SolutionCard';

const ServicesGrid = ({ 
  services, 
  onBookNow, 
  title = "Our Services",
  subtitle = "Tailored Solutions According to Your Needs",
  isRegional = false,
  cityName = null
}) => {
  return (
    <>
      <div
        id="all-services"
        className="mt-12 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0"
      >
        <div className="w-full md:w-auto text-left">
          <p className="uppercase text-sm sm:text-base font-semibold">
            {title}
          </p>
          <p className="text-xl sm:text-2xl mt-1 text-green-500 font-bold">
            {isRegional ? `More Services Available in ${cityName}` : subtitle}
          </p>
        </div>
        <div className="w-full md:w-auto text-left md:text-right">
          <button
            onClick={onBookNow}
            className="uppercase bg-orange-500 py-4 font-semibold px-5 text-white rounded-xl hover:bg-orange-600 transition duration-200 text-xs sm:text-sm w-full md:w-auto text-center block"
          >
            Book An Appointment
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {services.map((service, index) => (
            <SolutionCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;