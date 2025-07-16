import React from "react";
import VideoPlayer from "./VideoPlayer";

const ServiceSection = ({ 
  title, 
  content, 
  phoneNumber = "+44-7749991862",
  onBookAppointment,
  showVideo = true,
  videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4",
  thumbnailUrl = "https://cdn.prod.website-files.com/616e938268c8f0a92cb2b540/626b2105eca8a62c25bbd9f0_youtube%20thumbnail%20size%20and%20best%20practices%20by%20veed%20studio.jpg"
}) => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {title}
          </h2>
          <div className="text-gray-700 space-y-4">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-green-500 text-white text-center py-3 px-5 rounded hover:bg-green-600 transition duration-200"
            >
              Call {phoneNumber}
            </a>
            <button 
              onClick={onBookAppointment}
              className="bg-orange-500 text-white py-3 px-5 rounded hover:bg-orange-600 transition duration-200"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Video Player */}
        {showVideo && (
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <VideoPlayer
              videoUrl={videoUrl}
              thumbnailUrl={thumbnailUrl}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;