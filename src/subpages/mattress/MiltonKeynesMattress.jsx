import React from "react";
import LocationPageLayout from "../../components/ui/LocationPageLayout";
import { mattressLocationData } from "../../data/mattressLocationData";

const MiltonKeynesMattress = () => {
  return (
    <LocationPageLayout 
      locationData={mattressLocationData.miltonKeynes}
    />
  );
};

export default MiltonKeynesMattress;