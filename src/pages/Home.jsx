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
      <Footer />
    </div>
  );
};

export default Home;