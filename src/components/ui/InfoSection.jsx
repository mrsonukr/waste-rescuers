import React from "react";

const InfoSection = ({ 
  title, 
  content, 
  image, 
  imageAlt, 
  links = [],
  imagePosition = "left" // "left" or "right"
}) => {
  const ImageComponent = () => (
    <div>
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-auto rounded shadow-md"
      />
    </div>
  );

  const ContentComponent = () => (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      <div className="text-gray-700 space-y-4">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {links.length > 0 && (
        <ul className="list-disc list-inside text-orange-500 space-y-1 mt-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url || "#"} className="hover:underline">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {imagePosition === "left" ? (
          <>
            <ImageComponent />
            <ContentComponent />
          </>
        ) : (
          <>
            <ContentComponent />
            <ImageComponent />
          </>
        )}
      </div>
    </section>
  );
};

export default InfoSection;