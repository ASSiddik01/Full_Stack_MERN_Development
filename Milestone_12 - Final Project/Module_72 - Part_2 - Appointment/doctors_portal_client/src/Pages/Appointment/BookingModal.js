import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null);
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
              value={format(date, "PP")}
              className="input input-bordered input-secondary w-full max-w-lg mt-2"
            />
            <select
              name="slot"
              className="input input-secondary w-full max-w-lg mt-2"
            >
              <option disabled selected>
                Select Schedual
              </option>
              {slots?.map((slot) => (
                <option value={slot}> {slot} </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered input-secondary w-full max-w-lg mt-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
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
