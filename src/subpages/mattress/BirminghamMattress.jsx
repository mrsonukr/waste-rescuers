import React from "react";
import LocationPageLayout from "../../components/ui/LocationPageLayout";
import { mattressLocationData } from "../../data/mattressLocationData";

const BirminghamMattress = () => {
  return (
    <LocationPageLayout 
      locationData={mattressLocationData.birmingham}
    />
  );
};

export default BirminghamMattress;