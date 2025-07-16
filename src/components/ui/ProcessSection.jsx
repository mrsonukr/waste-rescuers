import React from "react";

const ProcessSection = ({ title, steps }) => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div></div> {/* Empty left column for layout */}
        <div>
          <h3 className="text-xl font-semibold text-orange-600 mb-4">
            {title}
          </h3>
          <ul className="space-y-4 text-gray-800">
            {steps.map((step, index) => (
              <li key={index}>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;