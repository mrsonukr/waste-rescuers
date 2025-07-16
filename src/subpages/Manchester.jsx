import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import ManchesterFaq from "../components/ui/faqui/Manchester";
import { locationData } from "../data/locationData";

const Manchester = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.manchester}
      faqComponent={ManchesterFaq}
    />
  );
};

export default Manchester;