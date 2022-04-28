import React, { useEffect, useState } from "react";
import { axios } from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/order?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Order: {orders.length}</h2>
    </div>
  );
};

export default Order;
