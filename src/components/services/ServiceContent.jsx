import React from 'react';

const ServiceContent = ({ service, isRegional = false, regionalData = null }) => {
  const { detailedContent } = service;
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {isRegional ? `Professional ${service.title} in ${regionalData.cityName}` : 'Service Overview'}
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {isRegional ? regionalData.localContent : detailedContent.overview}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Features */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
              {isRegional ? `${regionalData.cityName} Specialist Features` : 'Key Features'}
            </h3>
            <ul className="space-y-3">
              {(isRegional ? regionalData.localFeatures : detailedContent.features).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4 flex items-center">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">→</span>
              {isRegional ? `How It Works in ${regionalData.cityName}` : 'How It Works'}
            </h3>
            <ol className="space-y-3">
              {detailedContent.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Service Areas or Waste Types */}
        {isRegional ? (
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">📍</span>
              Areas We Serve in {regionalData.cityName}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {regionalData.serviceAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <span className="text-blue-800 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">📋</span>
              What We Handle
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {detailedContent.wasteTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <span className="text-blue-800 font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceContent;