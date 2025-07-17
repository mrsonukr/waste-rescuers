import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import { locationData } from "../data/locationData";

const Manchester = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.manchester}
    />
  );
};

export default Manchester;