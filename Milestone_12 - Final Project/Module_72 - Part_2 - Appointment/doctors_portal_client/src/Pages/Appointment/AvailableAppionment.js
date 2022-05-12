import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./Service";

const AvailableAppionment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-xl font-bold text-secondary text-center">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AvailableAppionment;
