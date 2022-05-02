import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useServiceDetails from "../../../hooks/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  //   const [user, setUser] = useState({
  //     name: "Akbar The Great",
  //     email: "akbar@momo.taj",
  //     address: "Tajmohol Road Md.pur",
  //     phone: "01711111111",
  //   });

  //   const handleAddressChange = (event) => {
  //     console.log(event.target.value);
  //     const { address, ...rest } = user;
  //     const newAddress = event.target.value;
  //     const newUser = { address: newAddress, ...rest };
  //     console.log(newUser);
  //     setUser(newUser);
  //   };

  // Handle Order
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please Checkout :: {service.name} </h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          value={user.displayName}
          placeholder="Your name"
          required
          disabled
          id=""
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          value={user.email}
          placeholder="Your email"
          required
          disabled
          id=""
        />
        <br />
        <input
          className="w-100 mb-2"
          value={service.name}
          type="text"
          name="service"
          placeholder="Your service"
          required
          id=""
        />
        <br />
        <input
          //   onChange={handleAddressChange}
          className="w-100 mb-2"
          type="text"
          name="address"
          //   value={user.address}
          placeholder="Your address"
          required
          id=""
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          name="phone"
          value={user.phone}
          placeholder="Your phone"
          required
          id=""
        />
        <br />
        <input type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
