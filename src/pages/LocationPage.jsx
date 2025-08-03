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
import ProcessSection from "../components/ui/ProcessSection";
import { getLocationPageData, isValidLocation } from "../data/locationPageData";

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

  // Format location name for display (capitalize first letter)
  const formatLocationName = (locationName) => {
    // Handle hyphenated names like "milton-keynes"
    return locationName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Static data structure
  const staticData = {
    seo: locationData.seo,
    hero: {
      title: `Rubbish and Waste Removal ${formatLocationName(location)}`,
      subtitle: "Call Now for a free same-day quotation",
      backgroundImage: "/assets/cleaner.webp",
    },
    mainSection: {
      title: `Waste Removal ${formatLocationName(location)} by Waste Rescuers Ltd.`,
      content: [
        `We have helped hundreds of Domestic & Commercial customers to tackle their waste removal jobs throughout ${formatLocationName(location)} and the surrounding areas.`,
        `First established in 2020, Waste Rescuers Ltd has grown to be one of the largest and most reviewed Waste Removal Companies. Don't take our word for it; check out our google reviews. Waste Rescuers Ltd can carry out jobs from a single item to multiple truck loads from anywhere in the ${formatLocationName(location)} area.`,
      ],
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnailUrl: "https://cdn.prod.website-files.com/616e938268c8f0a92cb2b540/626b2105eca8a62c25bbd9f0_youtube%20thumbnail%20size%20and%20best%20practices%20by%20veed%20studio.jpg",
    },
    serviceSection: {
      title: `Waste Removal ${formatLocationName(location)} Service`,
      content: [
        "We have listed some of the reasons why our customers use Waste Rescuers Below.",
        "CRB Checked Staff Members. Fully Insured & Uniformed. New Sign Written Vans. Fully Licensed. Experienced & Trained.",
        `Our highly skilled and motivated workforce are experienced enough to work on varying specifications of Waste Removal ${formatLocationName(location)}. We have carried out 100s of Waste Removal jobs in the area for both domestic and commercial customers.`,
        "If you need any more help please give us call. Our office is open 6 days per week and would be more than happy to assist you with all your questions.",
      ],
    },
    customerTypes: [
      "Domestic Households: Single Items to Full Loads.",
      "Estate & Letting Agents.",
      "Commercial Landlords & Landowners.",
      "Shops, Bars & Restaurants.",
      "Refurbishment Companies, Shop Fitters, Builders Etc.",
    ],
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
    faq: [
      {
        question: `What types of waste do you remove in ${formatLocationName(location)}?`,
        answer: "We remove a wide range of waste types including household rubbish, garden waste, office clearance, construction debris, bulky items, and electronic waste. We also consider hazardous waste removal on request.",
      },
      {
        question: `How quickly can you provide waste removal in ${formatLocationName(location)}?`,
        answer: `We offer same-day and next-day waste removal services across most areas of ${formatLocationName(location)}, subject to availability. For urgent jobs, we recommend booking as early as possible.`,
      },
      {
        question: `How do I book a waste removal service in ${formatLocationName(location)} with Waste Rescuers?`,
        answer: "Booking is simple. You can call us directly, fill out the quote form on our website, or use our online booking system. Just provide the waste details, location, and preferred date — we'll handle the rest.",
      },
      {
        question: `Do you offer waste removal services for commercial properties in ${formatLocationName(location)}?`,
        answer: `Yes, we provide tailored waste removal solutions for offices, retail stores, landlords, estate agents, construction sites, and other commercial premises across ${formatLocationName(location)}.`,
      },
      {
        question: `What areas in ${formatLocationName(location)} do you cover?`,
        answer: `We cover all Greater ${formatLocationName(location)} boroughs including Central ${formatLocationName(location)}, North, South, East, and West ${formatLocationName(location)}. Whether you're in a residential area or a busy commercial zone, we've got you covered.`,
      },
    ],
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
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {staticData.faq.map((item, index) => (
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
        title={staticData.seo.title}
        description={staticData.seo.description}
        keywords={staticData.seo.keywords}
        canonical={staticData.seo.canonical}
      />
      <Header />
      
      <LocationHero 
        {...staticData.hero}
        onBookAppointment={openPopup}
      />

      <ServiceSection
        {...staticData.mainSection}
        phoneNumber={staticData.phoneNumber}
        onBookAppointment={openPopup}
      />

      <CustomerTypesSection
        title={staticData.serviceSection.title}
        description={staticData.serviceSection.content}
        customerTypes={staticData.customerTypes}
        phoneNumber={staticData.phoneNumber}
        onBookAppointment={openPopup}
      />

      {/* Info Section */}
      <InfoSection {...staticData.infoSection} />

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