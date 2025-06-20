import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import BookingPopup from "../components/ui/BookingPopup";
import SEO from "../components/SEO";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaWhatsapp, 
  FaClock, 
  FaQuestionCircle,
  FaCalendarAlt,
  FaHeadset
} from "react-icons/fa";

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "+44",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const contactMethods = [
    {
      icon: <FaPhoneAlt className="text-green-600 text-3xl" />,
      title: "Phone Support",
      description: "Speak directly with our friendly team",
      contact: "+44 7749991862",
      action: "tel:+447749991862",
      available: "9 AM - 5 PM, Monday - Saturday"
    },
    {
      icon: <FaWhatsapp className="text-green-600 text-3xl" />,
      title: "WhatsApp",
      description: "Quick messages and instant quotes",
      contact: "+44 7749991862",
      action: "https://wa.me/447749991862?text=Hello",
      available: "24/7 Response within 2 hours"
    },
    {
      icon: <FaEnvelope className="text-blue-600 text-3xl" />,
      title: "Email Support",
      description: "Detailed inquiries and documentation",
      contact: "wasterescuers@gmail.com",
      action: "mailto:wasterescuers@gmail.com",
      available: "Response within 24 hours"
    },
    {
      icon: <FaCalendarAlt className="text-orange-600 text-3xl" />,
      title: "Online Booking",
      description: "Schedule your service instantly",
      contact: "Book Appointment",
      action: "booking",
      available: "Available 24/7"
    }
  ];

  const serviceAreas = [
    "Central London", "North London", "South London", "East London", "West London",
    "Camden", "Westminster", "Kensington & Chelsea", "Hammersmith & Fulham", "Wandsworth",
    "Lambeth", "Southwark", "Tower Hamlets", "Hackney", "Islington", "Haringey",
    "Barnet", "Enfield", "Waltham Forest", "Redbridge", "Newham", "Greenwich",
    "Lewisham", "Bromley", "Croydon", "Sutton", "Merton", "Kingston upon Thames",
    "Richmond upon Thames", "Hounslow", "Hillingdon", "Ealing", "Brent", "Harrow"
  ];

  const faqItems = [
    {
      question: "How quickly can you collect my waste?",
      answer: "We offer same-day or next-day service in most cases, depending on availability and location. For urgent collections, we also provide emergency services."
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free, no-obligation quotes for all our services. You can get an instant quote by calling us or using our online booking system."
    },
    {
      question: "What areas do you cover?",
      answer: "We cover all of Greater London and surrounding areas. If you're unsure whether we service your area, please contact us and we'll be happy to confirm."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed as Upper Tier Carriers (Registration: CBDU571009) and carry comprehensive public liability insurance for your peace of mind."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit/debit cards, bank transfers, and digital payments including Apple Pay and Google Pay for your convenience."
    }
  ];

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
    
    setContactForm({
      ...contactForm,
      phone: cleaned,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "name") {
      formattedValue = formatName(value);
    }

    setContactForm({
      ...contactForm,
      [name]: formattedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Thank you for your message! We'll get back to you within 24 hours.");
      setContactForm({
        name: "",
        email: "",
        phone: "+44",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactAction = (action) => {
    if (action === "booking") {
      openPopup();
    } else {
      window.open(action, action.startsWith('http') ? '_blank' : '_self');
    }
  };

  return (
    <div>
      <SEO 
        title="Contact Waste Rescuers - Get Your Free Quote Today"
        description="Contact Waste Rescuers for professional waste removal in London. Call +44 7749991862, email wasterescuers@gmail.com, or book online. Free quotes, same-day service available."
        keywords="contact waste rescuers, waste removal quote London, phone number, email, booking, customer service, waste disposal contact"
        canonical="https://wasterescuers.uk/contact"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact <span className="text-green-600">Waste Rescuers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to reclaim your space? Get in touch with London's most trusted waste removal company. 
            We're here to help with free quotes, expert advice, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447749991862"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition duration-200"
            >
              Call Now: +44 7749991862
            </a>
            <button
              onClick={openPopup}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-200"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Contact Methods */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <button
                  onClick={() => handleContactAction(method.action)}
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 mb-2 block"
                >
                  {method.contact}
                </button>
                <p className="text-xs text-gray-500">{method.available}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Service Quote">Service Quote</option>
                    <option value="Booking Question">Booking Question</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Please describe your waste removal needs or ask any questions..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition duration-200 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Business Hours */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                <FaClock className="mr-3" />
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency Services:</strong> Available 24/7 for urgent waste removal needs. 
                    Additional charges may apply for out-of-hours services.
                  </p>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-3" />
                Our Location
              </h3>
              <div className="text-gray-700 space-y-2">
                <p className="font-semibold">Waste Rescuers Ltd</p>
                <p>12 Audley Gardens</p>
                <p>Seven Kings, Ilford</p>
                <p>Essex, IG3 9LB</p>
                <p>United Kingdom</p>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> This is our registered office address. 
                    We provide mobile services across all of London and don't require 
                    customers to visit our office.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Support */}
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                <FaHeadset className="mr-3" />
                Customer Support
              </h3>
              <div className="text-gray-700 space-y-3">
                <p className="text-sm">
                  Our dedicated customer support team is here to help with any questions, 
                  concerns, or special requirements you may have.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm">Free quotes and consultations</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm">Booking assistance and scheduling</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm">Service updates and tracking</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm">After-service support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Areas We Serve</h2>
          <p className="text-center text-gray-600 mb-6">
            We provide professional waste removal services across all London boroughs and surrounding areas:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-3 text-center">
                <span className="text-green-800 font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-700">
              Don't see your area listed? <strong>Contact us anyway!</strong> We're constantly expanding 
              our service areas and may be able to accommodate your location.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
            <FaQuestionCircle className="mr-3 text-green-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4">
                  <h3 className="font-semibold text-gray-800">{item.question}</h3>
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Have a question that's not answered here?
            </p>
            <button
              onClick={openPopup}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition duration-200"
            >
              Ask Us Directly
            </button>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 mb-12">
          <h3 className="text-xl font-semibold text-red-600 mb-3">Emergency Waste Removal</h3>
          <p className="text-gray-700 mb-4">
            Need urgent waste removal outside of business hours? We offer 24/7 emergency services 
            for situations that can't wait, including:
          </p>
          <ul className="text-gray-700 space-y-1 mb-4">
            <li>• Blocked access due to waste accumulation</li>
            <li>• Health and safety hazards</li>
            <li>• Commercial emergencies</li>
            <li>• Post-incident cleanup</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+447749991862"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition duration-200 text-center"
            >
              Emergency Hotline: +44 7749991862
            </a>
            <a
              href="https://wa.me/447749991862?text=EMERGENCY%20-%20I%20need%20urgent%20waste%20removal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition duration-200 text-center"
            >
              WhatsApp Emergency
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 opacity-90">
            Don't let waste pile up any longer. Contact us today for your free quote 
            and experience London's best waste removal service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447749991862"
              className="bg-white text-green-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition duration-200"
            >
              Call Now: +44 7749991862
            </a>
            <button
              onClick={openPopup}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-200"
            >
              Book Online Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Contact;