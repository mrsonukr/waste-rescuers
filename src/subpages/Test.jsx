import React, { useState } from "react";
import Header from "../components/Header";
import { CheckCircle } from "lucide-react";
import Faq from "../components/ui/faqui/Manchester.jsx";
import BookAppointment from "../components/ui/BookAppointment";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import BookingPopup from "../components/ui/BookingPopup";
import Footer from "../components/Footer";
import VideoPlayer from "../components/ui/VideoPlayer.jsx";
const Test = () => {
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
          <h1 className="text-xl md:text-3xl font-semibold capitalize mb-6">
            garden waste removal in manchester
            <br />
            <span className="text-xs">
              Call Now for a free same-day quotation
            </span>
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
              Waste Removal Manchester
            </h2>
            <p className="text-gray-700 mb-4">
              We have helped hundreds of Domestic & Commercial customers to
              tackle their waste removal jobs throughout Manchester and the
              surrounding area.
            </p>
            <p className="text-gray-700 mb-6">
              First established in 2010, Clearance And Clean Up Ltd have grown
              to be one of the largest and most reviewed Waste Removal Companies
              in Manchester. Don’t take our word for it, check out our google
              reviews. Clearance And Clean Up Ltd can carry out jobs from a
              single item to multiple truck loads from anywhere in the
              Manchester area.
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
              The best waste removal company
            </h2>
            <p className="text-gray-700 mb-4">
              We have listed some of the reasons why our customers use Clearance
              And Clean Up Below.
            </p>
            <p className="text-gray-700 mb-4">
              CRB Checked Staff Members. Fully Insured & Uniformed. New Sign
              Written Vans. Fully Licensed. Experienced & Trained.
            </p>
            <p className="text-gray-700 mb-4">
              Our highly skilled and motivated workforce are experienced enough
              to work on varying specifications of Waste Removal Manchester. We
              have carried out 100s of Waste Removal jobs in the area for both
              domestic and commercial customers.
            </p>
            <p className="text-gray-700">
              If you need any more help please give us call our office is open 6
              days per week and would be more than happy to assist you with all
              your questions.
            </p>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              Our waste removal customers include:
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
                href="tel:08004101086"
                className="bg-green-500 text-white text-center py-3 px-5 rounded hover:bg-green-600"
              >
                Call 0800 4101086
              </a>
              <button className="bg-orange-500 text-white py-3 px-5 rounded hover:bg-orange-600">
                View Our Prices
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why use our Manchester service?
            </h2>
            <p className="text-gray-700 mb-4">
              Our Manchester waste removal team is more reliable than a single
              person outfit. Having a fleet of vehicles means we can handle most
              unplanned events. So, something which could cause issues for
              smaller companies is unlikely to affect us.
            </p>
            <p className="text-gray-700 mb-4">
              Our office staff is available all day to take your calls. Meaning
              you get any queries answered immediately. If you need to make
              changes to your collection or have any issues, give us a call. We
              are ready to react to emergencies and make arrangements to ensure
              everything runs smoothly.
            </p>
            <p className="text-gray-700">
              Clearance and Clean Up provide a professional service from start
              to finish. We use a state-of-the-art online booking system. And
              have an experienced office staff and excellent field team. These
              things make us the obvious choice for waste removal in Manchester.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              How our waste removal works
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li>
                Head to our 24-hour online booking system to see our price guide
                and book now.
              </li>
              <li>
                Receive an email confirmation and invoice for your booking.
              </li>
              <li>
                Your waste removal will be completed on the specified date.
              </li>
              <li>You’ll receive paperwork to prove a proper disposal.</li>
              <li>
                Clearance and Clean Up are Manchester’s number one choice for
                waste removal. We’re over 10 years old and have completed 1000’s
                of waste removal jobs throughout Manchester and the surrounding
                area. We are fully licensed and insured waste carriers and
                provide a professional and customer focused service.
              </li>
            </ul>
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

export default Test;
