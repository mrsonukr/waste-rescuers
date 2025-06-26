import React from 'react';

const RegionalFeatures = ({ regionalData }) => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-8 mb-12 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Why Choose Waste Rescuers in {regionalData.cityName}?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
          <ul className="space-y-2 text-sm">
            <li>• Deep knowledge of {regionalData.cityName} area</li>
            <li>• Understanding of local waste regulations</li>
            <li>• Efficient routes and collection methods</li>
            <li>• Established relationships with local facilities</li>
            <li>• Quick response times across the region</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
          <ul className="space-y-2 text-sm">
            <li>• Licensed waste carriers (CBDU571009)</li>
            <li>• Fully insured and compliant operations</li>
            <li>• Experienced local team members</li>
            <li>• Transparent pricing with no hidden costs</li>
            <li>• Eco-friendly disposal methods</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegionalFeatures;