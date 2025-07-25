import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import { locationData } from "../data/locationData";

const London = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.london}
    />
  );
};

export default London;