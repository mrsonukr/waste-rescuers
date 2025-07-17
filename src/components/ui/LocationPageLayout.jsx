import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import WhatsAppButton from "./WhatsAppButton";
import BookingPopup from "./BookingPopup";
import BookAppointment from "./BookAppointment";
import SEO from "../SEO";
import LocationHero from "./LocationHero";
import ServiceSection from "./ServiceSection";
import CustomerTypesSection from "./CustomerTypesSection";
import InfoSection from "./InfoSection";
import ProcessSection from "./ProcessSection";
import UniversalFaq from "./UniversalFaq";

const LocationPageLayout = ({ 
  locationData, 
  faqComponent: FaqComponent // Keep for backward compatibility
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

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

      {/* Use UniversalFaq with location-specific data, fallback to custom component */}
      {FaqComponent ? (
        <FaqComponent />
      ) : (
        <UniversalFaq faqKey={locationData.faqKey || "general"} />
      )}
      <BookAppointment />
      <Footer />
      <WhatsAppButton />
      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default LocationPageLayout;