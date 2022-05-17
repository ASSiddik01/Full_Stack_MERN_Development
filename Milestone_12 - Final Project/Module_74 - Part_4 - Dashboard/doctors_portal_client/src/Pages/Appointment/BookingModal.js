import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment }) => {
  // Get user
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatment;

  const formattedDate = format(date, "PP");

  // Booking handle
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.slot.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary text-black hover:text-white"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for :: {name}
          </h3>
          <form onSubmit={handleBooking}>
            <input
              disabled
              value={formattedDate}
              className="input input-bordered input-secondary w-full max-w-lg mt-2"
            />
            <select
              name="slot"
              className="input input-secondary w-full max-w-lg mt-2"
            >
              <option disabled selected>
                Select Schedual
              </option>
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {" "}
                  {slot}{" "}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              className="input input-bordered input-secondary w-full max-w-lg mt-2"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              className="input input-bordered input-secondary w-full max-w-lg mt-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered input-secondary w-full max-w-lg mt-2"
            />
            <input
              type="submit"
              value="Submit"
              className="btn bg-secondary text-black hover:text-white w-full max-w-lg mt-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
