import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppionment from "./AvailableAppionment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate} />
      <AvailableAppionment date={date} />
    </div>
  );
};

export default Appointment;
