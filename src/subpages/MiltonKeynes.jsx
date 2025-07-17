import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import { locationData } from "../data/locationData";

const MiltonKeynes = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.miltonKeynes}
    />
  );
};

export default MiltonKeynes;