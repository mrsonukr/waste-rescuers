import React from "react";
import { CheckCircle } from "lucide-react";

const CustomerTypesSection = ({ 
  title, 
  description, 
  customerTypes, 
  phoneNumber = "+44-7749991862",
  onBookAppointment 
}) => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {title}
          </h2>
          <div className="text-gray-700 space-y-4">
            {(description || []).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-xl font-semibold text-orange-600 mb-4">
            Our customers include:
          </h3>
          <ul className="space-y-4 text-gray-800">
            {(customerTypes || []).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-green-500 text-white text-center py-3 px-5 rounded hover:bg-green-600 transition duration-200"
            >
              Call {phoneNumber}
            </a>
            <button 
              onClick={onBookAppointment}
              className="bg-orange-500 text-white py-3 px-5 rounded hover:bg-orange-600 transition duration-200"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTypesSection;