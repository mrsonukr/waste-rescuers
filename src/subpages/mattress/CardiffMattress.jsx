import React from "react";
import LocationPageLayout from "../../components/ui/LocationPageLayout";
import { mattressLocationData } from "../../data/mattressLocationData";

const CardiffMattress = () => {
  return (
    <LocationPageLayout 
      locationData={mattressLocationData.cardiff}
    />
  );
};

export default CardiffMattress;