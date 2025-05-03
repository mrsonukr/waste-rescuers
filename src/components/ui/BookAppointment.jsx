
import React, { useState, useEffect, useRef } from "react";

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    postalCode: "",
    service: "",
    photos: null,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    "Household Waste",
    "Commercial Waste",
    "Garden Clearance",
    "Construction Waste",
    "Electronic Waste",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current); // Stop observing once visible
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
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
      observer.disconnect(); // Prevent memory leaks
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate UK phone number
    const phoneRegex = /^\+44[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      alert(
        "Please enter a valid UK phone number starting with +44 (e.g., +447123456789)"
      );
      return;
    }

    // Validate UK postal code
    const postalCodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
    if (!postalCodeRegex.test(form.postalCode)) {
      alert("Please enter a valid UK postal code (e.g., SW1A 1AA, EC1Y 8SY)");
      return;
    }

    // Form submission logic
    console.log("Form submitted:", form);
    alert("Appointment request submitted!");
    setForm({
      name: "",
      phone: "",
      email: "",
      postalCode: "",
      service: "",
      photos: null,
    });
  };

  return (
    <div id="book" className="bg-gradient-to-br mt-12 from-green-500 to-teal-600 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div
        ref={sectionRef}
        className={`w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 space-y-8 transform transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className={`text-3xl font-extrabold text-center text-gray-800 mb-6 transform transition-all duration-500 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Book Your Appointment
        </h2>
        <form onSubmit={handleSubmit}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 transform transition-all duration-500 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+447123456789"
                value={form.phone}
                onChange={handleChange}
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                pattern="\+44[0-9]{10}"
                title="Please enter a valid UK phone number starting with +44 (e.g., +447123456789)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                placeholder="SW1A 1AA"
                value={form.postalCode}
                onChange={handleChange}
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                pattern="[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}"
                title="Please enter a valid UK postal code (e.g., SW1A 1AA, EC1Y 8SY)"
              />
            </div>
          </div>

          <div
            className={`mt-6 transform transition-all duration-500 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Photos for Quotation (Optional)
            </label>
            <input
              type="file"
              name="photos"
              accept="image/*"
              multiple
              onChange={handleChange}
              className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div
            className={`mt-6 transform transition-all duration-500 ease-out delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Service
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">-- Select a service --</option>
              {services.map((service, idx) => (
                <option key={idx} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className={`mt-8 w-full py-3 px-4 bg-green-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transform transition-all duration-200  ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Submit Appointment Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;