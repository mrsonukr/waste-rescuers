import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import BookingPopup from "../components/ui/BookingPopup";
import SEO from "../components/SEO";
import { FaUsers, FaAward, FaRecycle, FaClock, FaShieldAlt, FaHandshake } from "react-icons/fa";

const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const values = [
    {
      icon: <FaUsers className="text-green-600 text-4xl" />,
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above everything else, ensuring personalized service for every client."
    },
    {
      icon: <FaRecycle className="text-blue-600 text-4xl" />,
      title: "Environmental Responsibility",
      description: "We're committed to sustainable waste management practices, maximizing recycling and minimizing landfill impact."
    },
    {
      icon: <FaShieldAlt className="text-orange-600 text-4xl" />,
      title: "Reliability & Trust",
      description: "Our fully licensed and insured operations ensure you can trust us with your waste removal needs completely."
    },
    {
      icon: <FaClock className="text-purple-600 text-4xl" />,
      title: "Efficiency",
      description: "We value your time and provide prompt, efficient service without compromising on quality or safety."
    },
    {
      icon: <FaAward className="text-yellow-600 text-4xl" />,
      title: "Excellence",
      description: "We strive for excellence in every job, maintaining the highest standards of professionalism and service quality."
    },
    {
      icon: <FaHandshake className="text-red-600 text-4xl" />,
      title: "Integrity",
      description: "Honest pricing, transparent processes, and ethical business practices form the foundation of our operations."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Waste Rescuers was established with a vision to revolutionize waste removal services in London."
    },
    {
      year: "2021",
      title: "Licensed Carrier Status",
      description: "Obtained Upper Tier Carrier Registration (CBDU571009) from the Environment Agency."
    },
    {
      year: "2022",
      title: "1000+ Customers Served",
      description: "Reached our first major milestone of serving over 1,000 satisfied customers across London."
    },
    {
      year: "2023",
      title: "Service Expansion",
      description: "Expanded our services to include specialized furniture removal and garden waste clearance."
    },
    {
      year: "2024",
      title: "2000+ Happy Customers",
      description: "Doubled our customer base while maintaining our 99.9% customer satisfaction rate."
    },
    {
      year: "2025",
      title: "Sustainability Focus",
      description: "Launched our enhanced eco-friendly initiatives, achieving 85% waste diversion from landfills."
    }
  ];

  return (
    <div>
      <SEO 
        title="About Waste Rescuers - Professional Waste Removal Company London"
        description="Learn about Waste Rescuers, London's trusted waste removal company. Upper Tier Carrier registered (CBDU571009). 2,240+ satisfied customers, eco-friendly disposal, professional service since 2020."
        keywords="about waste rescuers, waste removal company London, professional waste disposal, licensed waste carriers, eco-friendly waste removal, company history"
        canonical="https://wasterescuers.uk/about"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-green-600">Waste Rescuers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner for professional waste removal services across London. 
            We don't just remove waste – we rescue spaces and give them back their purpose.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Our Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/assets/sofa-holder.webp"
                alt="Waste Rescuers team in action"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2020 with a passion for helping people reclaim their spaces, 
                <strong> Waste Rescuers</strong> was born from the belief that a clean environment 
                leads to a clearer mind. We understand how overwhelming clutter, garden waste, 
                or post-renovation debris can be—and we're here to make your life easier with 
                fast, friendly, and reliable service.
              </p>
              <p>
                What started as a small local operation has grown into London's most trusted 
                waste removal company, serving over <strong>2,240 satisfied customers</strong> 
                and removing more than <strong>3,600 tonnes</strong> of waste responsibly. 
                Our success is built on three pillars: exceptional customer service, 
                environmental responsibility, and unwavering reliability.
              </p>
              <p>
                As an <strong>Upper Tier Carrier registered with the Environment Agency 
                (CBDU571009)</strong>, we operate with full legal compliance and insurance 
                coverage. Our team of experienced professionals is committed to providing 
                transparent, honest service with no hidden fees or surprises.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide fast, reliable, and environmentally responsible waste removal 
              services that help our customers reclaim their spaces while protecting 
              our planet for future generations.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be London's leading waste removal company, recognized for our 
              commitment to sustainability, customer satisfaction, and innovative 
              waste management solutions.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Promise</h3>
            <p className="text-gray-700 leading-relaxed">
              We promise to treat every customer with respect, handle every job with 
              care, and dispose of every item responsibly. Your satisfaction and 
              our planet's wellbeing are our top priorities.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Excellence</h3>
              <ul className="space-y-2 text-sm">
                <li>• Fully licensed and insured waste carriers</li>
                <li>• Experienced, uniformed, and courteous staff</li>
                <li>• Modern, well-maintained vehicles and equipment</li>
                <li>• Comprehensive health and safety protocols</li>
                <li>• 24/7 customer support and emergency services</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Environmental Leadership</h3>
              <ul className="space-y-2 text-sm">
                <li>• 85% waste diversion from landfills</li>
                <li>• Partnerships with local recycling facilities</li>
                <li>• Donation programs for reusable items</li>
                <li>• Carbon-neutral delivery options</li>
                <li>• Sustainable business practices throughout operations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Dedicated Team</h2>
          <div className="text-center space-y-4 text-gray-700 leading-relaxed">
            <p>
              Behind every successful waste removal job is our team of dedicated professionals. 
              Our staff undergoes rigorous training in safety protocols, customer service, 
              and environmental best practices. We believe that our people are our greatest 
              asset, and their commitment to excellence is what makes Waste Rescuers the 
              preferred choice for thousands of customers across London.
            </p>
            <p>
              From our friendly customer service representatives who take your calls to 
              our skilled removal specialists who handle your waste with care, every team 
              member is committed to providing you with an exceptional experience. We're 
              not just colleagues – we're a family united by our shared mission to make 
              London cleaner, one job at a time.
            </p>
          </div>
        </div>

        {/* Certifications and Compliance */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Certifications & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Compliance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Upper Tier Carrier Registration: CBDU571009</li>
                <li>• Environment Agency Licensed</li>
                <li>• Companies House Registration: 16260822</li>
                <li>• Full Public Liability Insurance</li>
                <li>• GDPR Compliant Data Protection</li>
                <li>• Health & Safety Executive Compliance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Standards</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ISO 14001 Environmental Management</li>
                <li>• Waste Transfer Note Documentation</li>
                <li>• Duty of Care Compliance</li>
                <li>• Regular Audit and Inspection Programs</li>
                <li>• Continuous Staff Training and Development</li>
                <li>• Customer Satisfaction Monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join over 2,240 satisfied customers who trust Waste Rescuers for their waste removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openPopup}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition duration-200"
            >
              Book An Appointment
            </button>
            <a
              href="tel:+447749991862"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-full font-semibold transition duration-200"
            >
              Call Now: +44 7749991862
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default About;