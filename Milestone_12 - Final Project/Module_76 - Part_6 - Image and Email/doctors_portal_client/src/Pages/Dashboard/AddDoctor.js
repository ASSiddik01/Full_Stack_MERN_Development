import React from "react";
// hook form
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

const AddDoctor = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  const imgStorageKey = "0d249f6ebce01b322c3e885d02f76781";
  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // handle submit
  const onSubmit = async (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: img,
          };
        }
        console.log("imgbb", result);
      });
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
          <select
            {...register("speciality")}
            class="select input-bordered w-full max-w-xs"
          >
            {services?.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Photo */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Photo is required",
              },
            })}
            type="file"
            className="input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs mt-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
