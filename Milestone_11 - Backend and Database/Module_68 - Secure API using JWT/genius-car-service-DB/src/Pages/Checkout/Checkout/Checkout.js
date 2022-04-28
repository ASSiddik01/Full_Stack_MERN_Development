import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../Shared/Hooks/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  return (
    <div>
      <h2>Please Checkout: {service.name}</h2>
      <form>
        <input type="text" name="name" id="" placeholder="Type your name" />
      </form>
    </div>
  );
};

export default Checkout;
