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
          {/* Regional service pages - must come before general service routes */}
          <Route path="/services/:serviceSlug/:citySlug" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;