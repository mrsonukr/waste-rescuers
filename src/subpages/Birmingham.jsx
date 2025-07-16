import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import BirminghamFaq from "../components/ui/faqui/BirminghamFaq";
import { locationData } from "../data/locationData";

const Birmingham = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.birmingham}
      faqComponent={BirminghamFaq}
    />
  );
};

export default Birmingham;