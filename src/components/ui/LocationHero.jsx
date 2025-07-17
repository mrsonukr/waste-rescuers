import React from "react";

const LocationHero = ({ 
  title, 
  subtitle, 
  backgroundImage = "/assets/cleaner.webp",
  onBookAppointment 
}) => {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-xl md:text-3xl font-semibold capitalize mb-6">
          {title}
          {subtitle && (
            <>
              <br />
              <span className="text-xs">{subtitle}</span>
            </>
          )}
        </h1>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={onBookAppointment}
            className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-5 rounded-full transition duration-200"
          >
            Book Appointment
          </button>
          <button 
            onClick={onBookAppointment}
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-5 rounded-full transition duration-200"
          >
            Book Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationHero;