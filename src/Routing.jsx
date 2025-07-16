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
import Manchester from "./subpages/Manchester";
import Birmingham from "./subpages/Birmingham";
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
          <Route path="/services/waste-removal/london" element={<London />} />
          <Route path="/services/waste-removal/manchester" element={<Manchester />} />
          <Route path="/services/waste-removal/birmingham" element={<Birmingham />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
