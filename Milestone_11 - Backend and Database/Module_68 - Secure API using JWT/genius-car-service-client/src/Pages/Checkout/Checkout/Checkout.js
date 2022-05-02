import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../../hooks/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  return (
    <div className="w-50 mx-auto">
      <h2>Please Checkout :: {service.name} </h2>
      <form>
        <input type="text" name="name" placeholder="Your name" required id="" />
      </form>
    </div>
  );
};

export default Checkout;
