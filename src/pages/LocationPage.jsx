import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
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
import { getLocationPageData, isValidLocation } from "../data/locationPageData";
import { getServiceLocationData } from "../data/serviceLocationData";

const LocationPage = () => {
  const { serviceSlug, location } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Check if the location is valid
  if (!isValidLocation(serviceSlug, location)) {
    return <Navigate to="/404" replace />;
  }

  // Get location-specific data
  const locationData = getLocationPageData(serviceSlug, location);
  
  // Get service-specific data
  const serviceData = getServiceLocationData(serviceSlug);

  // Format location name for display (capitalize first letter)
  const formatLocationName = (locationName) => {
    // Handle hyphenated names like "milton-keynes"
    return locationName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Combined data structure using service-specific content
  const pageData = {
    seo: locationData.seo,
    hero: {
      title: `${serviceData.hero.title} ${formatLocationName(location)}`,
      subtitle: serviceData.hero.subtitle,
      backgroundImage: serviceData.hero.backgroundImage,
    },
    mainSection: {
      title: `${serviceData.mainSection.title} in ${formatLocationName(location)}`,
      content: [
        `${serviceData.mainSection.content[0]} We have helped hundreds of customers throughout ${formatLocationName(location)} and the surrounding areas.`,
        `${serviceData.mainSection.content[1]} First established in 2020, Waste Rescuers Ltd has grown to be one of the most trusted service providers in the ${formatLocationName(location)} area.`,
      ],
      videoUrl: serviceData.mainSection.videoUrl,
      thumbnailUrl: serviceData.mainSection.thumbnailUrl,
    },
    serviceSection: {
      title: `${serviceData.serviceSection.title} in ${formatLocationName(location)}`,
      content: serviceData.serviceSection.content,
    },
    customerTypes: serviceData.customerTypes,
    phoneNumber: "+44-7749991862",
    infoSection: {
      title: "Waste Carrier Licence",
      content: [
        "From January 2014, new regulations mean that companies transporting waste as part of their business (whether it's their waste or someone else's) have to register for a Waste Carriers Licence. This includes contractors like Waste Rescuers but also any company that conducts water discharge activities. We highly recommend giving us a call to see what we can do for you today to avoid costly fines.",
        "Check out our fleet vehicles ready to tackle your waste management:",
      ],
      image: "/assets/waste-carrier.jpg",
      imageAlt: "Waste Carrier Truck",
      links: [
        { text: "Professional Waste Collection", url: "#" },
        { text: "Licensed Waste Carriers", url: "#" },
        { text: "Eco-Friendly Disposal", url: "#" },
        { text: "Same Day Service", url: "#" },
      ],
    },
    faq: serviceData.faqData.map(item => ({
      question: item.question.includes('do you cover') 
        ? item.question.replace('do you cover', `do you cover in ${formatLocationName(location)}`)
        : item.question,
      answer: item.answer.includes('across all areas') 
        ? item.answer.replace('across all areas', `across all areas of ${formatLocationName(location)}`)
        : item.answer
    })),
  };

  // Custom FAQ component using location data
  const LocationFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className="mt-16 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions - {formatLocationName(location)}
        </h2>
        <div className="space-y-4">
          {pageData.faq.map((item, index) => (
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
      <SEO 
        title={pageData.seo.title}
        description={pageData.seo.description}
        keywords={pageData.seo.keywords}
        canonical={pageData.seo.canonical}
      />
      <Header />
      
      <LocationHero 
        {...pageData.hero}
        onBookAppointment={openPopup}
      />

      <ServiceSection
        {...pageData.mainSection}
        phoneNumber={pageData.phoneNumber}
        onBookAppointment={openPopup}
      />

      <CustomerTypesSection
        title={pageData.serviceSection.title}
        description={pageData.serviceSection.content}
        customerTypes={pageData.customerTypes}
        phoneNumber={pageData.phoneNumber}
        onBookAppointment={openPopup}
      />

      {/* Info Section */}
      <InfoSection {...pageData.infoSection} />

      {/* Dynamic FAQ */}
      <LocationFaq />
      
      <BookAppointment />
      <Footer />
      <WhatsAppButton />
      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default LocationPage;