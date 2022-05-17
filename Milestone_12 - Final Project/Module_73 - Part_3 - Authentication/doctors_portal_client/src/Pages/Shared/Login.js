import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// hook form
import { useForm } from "react-hook-form";
import Loading from "./Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  // Google sign in
  const [signInWithGoogle, googelUser, googelLoading, googelError] =
    useSignInWithGoogle(auth);

  // Email sign in
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  // navigate
  const navigate = useNavigate();

  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // For required auth
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // user
  if (googelUser || emailUser) {
    navigate(from, { replace: true });
  }

  // Loading
  if (googelLoading || emailLoading) {
    return <Loading />;
  }

  // Error
  let errorMessage;
  if (googelError || emailError) {
    errorMessage = (
      <p className="text-red-600">
        {" "}
        {googelError?.message} {emailError?.message}{" "}
      </p>
    );
  }

  // handle submit
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
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
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* Password */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Minumum 6 charcter",
                  },
                })}
                type="password"
                placeholder="Type your password"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* Navigate Signup form */}
            <p>
              <small>
                New to Doctors Portal{" "}
                <Link to="/signup" className="text-secondary">
                  Create Account
                </Link>{" "}
              </small>
            </p>
            <p className="mb-2">{errorMessage}</p>
            <input
              className="btn w-full max-w-xs"
              value="Login"
              type="submit"
            />
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
