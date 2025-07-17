import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import { locationData } from "../data/locationData";

const Cardiff = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.cardiff}
    />
  );
};

export default Cardiff;