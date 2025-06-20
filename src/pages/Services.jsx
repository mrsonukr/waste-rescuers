import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SolutionCard from "../components/ui/SolutionCard";
import AboutTab from "../components/AboutTab";
import Customer from "../components/ui/Customer";
import Faq from "../components/ui/Faq";
import BookAppointment from "../components/ui/BookAppointment";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import BookingPopup from "../components/ui/BookingPopup";
import SEO from "../components/SEO";

const Services = () => {
  const { serviceSlug } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const services = [
    {
      slug: "waste-removal",
      icon: "/assets/waste-removal.png",
      title: "Waste Removal",
      description: "Fast and eco-friendly waste removal for households, businesses, and construction sites.",
      image: "/assets/waste-holder.webp",
      seoTitle: "Professional Waste Removal Services London - Same Day Collection",
      seoDescription: "Expert waste removal services in London. Licensed waste carriers with eco-friendly disposal. Same-day collection available. Call +44 7749991862 for free quote.",
      seoKeywords: "waste removal London, professional waste disposal, same day waste collection, licensed waste carriers, eco-friendly waste removal",
      detailedContent: {
        overview: "Our comprehensive waste removal service is designed to handle all types of waste efficiently and responsibly. We understand that waste accumulation can be overwhelming, whether it's from daily household activities, office cleanouts, or construction projects.",
        features: [
          "Same-day and next-day collection available",
          "Eco-friendly disposal methods with maximum recycling",
          "Licensed waste carriers with full insurance coverage",
          "Transparent pricing with no hidden fees",
          "Professional uniformed staff",
          "Flexible scheduling to suit your needs"
        ],
        process: [
          "Contact us for a free quote",
          "Schedule a convenient collection time",
          "Our team arrives and handles everything",
          "Waste is sorted and disposed of responsibly",
          "You receive confirmation of proper disposal"
        ],
        wasteTypes: [
          "Household waste and general rubbish",
          "Office and commercial waste",
          "Construction and renovation debris",
          "Electronic waste (WEEE)",
          "Cardboard and packaging materials",
          "Mixed recyclable materials"
        ]
      }
    },
    {
      slug: "mattress-removal",
      icon: "/assets/mattress.png",
      title: "Mattress Removal",
      description: "Hassle-free mattress disposal with professional and responsible recycling.",
      image: "/assets/sofa-holder.webp",
      seoTitle: "Mattress Removal London - Professional Mattress Disposal Service",
      seoDescription: "Professional mattress removal and disposal in London. Eco-friendly mattress recycling service. Same-day collection available. Book online or call now.",
      seoKeywords: "mattress removal London, mattress disposal, mattress recycling, old mattress collection, eco-friendly mattress disposal",
      detailedContent: {
        overview: "Getting rid of old mattresses can be challenging due to their size and disposal requirements. Our mattress removal service takes care of everything, ensuring your old mattress is disposed of responsibly and in compliance with environmental regulations.",
        features: [
          "Collection from any location in your property",
          "Mattress recycling to reduce landfill waste",
          "Same-day collection available",
          "No heavy lifting required from you",
          "Competitive fixed pricing",
          "Environmentally responsible disposal"
        ],
        process: [
          "Book your mattress collection online or by phone",
          "We provide a 2-hour arrival window",
          "Our team collects from anywhere in your property",
          "Mattresses are taken to certified recycling facilities",
          "You receive disposal certificate if required"
        ],
        wasteTypes: [
          "Single, double, and king-size mattresses",
          "Memory foam and spring mattresses",
          "Sofa beds and futon mattresses",
          "Children's mattresses and cot mattresses",
          "Commercial and hotel mattresses",
          "Damaged or stained mattresses"
        ]
      }
    },
    {
      slug: "man-and-van",
      icon: "/assets/man-van.png",
      title: "Man and Van",
      description: "Reliable man and van services for quick and efficient waste transport.",
      image: "/assets/man.jpg",
      seoTitle: "Man and Van Services London - Reliable Waste Transport",
      seoDescription: "Professional man and van services in London for waste removal and transport. Experienced drivers, various van sizes available. Flexible booking times.",
      seoKeywords: "man and van London, waste transport, van hire with driver, reliable man and van, waste removal transport",
      detailedContent: {
        overview: "Our man and van service provides flexible, reliable transportation for your waste removal needs. Whether you need a one-off collection or regular waste transport, our experienced drivers and well-maintained vehicles ensure your waste reaches its destination safely.",
        features: [
          "Experienced and uniformed drivers",
          "Various van sizes available",
          "Flexible booking times including evenings and weekends",
          "Fully insured vehicles and drivers",
          "Loading and unloading assistance included",
          "Competitive hourly and fixed rates"
        ],
        process: [
          "Choose your preferred van size and time slot",
          "Our driver arrives at your specified location",
          "We help load your waste safely and securely",
          "Transport to appropriate disposal or recycling facility",
          "Unloading and proper disposal handled for you"
        ],
        wasteTypes: [
          "Bulk household items and furniture",
          "Garden waste and green materials",
          "Office clearance items",
          "Construction waste and rubble",
          "Appliances and white goods",
          "Mixed waste loads"
        ]
      }
    },
    {
      slug: "rubbish-removal",
      icon: "/assets/rubbish.png",
      title: "Rubbish Removal",
      description: "Clear out clutter with our comprehensive rubbish removal solutions.",
      image: "/assets/waste-holder.webp",
      seoTitle: "Rubbish Removal London - Professional Clutter Clearance Service",
      seoDescription: "Professional rubbish removal and clutter clearance in London. Complete property clearances available. Eco-friendly disposal with recycling. Free quotes.",
      seoKeywords: "rubbish removal London, clutter clearance, property clearance, junk removal, household rubbish collection",
      detailedContent: {
        overview: "Our rubbish removal service is perfect for clearing out accumulated clutter from homes, offices, or commercial spaces. We handle everything from small bag collections to full property clearances, ensuring all rubbish is disposed of responsibly.",
        features: [
          "Complete property clearances available",
          "No job too big or small",
          "Sorting and recycling included in service",
          "Clean-up after collection",
          "Flexible collection times",
          "Waste transfer notes provided"
        ],
        process: [
          "Free assessment and quotation",
          "Scheduled collection at your convenience",
          "Our team sorts recyclables from general waste",
          "All rubbish loaded and removed efficiently",
          "Site left clean and tidy"
        ],
        wasteTypes: [
          "General household rubbish",
          "Paper and cardboard waste",
          "Plastic containers and packaging",
          "Old clothing and textiles",
          "Books and magazines",
          "Small household items and bric-a-brac"
        ]
      }
    },
    {
      slug: "garden-waste-removal",
      icon: "/assets/garden.png",
      title: "Garden Waste Removal",
      description: "Hassle-Free Garden Waste Removal, Revitalizing Your Outdoors.",
      image: "/assets/jcb.jpg",
      seoTitle: "Garden Waste Removal London - Green Waste Collection Service",
      seoDescription: "Professional garden waste removal in London. Green waste collection and composting. Tree cutting waste, grass cuttings, hedge trimmings. Same-day service available.",
      seoKeywords: "garden waste removal London, green waste collection, tree cutting waste, grass cuttings removal, hedge trimming disposal",
      detailedContent: {
        overview: "Transform your outdoor space with our comprehensive garden waste removal service. From seasonal cleanups to ongoing maintenance waste, we handle all types of garden debris, helping you maintain a beautiful and tidy outdoor environment.",
        features: [
          "Seasonal garden clearances",
          "Tree and hedge cutting waste removal",
          "Composting and green waste recycling",
          "Same-day collection available",
          "No garden access issues - we collect from anywhere",
          "Environmentally friendly disposal methods"
        ],
        process: [
          "Schedule your garden waste collection",
          "Our team assesses the waste volume",
          "All garden waste is collected and loaded",
          "Materials taken to licensed composting facilities",
          "Your garden is left clean and ready to enjoy"
        ],
        wasteTypes: [
          "Grass cuttings and lawn waste",
          "Tree branches and hedge trimmings",
          "Leaves and seasonal garden debris",
          "Plant pots and garden containers",
          "Old garden furniture and tools",
          "Soil and turf removal"
        ]
      }
    },
    {
      slug: "furniture-removal",
      icon: "/assets/furniture.png",
      title: "Furniture Removal",
      description: "Professional furniture removal for homes and offices, big or small.",
      image: "/assets/sofa-holder.webp",
      seoTitle: "Furniture Removal London - Professional Furniture Disposal Service",
      seoDescription: "Expert furniture removal and disposal in London. Sofa removal, office furniture clearance, charity donations. Professional dismantling service available.",
      seoKeywords: "furniture removal London, sofa removal, office furniture clearance, furniture disposal, charity furniture donation",
      detailedContent: {
        overview: "Whether you're moving, renovating, or simply updating your space, our furniture removal service handles pieces of all sizes. We ensure careful handling and responsible disposal, with many items being donated or recycled rather than sent to landfill.",
        features: [
          "Careful handling of all furniture types",
          "Donation to charities where possible",
          "Dismantling service if required",
          "Collection from any floor level",
          "Furniture recycling and upcycling",
          "Commercial office furniture clearances"
        ],
        process: [
          "Book your furniture collection appointment",
          "Our team arrives with necessary equipment",
          "Furniture is carefully removed from your property",
          "Items assessed for donation or recycling opportunities",
          "Responsible disposal with minimal environmental impact"
        ],
        wasteTypes: [
          "Sofas, chairs, and upholstered furniture",
          "Tables, desks, and wooden furniture",
          "Wardrobes and bedroom furniture",
          "Office furniture and filing cabinets",
          "Dining sets and kitchen furniture",
          "Damaged or broken furniture pieces"
        ]
      }
    },
  ];

  const selectedService = services.find(
    (service) => service.slug === serviceSlug
  );

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // If no specific service is selected, show all services
  if (!selectedService) {
    return (
      <div>
        <SEO 
          title="Professional Waste Removal Services London - All Services"
          description="Complete range of waste removal services in London. Waste removal, mattress disposal, furniture removal, garden waste, man and van. Licensed and insured."
          keywords="waste removal services London, professional waste disposal, mattress removal, furniture removal, garden waste removal, man and van services"
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
        
        <div
          id="services"
          className="mt-12 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0"
        >
          <div className="w-full md:w-auto text-left">
            <p className="uppercase text-sm sm:text-base font-semibold">
              Our Services
            </p>
            <p className="text-xl sm:text-2xl mt-1 text-green-500 font-bold">
              Tailored Solutions According to Your Needs
            </p>
          </div>
          <div className="w-full md:w-auto text-left md:text-right">
            <button
              onClick={openPopup}
              className="uppercase bg-orange-500 py-4 font-semibold px-5 text-white rounded-xl hover:bg-orange-600 transition duration-200 text-xs sm:text-sm w-full md:w-auto text-center block"
            >
              Book An Appointment
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {services.map((service, index) => (
              <SolutionCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
        
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

  // Show specific service page
  return (
    <div>
      <SEO 
        title={selectedService.seoTitle}
        description={selectedService.seoDescription}
        keywords={selectedService.seoKeywords}
        canonical={`https://wasterescuers.uk/services/${selectedService.slug}`}
      />
      
      <Header />
      
      {/* Service Hero Section with Image */}
      <div className="relative bg-gradient-to-br from-green-500 to-teal-600 py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {selectedService.title}
            </h1>
            <p className="text-xl mb-6 opacity-90">
              {selectedService.description}
            </p>
            <button
              onClick={openPopup}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-200"
            >
              Book Now
            </button>
          </div>
          <div className="relative">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Detailed Service Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Service Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {selectedService.detailedContent.overview}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Features */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Features
              </h3>
              <ul className="space-y-3">
                {selectedService.detailedContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4 flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">→</span>
                How It Works
              </h3>
              <ol className="space-y-3">
                {selectedService.detailedContent.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Waste Types */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">📋</span>
              What We Handle
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedService.detailedContent.wasteTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
                  <span className="text-blue-800 font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white opacity-90 mb-6">
            Book your {selectedService.title.toLowerCase()} service today and experience professional, reliable waste removal.
          </p>
          <button
            onClick={openPopup}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition duration-200"
          >
            Book An Appointment
          </button>
        </div>
      </div>

      {/* All Services Section */}
      <div
        id="all-services"
        className="mt-12 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0"
      >
        <div className="w-full md:w-auto text-left">
          <p className="uppercase text-sm sm:text-base font-semibold">
            Our Services
          </p>
          <p className="text-xl sm:text-2xl mt-1 text-green-500 font-bold">
            Tailored Solutions According to Your Needs
          </p>
        </div>
        <div className="w-full md:w-auto text-left md:text-right">
          <button
            onClick={openPopup}
            className="uppercase bg-orange-500 py-4 font-semibold px-5 text-white rounded-xl hover:bg-orange-600 transition duration-200 text-xs sm:text-sm w-full md:w-auto text-center block"
          >
            Book An Appointment
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {services.map((service, index) => (
            <SolutionCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
      
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