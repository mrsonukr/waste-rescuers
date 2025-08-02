import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import TrailingSlashRedirect from "./components/TrailingSlashRedirect";
import London from "./subpages/London";
import LondonMattress from "./subpages/mattress/LondonMattress";

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
          <Route path="/services/:serviceSlug" element={<Services />} />
          <Route path="/services/:serviceSlug/:location" element={<Services />} />
          <Route path="*" element={<NotFound />} />
          
          {/* Waste Removal Location Pages */}
          <Route path="/services/waste-removal/london" element={<London />} />
          
          {/* Mattress Removal Location Pages */}
          <Route path="/services/mattress-removal/london" element={<LondonMattress />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
