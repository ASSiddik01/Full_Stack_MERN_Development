import React from "react";
// hook form
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // handle submit
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-3xl">Add Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            placeholder="Type your name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        {/* Email */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide valid email",
              },
            })}
            type="email"
            placeholder="Type your email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        {/* Speciality */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <input
            {...register("speciality", {
              required: {
                value: true,
                message: "Speciality is required",
              },
            })}
            type="text"
            placeholder="Type your speciality"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.speciality?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.speciality.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn w-full max-w-xs"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
