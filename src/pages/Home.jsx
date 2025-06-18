import React, { useState } from "react";
import Header from "../components/Header";
import ListCard from "../components/ui/ListCard";
import Footer from "../components/Footer";
import ContactCard from "../components/ui/ContactCard";
import SolutionCard from "../components/ui/SolutionCard";
import AboutTab from "../components/AboutTab";
import Faq from "../components/ui/Faq";
import BookAppointment from "../components/ui/BookAppointment";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import BookingPopup from "../components/ui/BookingPopup";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const services = [
    {
      icon: "/assets/waste-removal.png",
      title: "Waste Removal",
      description:
        "Fast and eco-friendly waste removal for households, businesses, and construction sites.",
    },
    {
      icon: "/assets/rubbish.png",
      title: "Rubbish Removal",
      description:
        "Clear out clutter with our comprehensive rubbish removal solutions.",
    },
    {
      icon: "/assets/man-van.png",
      title: "Man and Van",
      description:
        "Reliable man and van services for quick and efficient waste transport.",
    },
    {
      icon: "/assets/mattress.png",
      title: "Mattress Removal",
      description:
        "Hassle-free mattress disposal with professional and responsible recycling.",
    },
    {
      icon: "/assets/garden.png",
      title: "Garden Waste Removal",
      description:
        "Hassle-Free Garden Waste Removal, Revitalizing Your Outdoors.",
    },
    {
      icon: "/assets/furniture.png",
      title: "Furniture Removal",
      description:
        "Professional furniture removal for homes and offices, big or small.",
    },
  ];

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <Header />
      
      {/* Hero Section - Attractive UI without image banners */}
      <main>
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-orange-500">Waste Rescuers</span>
                <br />
                <span className="text-green-600">Fast & Affordable</span>
                <br />
                <span className="text-gray-800">Waste Removal</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
                Upper Tier Carrier Registration from the Environment Agency
                <span className="font-semibold text-green-600"> CBDU571009</span>
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                London&apos;s best waste removal company - trusted by 2,240+ customers
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  onClick={openPopup}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Book waste removal appointment"
                >
                  Book Now
                </button>
                <a
                  href="tel:+447749991862"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                  aria-label="Call for immediate booking"
                >
                  Call Now For Booking
                </a>
              </div>
              
              {/* Trust Indicators - Using actual statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-green-600 mb-2">2,240+</div>
                  <div className="text-gray-700 font-medium">Satisfied Customers</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">3,600+</div>
                  <div className="text-gray-700 font-medium text-sm">Waste Removed & Disposed Off Tonnes</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-700 font-medium">Jobs Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="relative z-10 -mt-12 flex flex-col md:flex-row justify-center items-stretch w-full max-w-7xl mx-auto px-4 gap-3 md:gap-4">
          <ListCard />
          <ContactCard />
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="mt-24 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0"
        >
          {/* Text Section */}
          <div className="w-full md:w-auto text-left">
            <p className="uppercase text-sm sm:text-base font-semibold">
              Our Services
            </p>
            <h2 className="text-xl sm:text-2xl mt-1 text-green-500 font-bold">
              Tailored Solutions According to Your Needs
            </h2>
          </div>

          {/* Button Section */}
          <div className="w-full md:w-auto text-left md:text-right">
            <button
              onClick={openPopup}
              className="uppercase bg-orange-500 py-4 font-semibold px-5 text-white rounded-xl hover:bg-orange-600 transition duration-200 text-xs sm:text-sm w-full md:w-auto text-center block"
              aria-label="Book an appointment for waste removal"
            >
              Book An Appointment
            </button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {services.map((service, index) => (
              <SolutionCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </section>
        
        <AboutTab />
        <Faq />
        <BookAppointment />
      </main>
      
      <Footer />
      <WhatsAppButton />
      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Home;