import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// hook form
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user || error) {
    console.log(user, error);
  }

  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">What is your name?</span>
              </label>
              <input
                {...register("email", {
                  pattern: /[A-Za-z]{3}/,
                })}
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <span class="label-text-alt">Alt label</span>
              </label>
            </div>

            {/* <input {...register("firstName", { required: true })} /> */}
            {errors.firstName?.type === "required" && "First name is required"}

            <input {...register("lastName", { required: true })} />
            {errors.lastName && "Last name is required"}

            <input type="submit" />
          </form>
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
