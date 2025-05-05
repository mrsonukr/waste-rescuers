import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SolutionCard from "../components/ui/SolutionCard";
import AboutTab from "../components/AboutTab";
import Customer from "../components/ui/Customer";
import Faq from "../components/ui/Faq";
import BookAppointment from "../components/ui/BookAppointment";
import ServiceHero from "../components/ui/ServiceHero";

const Services = () => {
  const { serviceSlug } = useParams(); // Extract the service slug from the URL

  const services = [
    {
      slug: "waste-removal",
      icon: "/assets/waste-removal.png",
      title: "Waste Removal",
      description:
        "Fast and eco-friendly waste removal for households, businesses, and construction sites.",
    },
    {
      slug: "mattress-removal",
      icon: "/assets/mattress.png",
      title: "Sofa Removal",
      description:
        "Hassle-free sofa disposal with professional and responsible recycling.",
    },
    {
      slug: "man-and-van",
      icon: "/assets/man-van.png",
      title: "Man and Van",
      description:
        "Reliable man and van services for quick and efficient waste transport.",
    },
    {
      slug: "rubbish-removal",
      icon: "/assets/rubbish.png",
      title: "Rubbish Removal",
      description:
        "Clear out clutter with our comprehensive rubbish removal solutions.",
    },
    {
      slug: "garden-waste-removal",
      icon: "/assets/garden.png",
      title: "Garden Waste Removal",
      description:
        "Hassle-Free Garden Waste Removal, Revitalizing Your Outdoors.",
    },
    {
      slug: "furniture-removal",
      icon: "/assets/furniture.png",
      title: "Furniture Removal",
      description:
        "Professional furniture removal for homes and offices, big or small.",
    },
  ];

  // Find the service based on the slug from the URL
  const selectedService = services.find(
    (service) => service.slug === serviceSlug
  ) || {
    title: "Welcome to Our Services",
    description:
      "We offer a wide range of services to cater to your needs. Explore more below.",
  };

  return (
    <div>
      <Header />
      <ServiceHero
        title={selectedService.title}
        description={selectedService.description}
      />
      <div
        id="services"
        className="mt-24 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0"
      >
        {/* Text Section */}
        <div className="w-full md:w-auto text-left">
          <p className="uppercase text-sm sm:text-base font-semibold">
            Our Services
          </p>
          <p className="text-xl sm:text-2xl mt-1 text-green-500 font-bold">
            Tailored Solutions According to Your Needs
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full md:w-auto text-left md:text-right">
          <a
            href="/#book"
            className="uppercase bg-orange-500 py-4 font-semibold px-5 text-white rounded-xl hover:bg-orange-600 transition duration-200 text-xs sm:text-sm w-full md:w-auto text-center block"
          >
            Book An Appointment
          </a>
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
            />
          ))}
        </div>
      </div>
      <AboutTab />
      <Customer />
      <Faq />
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Services;
