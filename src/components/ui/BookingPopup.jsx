import React, { useState, useEffect } from "react";

const BookingPopup = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "+44",
    email: "",
    postalCode: "",
    service: "",
  });
  const [services, setServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Fetch services from API when popup opens
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

    if (isOpen) {
      fetchServices();
    }
  }, [isOpen]);

  const formatPostalCode = (value) => {
    let cleaned = value.replace(/\s/g, "").toUpperCase();
    if (cleaned.length >= 5) {
      cleaned = cleaned.slice(0, -3) + " " + cleaned.slice(-3);
    }
    return cleaned;
  };

  const formatName = (value) => {
    return value
      .toLowerCase()
      .replace(/(^|\s)\w/g, (letter) => letter.toUpperCase());
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    let cleaned = value.replace(/[^\d+]/g, "");
    if (!cleaned.startsWith("+44") || cleaned.length < 3) {
      cleaned = "+44";
    }
    cleaned = cleaned.slice(0, 13);
    setForm({
      ...form,
      phone: cleaned,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "postalCode") {
      formattedValue = formatPostalCode(value);
    } else if (name === "name") {
      formattedValue = formatName(value);
    }

    setForm({
      ...form,
      [name]: formattedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneRegex = /^\+44[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Please enter a valid UK phone number (e.g., +447123456789)");
      setIsSubmitting(false);
      return;
    }

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
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Failed to submit appointment: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg h-fit max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 sm:p-6 rounded-t-xl flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Book Your Appointment</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-1"
              aria-label="Close popup"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="block w-full px-3 py-2.5 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+447123456789"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  className="block w-full px-3 py-2.5 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
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
                  className="block w-full px-3 py-2.5 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code *
                </label>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="SW1A 1AA"
                  value={form.postalCode}
                  onChange={handleChange}
                  className="block w-full px-3 py-2.5 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required
                  pattern="[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}"
                  title="Please enter a valid UK postal code (e.g., SW1A 1AA)"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="block w-full px-3 py-2.5 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent appearance-none bg-white"
                  required
                  disabled={isSubmitting || services.length === 0}
                >
                  <option value="">
                    {services.length === 0 ? "Loading services..." : "-- Select a service --"}
                  </option>
                  {services.map((service) => (
                    <option key={service._id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4 border-t border-gray-100 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 px-4 text-sm bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`flex-1 py-2.5 px-4 text-sm bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
