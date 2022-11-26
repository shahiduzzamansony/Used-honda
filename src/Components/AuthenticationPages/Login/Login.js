import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { emailSignin, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return (
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    );
  }

  const handleLogin = (data) => {
    console.log(data);
    emailSignin(data.email, data.password)
      .then((user) => {
        // console.log(user);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className=" flex justify-center items-center  drop-shadow-lg">
      <div className="my-20 border rounded-md border-accent w-1/3 px-8 py-10">
        <h2 className="text-center text-3xl">LogIn</h2>
        <div className=" my-6">
          <form onSubmit={handleSubmit(handleLogin)}>
            <input
              className="input input-bordered input-accent w-full my-4"
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
                value="LOGIN"
                type="submit"
              />
            </div>
          </form>
          <p className=" text-center">
            New to the website{" "}
            <Link to="/signup" className="text-accent">
              create account here !
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

export default Login;
