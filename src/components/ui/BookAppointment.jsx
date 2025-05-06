import React, { useState, useEffect, useRef } from "react";

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "+44",
    email: "",
    postalCode: "",
    service: "",
  });
  const [services, setServices] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://quarrelsome-wendye-mrsonukr-1c5781f4.koyeb.app/api/services");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
        alert("Failed to load services. Please try again later.");
      }
    };
    fetchServices();
  }, []);

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  const formatPostalCode = (value) => {
    // Remove all spaces and convert to uppercase
    let cleaned = value.replace(/\s/g, "").toUpperCase();
    // Add space before last 3 characters if length >= 5
    if (cleaned.length >= 5) {
      cleaned = cleaned.slice(0, -3) + " " + cleaned.slice(-3);
    }
    return cleaned;
  };

  const formatPhoneNumber = (value) => {
    // Ensure +44 prefix
    let cleaned = value.replace(/[^\d+]/g, "");
    if (!cleaned.startsWith("+44")) {
      cleaned = "+44" + cleaned.replace(/^\+44/, "");
    }
    // Limit to +44 followed by 10 digits
    return cleaned.slice(0, 13);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "postalCode") {
      formattedValue = formatPostalCode(value);
    } else if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
    }

    setForm({
      ...form,
      [name]: formattedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate UK phone number
    const phoneRegex = /^\+44[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Please enter a valid UK phone number (e.g., +447123456789)");
      setIsSubmitting(false);
      return;
    }

    // Validate UK postal code
    const postalCodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/;
    if (!postalCodeRegex.test(form.postalCode)) {
      alert("Please enter a valid UK postal code (e.g., SW1A 1AA)");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://quarrelsome-wendye-mrsonukr-1c5781f4.koyeb.app/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit appointment");
      }

      alert("Appointment request submitted successfully!");
      setForm({
        name: "",
        phone: "+44",
        email: "",
        postalCode: "",
        service: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Failed to submit appointment: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="book"
      className="bg-gradient-to-br mt-12 from-green-500 to-teal-600 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10"
    >
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
        <div>
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
                disabled={isSubmitting}
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
                title="Please enter a valid UK phone number (e.g., +447123456789)"
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                title="Please enter a valid UK postal code (e.g., SW1A 1AA)"
                disabled={isSubmitting}
              />
            </div>
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
              className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23666666%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[length:1.2em] bg-[right_0.75rem_center] text-gray-700"
              required
              disabled={isSubmitting}
            >
              <option value="">-- Select a service --</option>
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className={`mt-8 w-full py-3 px-4 bg-green-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transform transition-all duration-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;