import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [fireError, SetFireError] = useState("");
  const { emailSignin, loading, googleSignin } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
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

  const handleGoogleIn = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          const userInfo = {
            name: user?.displayName,
            email: user?.email,
            role: "Buyer",
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                // setCreateUserEmail(user?.email);
                navigate("/");
                toast.success("Account Create successfull with save user");
              } else {
                // setCreateUserEmail(user?.email);
                toast.error(data.message);
                navigate(from, { replace: true });
              }
            })
            .catch((err) => {
              console.error(err.message);
            });
        }
        //   authJwt(user)
      })
      .then((err) => console.error(err));
  };

  const handleLogin = (data) => {
    // console.log(data);
    emailSignin(data.email, data.password)
      .then((user) => {
        // console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((err) => SetFireError(err));
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
            <p className="text-red-600">{fireError}</p>
          </form>
          <p className=" text-center">
            New to the website{" "}
            <Link to="/signup" className="text-accent">
              create account here !
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="flex justify-center">
            <button onClick={handleGoogleIn} className="btn btn-wide btn-info">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
