import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="font-bold text-xl text-secondary  text-center">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span> {slots[0]} </span>
          ) : (
            <span className="text-red-500"> No Slot Available </span>
          )}
        </p>
        <p className="uppercase">
          {slots.length} {slots.length > 1 ? "SPACES " : "SPACE "}
          AVAILABLE{" "}
        </p>
        <div class="card-action">
          <label
            for="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            class="btn modal-button btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;