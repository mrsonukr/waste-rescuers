import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import TrailingSlashRedirect from "./components/TrailingSlashRedirect";
import LocationPage from "./pages/LocationPage";

// Valid service slugs
const validServiceSlugs = [
  "waste-removal",
  "mattress-removal", 
  "man-and-van",
  "rubbish-removal",
  "garden-waste-removal",
  "furniture-removal"
];

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <TrailingSlashRedirect />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services" element={<Services />} />
          <Route 
            path="/services/:serviceSlug" 
            element={
              <ServicesWrapper />
            } 
          />
          <Route path="/services/:serviceSlug/:location" element={<LocationPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// Wrapper component to validate service slug
const ServicesWrapper = () => {
  const { serviceSlug } = useParams();
  
  // Check if the service slug is valid
  if (!validServiceSlugs.includes(serviceSlug)) {
    return <NotFound />;
  }
  
  return <Services />;
};

export default Routing;
