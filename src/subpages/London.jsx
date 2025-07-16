import React, { useState } from "react";
import Header from "../components/Header";
import { CheckCircle } from "lucide-react";
import Faq from "../components/ui/faqui/LondonFaq";
import BookAppointment from "../components/ui/BookAppointment";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import BookingPopup from "../components/ui/BookingPopup";
import Footer from "../components/Footer";
const London = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div>
      <Header />
      <section className="bg-yellow-200 h-auto md:h-72 px-4 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full gap-6">
          {/* Left Content */}
          <div className=" md:w-1/2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Rubbish and Waste Removal London
            </h3>
            <p className="text-sm md:text-base">
              We specialise in providing waste collections in and around the
              Capital.
            </p>
            <button className="uppercase bg-black text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition">
              Get a Quote
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/dustbin.png"
              alt="Dustbin"
              className="w-40 md:w-60 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Waste Removal London by Clearance And Clean Up Ltd.
            </h2>
            <p className="text-gray-700 mb-4">
              We have helped hundreds of Domestic & Commercial customers to
              tackle their waste removal jobs throughout London and the
              surrounding areas.
            </p>
            <p className="text-gray-700 mb-6">
              First established in 2010, Clearance And Clean Up Ltd has grown to
              be one of the largest and most reviewed Waste Removal Companies.
              Don’t take our word for it; check out our google reviews.
              Clearance And Clean Up Ltd can carry out jobs from a single item
              to multiple truck loads from anywhere in the London area.
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
              Waste Removal London Service
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
              to work on varying specifications of Waste Removal London. We have
              carried out 100s of Waste Removal jobs in the area for both
              domestic and commercial customers.
            </p>
            <p className="text-gray-700">
              If you need any more help please give us call. Our office is open
              6 days per week and would be more than happy to assist you with
              all your questions.
            </p>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-xl font-semibold text-orange-600 mb-4">
              Our Waste Removal London customers include:
            </h3>
            <ul className="space-y-4 text-gray-800">
              {[
                "Domestic Households: Single Items to Full Loads.",
                "Estate & Letting Agents.",
                "Commercial Landlords & Landowners.",
                "Shops, Bars & Restaurants.",
                "Refurbishment Companies, Shop Fitters, Builders Etc.",
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
                className="bg-green-500 text-white text-center py-3 px-5 rounded  hover:bg-green-600"
              >
                Call +44-7749991862
              </a>
              <button className="bg-orange-500 text-white py-3 px-5 rounded  hover:bg-orange-600">
                View Prices & Book Online
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div>
            <img
              src="/assets/waste-carrier.jpg" // Replace with actual path
              alt="Waste Carrier Truck"
              className="w-full h-auto rounded shadow-md"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Waste Carrier Licence
            </h2>
            <p className="text-gray-700 mb-4">
              From January 2014, new regulations mean that companies
              transporting waste as part of their business (whether it’s their
              waste or someone else’s) have to register for a Waste Carriers
              Licence. This includes contractors like Hydro Cleansing but also
              any company that conducts water discharge activities. We highly
              recommend giving us a call to see what we can do for you today to
              avoid costly fines.
            </p>
            <p className="text-gray-700 mb-4">
              Check out our fleet vehicles ready to tackle your wet waste
              management:
            </p>
            <ul className="list-disc list-inside text-orange-500 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Terminator Vacuum Tanker
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  The Hydra Combination Tanker
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Super Combination Tankers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wrath of Poseidon Super Combination Tanker
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Articulated Tankers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bulk Tankers
                </a>
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

export default London;
