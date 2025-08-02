import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import BookingPopup from "../components/ui/BookingPopup";
import BookAppointment from "../components/ui/BookAppointment";
import SEO from "../components/SEO";
import LocationHero from "../components/ui/LocationHero";
import ServiceSection from "../components/ui/ServiceSection";
import CustomerTypesSection from "../components/ui/CustomerTypesSection";
import InfoSection from "../components/ui/InfoSection";
import ProcessSection from "../components/ui/ProcessSection";
import { getLocationData } from "../data/locationData";

const LocationPage = () => {
  const { serviceSlug, location } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Get location data dynamically
  const locationData = getLocationData(serviceSlug, location);

  // If no data found, return 404 or redirect
  if (!locationData) {
    return (
      <div>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-gray-600">The requested service location is not available.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Custom FAQ component using location data
  const LocationFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className="mt-16 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {locationData.faq.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition font-medium flex justify-between items-center"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="pr-4">{item.question}</span>
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-gray-700 text-sm leading-relaxed"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <SEO {...locationData.seo} />
      <Header />
      
      <LocationHero 
        {...locationData.hero}
        onBookAppointment={openPopup}
      />

      <ServiceSection
        {...locationData.mainSection}
        phoneNumber={locationData.phoneNumber}
        onBookAppointment={openPopup}
      />

      <CustomerTypesSection
        title={locationData.serviceSection.title}
        description={locationData.serviceSection.content}
        customerTypes={locationData.customerTypes}
        phoneNumber={locationData.phoneNumber}
        onBookAppointment={openPopup}
      />

      {/* Additional sections based on location */}
      {locationData.infoSection && (
        <InfoSection {...locationData.infoSection} />
      )}

      {locationData.additionalSection && (
        <ServiceSection
          {...locationData.additionalSection}
          phoneNumber={locationData.phoneNumber}
          onBookAppointment={openPopup}
          showVideo={false}
        />
      )}

      {locationData.processSection && (
        <ProcessSection {...locationData.processSection} />
      )}

      {/* Dynamic FAQ from location data */}
      <LocationFaq />
      
      <BookAppointment />
      <Footer />
      <WhatsAppButton />
      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default LocationPage;