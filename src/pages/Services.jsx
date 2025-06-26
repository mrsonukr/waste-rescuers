import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutTab from "../components/AboutTab";
import Customer from "../components/ui/Customer";
import Faq from "../components/ui/Faq";
import BookAppointment from "../components/ui/BookAppointment";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import BookingPopup from "../components/ui/BookingPopup";
import SEO from "../components/SEO";

// Import new components
import ServiceHero from "../components/services/ServiceHero";
import ServiceContent from "../components/services/ServiceContent";
import RegionalFeatures from "../components/services/RegionalFeatures";
import ServiceCTA from "../components/services/ServiceCTA";
import ServicesGrid from "../components/services/ServicesGrid";

// Import data
import { services } from "../data/servicesData";
import { regionalServices } from "../data/regionalData";

const Services = () => {
  const { serviceSlug, citySlug } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Check if we have a regional service page
  const regionalService = serviceSlug && citySlug && regionalServices[serviceSlug] && regionalServices[serviceSlug][citySlug];
  const selectedService = services.find(service => service.slug === serviceSlug);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Regional service page
  if (regionalService && selectedService) {
    const canonicalUrl = `https://wasterescuers.uk/services/${serviceSlug}/${citySlug}`;
    
    return (
      <div>
        <SEO 
          title={regionalService.seoTitle}
          description={regionalService.seoDescription}
          keywords={regionalService.seoKeywords}
          canonical={canonicalUrl}
        />
        
        <Header />
        
        <ServiceHero
          title={regionalService.heroTitle}
          description={regionalService.heroDescription}
          image={selectedService.image}
          onBookNow={openPopup}
          isRegional={true}
          cityName={regionalService.cityName}
        />
        
        <ServiceContent
          service={selectedService}
          isRegional={true}
          regionalData={regionalService}
        />

        <RegionalFeatures regionalData={regionalService} />

        <ServiceCTA
          service={selectedService}
          onBookNow={openPopup}
          isRegional={true}
          cityName={regionalService.cityName}
        />

        <ServicesGrid
          services={services}
          onBookNow={openPopup}
          isRegional={true}
          cityName={regionalService.cityName}
        />
        
        <AboutTab />
        <Customer />
        <Faq />
        <BookAppointment />
        <Footer />
        <WhatsAppButton />
        <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    );
  }

  // If no specific service is selected, show all services
  if (!selectedService) {
    return (
      <div>
        <SEO 
          title="Professional Waste Removal Services London - All Services"
          description="Complete range of waste removal services in London. Waste removal, mattress disposal, furniture removal, garden waste, man and van. Licensed and insured."
          keywords="waste removal services London, professional waste disposal, mattress removal, furniture removal, garden waste removal, man and van services, rubbish removal London"
          canonical="https://wasterescuers.uk/services"
        />
        
        <Header />
        
        {/* Hero Section without banner */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of waste removal services to cater to your needs. 
              Explore our comprehensive solutions below.
            </p>
          </div>
        </div>
        
        <ServicesGrid
          services={services}
          onBookNow={openPopup}
        />
        
        <AboutTab />
        <Customer />
        <Faq />
        <BookAppointment />
        <Footer />
        <WhatsAppButton />
        <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    );
  }

  // Show specific service page (non-regional)
  return (
    <div>
      <SEO 
        title={selectedService.seoTitle}
        description={selectedService.seoDescription}
        keywords={selectedService.seoKeywords}
        canonical={`https://wasterescuers.uk/services/${selectedService.slug}`}
      />
      
      <Header />
      
      <ServiceHero
        title={selectedService.title}
        description={selectedService.description}
        image={selectedService.image}
        onBookNow={openPopup}
      />
      
      <ServiceContent service={selectedService} />

      <ServiceCTA
        service={selectedService}
        onBookNow={openPopup}
      />

      <ServicesGrid
        services={services}
        onBookNow={openPopup}
      />
      
      <AboutTab />
      <Customer />
      <Faq />
      <BookAppointment />
      <Footer />
      <WhatsAppButton />
      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Services;