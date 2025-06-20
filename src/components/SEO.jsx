import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Waste Rescuers - Fast & Affordable Waste Removal Services London", 
  description = "Professional waste removal services in London. Upper Tier Carrier registered (CBDU571009). Fast, eco-friendly waste disposal. Trusted by 2,240+ customers. Book now!",
  keywords = "waste removal London, rubbish removal, mattress removal, furniture removal, garden waste removal, man and van, waste disposal",
  canonical
}) => {
  const fullTitle = title.includes('Waste Rescuers') ? title : `${title} | Waste Rescuers`;
  const currentUrl = canonical || window.location.href;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/logo.webp" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/assets/logo.webp" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;