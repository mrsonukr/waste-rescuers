import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ListCard from "../components/ui/ListCard";
import Footer from "../components/Footer";
import ContactCard from "../components/ui/ContactCard";
import SolutionCard from "../components/ui/SolutionCard";
import AboutTab from "../components/AboutTab";
import Customer from "../components/ui/Customer";
import Faq from "../components/ui/Faq";
import BookAppointment from "../components/ui/BookAppointment";
import WhatsAppButton from "../components/ui/WhatsAppButton";

const Home = () => {
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
      title: "Sofa Removal",
      description:
        "Hassle-free sofa disposal with professional and responsible recycling.",
    },
    {
      icon: "/assets/garden.png",
      title: "Garden Waste Removal",
      description:
        "Hassle-Free Garden Waste Removal, Revitalizing Your Outdoors.",
    },
    {
      icon: "/assets/furniture.png",
      title: "Furniture Disposal",
      description:
        "Professional furniture desposal for homes and offices, big or small.",
    },
  ];

  return (
    <div>
      <Header />
      <Hero />
      <div className="relative z-10 -mt-12 flex flex-col md:flex-row justify-center items-stretch w-full max-w-7xl mx-auto px-4 gap-3 md:gap-4">
        <ListCard />
        <ContactCard />
      </div>
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
      <WhatsAppButton />
    </div>
  );
};

export default Home;
