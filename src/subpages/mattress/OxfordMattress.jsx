import React from "react";
import LocationPageLayout from "../../components/ui/LocationPageLayout";
import { mattressLocationData } from "../../data/mattressLocationData";

const OxfordMattress = () => {
  return (
    <LocationPageLayout 
      locationData={mattressLocationData.oxford}
    />
  );
};

export default OxfordMattress;