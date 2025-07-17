import React from "react";
import LocationPageLayout from "../components/ui/LocationPageLayout";
import { locationData } from "../data/locationData";

const Maidenhead = () => {
  return (
    <LocationPageLayout 
      locationData={locationData.maidenhead}
    />
  );
};

export default Maidenhead;