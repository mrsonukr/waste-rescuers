import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;