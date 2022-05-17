import React from "react";
import appointment from "../../assets/images/appointment.png";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="text-center py-20 px-2 rounded-lg"
    >
      <div className="mb-10 text-white">
        <h5 className="text-xl font-bold text-secondary">Contact Us</h5>
        <h2 className="text-3xl capitalize">Stay connected with us</h2>
      </div>
      <div>
        <form
          className="flex flex-col lg:w-2/6 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="mb-4 rounded p-2"
            placeholder="Email Address"
            type="email"
            {...register("email", { required: true })}
          />
          <input
            className="mb-4 rounded p-2"
            placeholder="Subject"
            type="text"
            {...register("subject", { required: true })}
          />
          <textarea
            className="mb-4 rounded p-2"
            placeholder="Your message"
            type="text"
            {...register("message", { required: true })}
          />
          <small className="text-red-500">All field are required</small>
          <input
            className="btn uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-2 w-3/6 mx-auto"
            type="submit"
            value={`Submit`}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
