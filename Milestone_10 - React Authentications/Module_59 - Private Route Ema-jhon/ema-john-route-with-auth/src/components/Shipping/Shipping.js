import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";

const Shipping = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const nameInput = (event) => {
    setEmail(event.target.value);
  };
  const emailInput = (event) => {
    setEmail(event.target.value);
  };
  const addressInput = (event) => {
    setAddress(event.target.value);
  };
  const phoneNumberInput = (event) => {
    setPhoneNumber(event.target.value);
  };

  const createUser = (event) => {};
  return (
    <div className="form_container">
      <div className="form">
        <h2 className="form_title">Shipping Information</h2>
        <form onSubmit={createUser} action="">
          <div className="input_group">
            <label htmlFor="">Name</label>
            <input onBlur={nameInput} type="text" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Email</label>
            <input onBlur={emailInput} type="email" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Address</label>
            <input onBlur={addressInput} type="text" name="" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="">Phone Number</label>
            <input onBlur={phoneNumberInput} type="text" name="" id="" />
          </div>
          <p>{error}</p>
          <input className="form_submit" type="submit" value="Add Shipping" />
        </form>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default Shipping;
