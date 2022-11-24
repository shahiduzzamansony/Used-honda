import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { createUser } = useContext(AuthContext);
  const handleSignin = (data) => {
    createUser(data.email, data.password);
  };
  return (
    <div className=" flex justify-center items-center  drop-shadow-lg">
      <div className="my-20 border rounded-md border-accent w-1/3 px-8 py-10">
        <h2 className="text-center text-3xl">SignUp</h2>
        <div className=" my-6">
          <form onSubmit={handleSubmit(handleSignin)}>
            <input
              className="input input-bordered input-accent w-full my-4"
              {...register("name", { required: true })}
              placeholder="Full name"
              type="text"
            />
            <input
              className="input input-bordered input-accent w-full mb-4"
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
            />
            <input
              className="input input-bordered input-accent w-full"
              {...register("password", { required: true })}
              placeholder="Password"
              type="password"
            />
            <div className="flex justify-center">
              <input
                className="btn btn-accent btn-wide my-3"
                type="submit"
                value="SIGNUP"
              />
            </div>
          </form>
          <p className=" text-center">
            Already have an account{" "}
            <Link to="/login" className="text-accent">
              Login here !
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="flex justify-center">
            <button className="btn btn-wide btn-info">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;