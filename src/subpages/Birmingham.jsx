import React, { useState } from "react";
import Header from "../components/Header";
import { CheckCircle } from "lucide-react";
import Faq from "../components/ui/faqui/BirminghamFaq";
import BookAppointment from "../components/ui/BookAppointment";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import BookingPopup from "../components/ui/BookingPopup";
import Footer from "../components/Footer";
const Birmingham = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div>
      <Header />
      <div
        className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/cleaner.png')", // 👈 Replace with actual image path
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-xl md:text-3xl font-semibold mb-6">
            Building waste removal
            <br />
            Birmingham
          </h1>
          <div className="flex gap-4 justify-center">
            <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-5 rounded-full">
              GET A QUOTE
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-5 rounded-full">
              BOOK ONLINE
            </button>
          </div>
        </div>
      </div>

      <section className="bg-white py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Waste Removal Birmingham
            </h2>
            <p className="text-gray-700 mb-4">
              Are you in the Birmingham area and looking for a hassle-free waste
              removal service? Do you want peace of mind that your items are
              going to a Recycling facility? Meaning you have the paperwork to
              prove legal and ethical Recycling.
            </p>
            <p className="text-gray-700 mb-4">
              Clearance and Clean Up provide waste removal services throughout
              the Birmingham area. We take care of everything from quote to
              completion. Leave your items where they are, and we will do all
              the moving and lifting for you. And if we can get access, there is
              no need for you to attend the collection.
            </p>
            <p className="text-gray-700 mb-6">
              Clearance and Clean Up have provided waste removal in Birmingham
              for over ten years. We have dedicated office and field teams.
              There to take care of you from booking to completion. We are
              Birmingham’s largest and most Google-reviewed waste removal
              company. Give us a call or use our online booking system. We will
              be with you within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+44-7749991862"
                className="bg-green-500 text-white text-center py-3 px-5 rounded  hover:bg-green-600"
              >
                Call +44-7749991862
              </a>
              <button className="bg-orange-500 text-white py-3 px-5 rounded  hover:bg-orange-600">
                View Prices & Book Online
              </button>
            </div>
          </div>

          {/* YouTube Video Embed */}
          <div className="w-full aspect-video rounded-lg overflow-hidden -lg">
            <VideoPlayer
              videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
              thumbnailUrl="https://cdn.prod.website-files.com/616e938268c8f0a92cb2b540/626b2105eca8a62c25bbd9f0_youtube%20thumbnail%20size%20and%20best%20practices%20by%20veed%20studio.jpg" // Replace with your actual image path
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              The best waste removal service in Birmingham
            </h2>
            <p className="text-gray-700 mb-4">
              Our waste removal Birmingham service is for people who would like
              to avoid wasting a day at the tip. You do not want to risk
              damaging and dirtying your car. And cannot think of anything worse
              than filling a skip.
            </p>
            <p className="text-gray-700 mb-4">
              Receive a hassle-free service from our Birmingham waste removal
              team. See our prices and book online 24 hours a day. Or give our
              office staff a call. They will provide an instant quote and book
              you in over the phone. Then take care of everything, from booking
              to completion.
            </p>
            <p className="text-gray-700 mb-4">
              The waste removal Birmingham team members drive sign-written vans.
              They wear full uniform and the correct PPE. The team will collect
              your items from wherever they are, inside or outside the home. If
              we can get to your items, you do not even need to attend the
              collection. Give your instructions to our office staff, and they
              will guide the field team.
            </p>
            <p className="text-gray-700">
              Our waste removal Birmingham team will complete the collection.
              Then your items will go to a Recycling facility. You will receive
              a waste transfer note proving legal and ethical removal.
            </p>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              Our waste removal Birmingham customers include:
            </h3>
            <ul className="space-y-4 text-gray-800">
              {[
                "Domestic Households Single Items to Full Loads.",
                "Estate & Letting Agents.",
                "Commercial Landlords & Landowners.",
                "Shops Bars & Restaurants.",
                "Refurbishment Companies, Shop Fitter, Builders Etc.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="tel:+44-7749991862"
                className="bg-green-500 text-white text-center py-3 px-5 rounded hover:bg-green-600"
              >
                Call +44-7749991862
              </a>
              <button className="bg-orange-500 text-white py-3 px-5 rounded hover:bg-orange-600">
                View Prices & Book Online
              </button>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <BookAppointment />
      <Footer />
      <WhatsAppButton />
      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Birmingham;
