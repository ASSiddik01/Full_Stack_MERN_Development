import React, { useEffect, useState } from "react";
import { format } from "date-fns";

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
        {services.length}
      </h4>
    </div>
  );
};

export default AvailableAppionment;
