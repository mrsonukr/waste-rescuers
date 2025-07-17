import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import { locationData } from "../data/locationData";

const Oxford = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.oxford}
    />
  );
};

export default Oxford;