import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import { locationData } from "../data/locationData";

const Birmingham = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.birmingham}
    />
  );
};

export default Birmingham;