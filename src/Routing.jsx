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
import Cardiff from "./subpages/Cardiff";
import MiltonKeynes from "./subpages/MiltonKeynes";
import Maidenhead from "./subpages/Maidenhead";
import Oxford from "./subpages/Oxford";
import LondonMattress from "./subpages/mattress/LondonMattress";
import BirminghamMattress from "./subpages/mattress/BirminghamMattress";
import ManchesterMattress from "./subpages/mattress/ManchesterMattress";
import CardiffMattress from "./subpages/mattress/CardiffMattress";
import MiltonKeynesMattress from "./subpages/mattress/MiltonKeynesMattress";
import MaidenheadMattress from "./subpages/mattress/MaidenheadMattress";
import OxfordMattress from "./subpages/mattress/OxfordMattress";

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
          <Route path="/services/waste-removal/manchester" element={<Manchester />} />
          <Route path="/services/waste-removal/birmingham" element={<Birmingham />} />
          <Route path="/services/waste-removal/cardiff" element={<Cardiff />} />
          <Route path="/services/waste-removal/milton-keynes" element={<MiltonKeynes />} />
          <Route path="/services/waste-removal/maidenhead" element={<Maidenhead />} />
          <Route path="/services/waste-removal/oxford" element={<Oxford />} />
          
          {/* Mattress Removal Location Pages */}
          <Route path="/services/mattress-removal/london" element={<LondonMattress />} />
          <Route path="/services/mattress-removal/birmingham" element={<BirminghamMattress />} />
          <Route path="/services/mattress-removal/manchester" element={<ManchesterMattress />} />
          <Route path="/services/mattress-removal/cardiff" element={<CardiffMattress />} />
          <Route path="/services/mattress-removal/milton-keynes" element={<MiltonKeynesMattress />} />
          <Route path="/services/mattress-removal/maidenhead" element={<MaidenheadMattress />} />
          <Route path="/services/mattress-removal/oxford" element={<OxfordMattress />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
