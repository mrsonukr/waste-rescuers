import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import LondonFaq from "../components/ui/faqui/LondonFaq";
import { locationData } from "../data/locationData";

const London = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.london}
      faqComponent={LondonFaq}
    />
  );
};

export default London;