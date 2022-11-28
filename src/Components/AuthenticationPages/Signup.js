import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useToken from "../Hooks/useToken";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [fireError, SetFireError] = useState("");
  const { createUser, loading, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
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
  const handleSignup = (data) => {
    // console.log(data);
    const { name, email, role, password } = data;
    createUser(email, password)
      .then((user) => {
        // console.log(user);
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(name, email, role);
          })
          .catch((e) => console.error(e));
      })
      .catch((err) => SetFireError(err));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://used-honda-buy-sell-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("saved used", data);
        toast.success("User created succesfully");
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className=" flex justify-center items-center  drop-shadow-lg">
      <div className="my-20 border rounded-md border-accent w-1/3 px-8 py-10">
        <h2 className="text-center text-3xl">SignUp</h2>
        <div className=" my-6">
          <form onSubmit={handleSubmit(handleSignup)}>
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
            <select
              className="input input-bordered input-accent w-full mb-4"
              {...register("role", { required: true })}
            >
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
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
            <p className="text-red-600">{fireError}</p>
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
