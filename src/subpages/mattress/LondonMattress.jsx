import React from "react";
import LocationPageLayout from "../../components/ui/LocationPageLayout";
import { mattressLocationData } from "../../data/mattressLocationData";

const LondonMattress = () => {
  return (
    <LocationPageLayout 
      locationData={mattressLocationData.london}
    />
  );
};

export default LondonMattress;