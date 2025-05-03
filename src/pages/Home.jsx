import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ListCard from "../components/ui/ListCard";
import Footer from "../components/Footer";
import ContactCard from "../components/ui/ContactCard";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="relative z-10 -mt-12 flex flex-col md:flex-row justify-center items-stretch w-full max-w-7xl mx-auto px-4 gap-4 md:gap-6">
        <ListCard />
        <ContactCard />
      </div>
      <div className=" h-20 mt-14 px-16 flex items-center justify-between">
        <div>
          <p className="uppercase text-lg font-semibold">Our Services</p>
          <p className="text-3xl mt-1 text-green-500 font-bold">
            Tailored Solutions According to Your Needs
          </p>
        </div>
        <div>
          <button className="uppercase bg-orange-500 py-3 px-6 text-white rounded-xl hover:bg-orange-600 transition duration-200 text-sm sm:text-base">
            Book An Appointment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
