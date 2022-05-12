import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
      <InfoCard
        bgColor="bg-gradient-to-r from-secondary to-primary"
        title="Opening Hours"
        desc="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
      />
      <InfoCard
        bgColor="bg-accent"
        title="Visit our location"
        desc="Brooklyn, NY 10036, United States"
        img={marker}
      />
      <InfoCard
        bgColor="bg-gradient-to-r from-secondary to-primary"
        title="Contact us now"
        desc="+000 123 456789"
        img={phone}
      />
    </div>
  );
};

export default Info;
