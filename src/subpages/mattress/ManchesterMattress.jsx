import React from "react";
import LocationPageLayout from "../../components/ui/LocationPageLayout";
import { mattressLocationData } from "../../data/mattressLocationData";

const ManchesterMattress = () => {
  return (
    <LocationPageLayout 
      locationData={mattressLocationData.manchester}
    />
  );
};

export default ManchesterMattress;