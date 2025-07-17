import React from "react";
import LocationPageLayout from "../../components/ui/LocationPageLayout";
import { mattressLocationData } from "../../data/mattressLocationData";

const MaidenheadMattress = () => {
  return (
    <LocationPageLayout 
      locationData={mattressLocationData.maidenhead}
    />
  );
};

export default MaidenheadMattress;